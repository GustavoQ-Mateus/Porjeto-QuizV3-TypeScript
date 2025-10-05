import { useEffect, useMemo, useState } from 'react'
import type { Dificuldade, Modo } from '@/utils/quiz'

function labelConteudo(modo:Modo){
  if(modo==='logica') return 'Lógica'
  if(modo==='conjuntos') return 'Conjuntos'
  return 'Relação'
}

export function Ranking(){
const [conteudo,setConteudo] = useState<Modo>(()=> (localStorage.getItem('quizLastRankingConteudo') as Modo) || 'relacao')
const [dificuldade,setDificuldade] = useState<Dificuldade>(()=> (localStorage.getItem('quizLastRankingDificuldade') as Dificuldade) || 'Easy')
const key = useMemo(()=>`quizRanking_${conteudo}_${dificuldade}`,[conteudo,dificuldade])
const [lista,setLista] = useState<{nome:string;pontos:number}[]>(()=>{
    const raw = localStorage.getItem(key); return raw? JSON.parse(raw):[]
  })
useEffect(()=>{ const raw = localStorage.getItem(key); setLista(raw? JSON.parse(raw):[]) },[key])
function reset(){ localStorage.setItem(key, JSON.stringify([])); setLista([]) }

  return (
    <main className="container">
      <section className="card">
        <h2 style={{color:'var(--color-primary)'}}>Ranking de Pontuações — {labelConteudo(conteudo)} ({dificuldade})</h2>
        <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
          <select className="input" value={conteudo} onChange={e=>setConteudo(e.target.value as Modo)}>
            <option value="relacao">Relação</option>
            <option value="logica">Lógica</option>
            <option value="conjuntos">Conjuntos</option>
          </select>
          <select className="input" value={dificuldade} onChange={e=>setDificuldade(e.target.value as Dificuldade)}>
            <option>Easy</option>
            <option>Basic</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
          <button className="btn btn-danger" onClick={reset}>Resetar ranking</button>
        </div>
        <ul>
          {lista.map((item, idx)=> (
            <li key={idx} className="card" style={{display:'flex',alignItems:'center',gap:8}}>
              {idx<3 && <span style={{fontSize:20}}>{['🥇','🥈','🥉'][idx]}</span>}
              <span>{idx+1}º - {item.nome}: {item.pontos} pontos</span>
            </li>
          ))}
        </ul>
        <div>
          <a className="btn btn-roxo" href="/">Novo Quiz</a>
        </div>
      </section>
    </main>
  )
}
