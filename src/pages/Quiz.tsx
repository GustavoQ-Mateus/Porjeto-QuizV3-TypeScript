import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useQuiz } from '@/state/quiz'
import { temposPorDificuldade, calcBonus, rankingKey, type PerguntaAlternativas, type PerguntaRelacao } from '@/utils/quiz'
import { perguntasRelacao } from '@/data/relacao'
import { perguntasLogica } from '@/data/logica'
import { perguntasConjuntos } from '@/data/conjuntos'

/**
 * Página do Quiz.
 * Fluxo:
 * - Seleciona subconjunto aleatório de perguntas filtradas por dificuldade e modo.
 * - Controla temporizador regressivo por pergunta; timeout registra resposta incorreta automática.
 * - Aplica animações de transição (Framer Motion) e feedback visual de acerto/erro.
 * - Ao finalizar, despacha 'finalizar' e navega para /resultado.
 * Acessibilidade: usa aria-live e foco programático no enunciado em cada troca.
 */
export function Quiz(){
  const { modo } = useParams()
  const nav = useNavigate()
  const { state, dispatch } = useQuiz()

  // pontuação agora vem do provider (state.pontuacao)
  const [restantes, setRestantes] = useState(state.total)
  const [tempoRestante, setTempoRestante] = useState(temposPorDificuldade[state.dificuldade])
  const timerRef = useRef<number | null>(null)
  const inicioRef = useRef<number>(0)

  const dados = useMemo(()=>{
    if(modo==='logica') return perguntasLogica.filter(q=>q.dificuldade===state.dificuldade)
    if(modo==='conjuntos') return perguntasConjuntos.filter(q=>q.dificuldade===state.dificuldade)
    return perguntasRelacao.filter(q=>q.dificuldade===state.dificuldade)
  },[modo, state.dificuldade])

  const selecionadas = useMemo(()=>{
    const arr = dados.slice()
    for(let i=arr.length-1;i>0;i--){ 
      const j = Math.floor(Math.random()*(i+1)); 
      [arr[i],arr[j]]=[arr[j],arr[i]] }
    const sliced = arr.slice(0, state.total)
    // se alternativas, embaralha
    return sliced.map((p:any)=> p.alternativas? embaralhar(p) : p)
  },[dados, state.total])

  const [idx, setIdx] = useState(0)
  const [selecionada, setSelecionada] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<'acerto'|'erro'|null>(null)
  const enunciadoRef = useRef<HTMLDivElement|null>(null)
  const liveRef = useRef<HTMLDivElement|null>(null)
  const atual = selecionadas[idx]

  useEffect(()=>{
    inicioCiclo()
    setSelecionada(null)
    // foco no enunciado quando muda pergunta
    setTimeout(()=>{ enunciadoRef.current?.focus() }, 50)
    return ()=>{ if(timerRef.current) window.clearInterval(timerRef.current) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[idx])

  function inicioCiclo(){
    setTempoRestante(temposPorDificuldade[state.dificuldade])
    inicioRef.current = performance.now()
    if(timerRef.current) window.clearInterval(timerRef.current)
    timerRef.current = window.setInterval(()=>{
      setTempoRestante(prev => {
        if(prev<=1){
          window.clearInterval(timerRef.current!)
          onResposta(null, true)
          return 0
        }
        return prev-1
      })
    }, 1000) as unknown as number
  }

  function embaralhar(p:PerguntaAlternativas){
    const withIdx = p.alternativas.map((t:string,i:number)=>({t,i}))
    for(let i=withIdx.length-1;i>0;i--){ 
      const j = Math.floor(Math.random()*(i+1)); 
      [withIdx[i],withIdx[j]]=[withIdx[j],withIdx[i]] }
      
    const respostaCorreta = withIdx.findIndex(a=> a.i===p.respostaCorreta)
    return { ...p, alternativas: withIdx.map(a=>a.t), respostaCorreta }
  }

  function onResposta(resp: boolean | number | null, timeout=false){
    const tempoGasto = (performance.now()-inicioRef.current)/1000
    const tp = temposPorDificuldade[state.dificuldade]
    let ok = false
    if('resposta' in atual){ ok = resp===atual.resposta }
    else if(typeof resp === 'number'){ ok = resp===atual.respostaCorreta }


    dispatch({ type:'registrar', correta: ok && !timeout, tempoGasto, pergunta: atual.pergunta })

    if(!timeout){
      setFeedback(ok? 'acerto':'erro')
      if(typeof resp === 'number') setSelecionada(resp)
      if(liveRef.current){
        liveRef.current.textContent = ok? 'Resposta correta' : 'Resposta incorreta'
      }
      setTimeout(()=> setFeedback(null), 700)
    } else if(liveRef.current){
      liveRef.current.textContent = 'Tempo esgotado'
    }

    const next = idx+1
    setRestantes(r=> Math.max(0, r-1))
    if(next>=selecionadas.length){ finalizar() }
    else setIdx(next)
  }

  function finalizar(){
    dispatch({ type:'finalizar' })
    nav('/resultado')
  }

  return (
    <main className="container">
      <div ref={liveRef} aria-live="polite" aria-atomic="true" style={{position:'absolute',width:1,height:1,overflow:'hidden',clip:'rect(1px,1px,1px,1px)'}} />
      <section className="card">
        <div className="grid grid-3">
          <div className="card"><div className="label">Pontuação</div><div style={{fontWeight:800}}>{state.pontuacao}</div></div>
          <div className="card"><div className="label">Tempo</div><div style={{fontWeight:800}} aria-live="polite">{tempoRestante}s</div><div style={{height:8,background:'var(--color-track)',borderRadius:6,overflow:'hidden'}}>
            <motion.div
              style={{height:8,background:'var(--color-primary)'}}
              initial={false}
              animate={{width: `${(tempoRestante/temposPorDificuldade[state.dificuldade])*100}%`}}
              transition={{type:'spring', stiffness:120, damping:20}}
            />
          </div></div>
          <div className="card"><div className="label">Perguntas restantes</div><div style={{fontWeight:800}}>{restantes}</div></div>
        </div>
        <AnimatePresence mode="wait">
        <motion.div key={idx} className="card" style={{marginTop:12, position:'relative'}} initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-30}} transition={{duration:0.35}}>
          {'pares' in (atual||{}) && (
            <div className="label">Pares: {(atual as PerguntaRelacao).pares.map(p=>`(${p[0]},${p[1]})`).join(', ')}</div>
          )}
          <div id="enunciado" ref={enunciadoRef} tabIndex={-1} style={{fontWeight:700,marginTop:8, outline:'none'}}>{atual?.pergunta}</div>
          {('alternativas' in (atual||{})) ? (
            <div style={{display:'grid',gap:8,marginTop:12}}>
              {(atual as PerguntaAlternativas).alternativas.map((alt, i)=> {
                const pressed = selecionada===i
                return (
                  <motion.button
                    whileTap={{scale:0.95}}
                    animate={feedback && pressed ? {scale:[1,1.05,1], boxShadow: feedback==='acerto'? '0 0 0 4px rgba(0,200,0,.3)':'0 0 0 4px rgba(200,0,0,.3)'} : {}}
                    transition={{duration:0.6}}
                    key={i}
                    className="btn btn-roxo"
                    aria-pressed={pressed}
                    aria-describedby="enunciado"
                    onClick={()=>onResposta(i)}>{alt}</motion.button>
                )
              })}
            </div>
          ):(
            <div style={{display:'flex',gap:12,marginTop:12}}>
              <motion.button whileTap={{scale:0.95}} animate={feedback? {scale:[1, feedback==='acerto'?1.08:0.92,1]}: {}} className="btn btn-roxo" aria-pressed={selecionada===1} aria-describedby="enunciado" onClick={()=>{ setSelecionada(1); onResposta(true) }}>Sim</motion.button>
              <motion.button whileTap={{scale:0.95}} animate={feedback? {scale:[1, feedback==='erro'?1.08:0.92,1]}: {}} className="btn btn-roxo" aria-pressed={selecionada===0} aria-describedby="enunciado" onClick={()=>{ setSelecionada(0); onResposta(false) }}>Não</motion.button>
            </div>
          )}
          <div style={{marginTop:12}}>
              <button className="btn btn-danger" onClick={()=>nav('/ranking')}>Cancelar/Voltar</button>
          </div>
          {feedback && (
            <motion.div initial={{opacity:0, scale:.8}} animate={{opacity:0.9, scale:1}} exit={{opacity:0}} transition={{duration:0.25}} style={{position:'absolute',top:8,right:8,padding:'4px 10px',borderRadius:20,fontSize:12,background: feedback==='acerto'? 'var(--color-success)':'var(--color-danger)',color:'#fff'}}>
              {feedback==='acerto'? '✓ Acerto':'✗ Erro'}
            </motion.div>
          )}
        </motion.div>
        </AnimatePresence>
      </section>
    </main>
  )
}
