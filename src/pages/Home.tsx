import { useNavigate } from 'react-router-dom'
import { useQuiz } from '@/state/quiz'
import { useState } from 'react'
import type { Dificuldade, Modo } from '@/utils/quiz'

/**
 * Página inicial: coleta Nome, Dificuldade e Modo antes de iniciar o quiz.
 * Dispara ação 'config' para preparar estado global e redireciona para /quiz/:modo.
 */
export function Home(){
  const nav = useNavigate()
  const { state, dispatch } = useQuiz()
  const [nome,setNome] = useState(state.nome)
  const [modo,setModo] = useState<Modo>('relacao')
  const [dificuldade,setDificuldade] = useState<Dificuldade>('Easy')

  return (
    <main className="container">
      <div className="grid" style={{gridTemplateColumns:'1fr',gap:16}}>
        <section className="card">
          <h2 style={{color:'var(--color-primary)'}}>Bem-vindo!</h2>
          <label className="label" htmlFor="nome">Nome do Jogador</label>
          <div style={{display:'flex',gap:8}}>
            <input id="nome" className="input" value={nome} onChange={e=>setNome(e.target.value)} placeholder="Seu nome" />
            <button className="btn btn-roxo" onClick={()=>dispatch({type:'setNome', nome})}>Salvar</button>
          </div>
          <div style={{marginTop:12}} className="grid">
            <label className="label" htmlFor="dif">Dificuldade</label>
            <select id="dif" className="input" value={dificuldade} onChange={e=>setDificuldade(e.target.value as Dificuldade)}>
              <option>Easy</option>
              <option>Basic</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>
          <div className="grid" style={{marginTop:12}}>
            <label className="label">Conteúdo</label>
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
              <button className={"btn "+(modo==='logica'?'btn-roxo':'')} onClick={()=>setModo('logica')}>Lógica</button>
              <button className={"btn "+(modo==='relacao'?'btn-roxo':'')} onClick={()=>setModo('relacao')}>Relação</button>
              <button className={"btn "+(modo==='conjuntos'?'btn-roxo':'')} onClick={()=>setModo('conjuntos')}>Conjuntos</button>
            </div>
          </div>
          <div style={{marginTop:12}}>
            <button className="btn btn-roxo" onClick={()=>{ dispatch({type:'config', modo, dificuldade}); nav(`/quiz/${modo}`) }}>Iniciar Quiz</button>
          </div>
        </section>
      </div>
    </main>
  )
}
