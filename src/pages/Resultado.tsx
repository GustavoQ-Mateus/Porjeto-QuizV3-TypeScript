import { useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuiz } from '@/state/quiz'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from 'chart.js'
import { Bar, Doughnut } from 'react-chartjs-2'
ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend)
export function Resultado(){
  const { state, dispatch } = useQuiz()
  const nav = useNavigate()
  useEffect(()=>{
    if(!state.concluido){
      nav('/')
    }
  },[state.concluido, nav])
const acertos = state.stats.filter(s=>s.correta).length
const erros = state.stats.length - acertos
const tempoMedio = state.stats.length ? (state.stats.reduce((a,b)=> a + b.tempoGasto,0)/state.stats.length).toFixed(2) : '0'
const melhorTempo = state.stats.length ? Math.min(...state.stats.map(s=>s.tempoGasto)).toFixed(2) : '0'
const tempoTotalGasto = state.stats.reduce((a,b)=> a + b.tempoGasto,0)
const tempoEstimado = state.total * state.tempoPergunta
const economia = Math.max(0, tempoEstimado - tempoTotalGasto)
const percEconomia = tempoEstimado>0 ? ((economia/tempoEstimado)*100).toFixed(1) : '0'
const pontuacaoBase = acertos * 100
const bonusTotal = state.bonusTotal || 0
const percBonusSobreTotal = state.pontuacao>0 ? ((bonusTotal/state.pontuacao)*100).toFixed(1) : '0'
  const chartBarData = useMemo(()=>({
    labels: ['Acertos','Erros'],
    datasets: [{
      label: 'Quantidade',
      data: [acertos, erros],
      backgroundColor: ['var(--color-success)','var(--color-danger)']
    }]
  }),[acertos, erros])
  const chartPieData = useMemo(()=>({
    labels: state.stats.map(s=>`Q${s.index+1}`),
    datasets: [{
      data: state.stats.map(s=> s.correta?1:0.2),
      backgroundColor: state.stats.map(s=> s.correta? 'var(--color-success)':'var(--color-danger)')
    }]
  }),[state.stats])
  return (
    <main className="container">
      <section className="card">
        <h2 style={{color:'var(--color-primary)'}}>Resultado</h2>
        <div className="grid grid-3" style={{gap:12}}>
          <div className="card"><div className="label">Pontuação</div><div style={{fontWeight:800}}>{state.pontuacao}</div><div style={{fontSize:11,color:'var(--color-text-soft)'}}>Base {pontuacaoBase} + Bônus {bonusTotal}</div></div>
          <div className="card"><div className="label">Acertos</div><div style={{fontWeight:800}}>{acertos}</div></div>
          <div className="card"><div className="label">Erros</div><div style={{fontWeight:800}}>{erros}</div></div>
          <div className="card"><div className="label">Tempo médio</div><div style={{fontWeight:800}}>{tempoMedio}s</div></div>
          <div className="card"><div className="label">Melhor tempo</div><div style={{fontWeight:800}}>{melhorTempo}s</div></div>
          <div className="card"><div className="label">Dificuldade</div><div style={{fontWeight:800}}>{state.dificuldade}</div></div>
          <div className="card"><div className="label">Tempo total</div><div style={{fontWeight:800}}>{tempoTotalGasto.toFixed(2)}s</div></div>
          <div className="card"><div className="label">Estimado</div><div style={{fontWeight:800}}>{tempoEstimado}s</div></div>
          <div className="card"><div className="label">Economia (%)</div><div style={{fontWeight:800}}>{percEconomia}%</div></div>
          <div className="card"><div className="label">Bônus (%)</div><div style={{fontWeight:800}}>{percBonusSobreTotal}%</div></div>
        </div>
  <div style={{marginTop:24, display:'grid', gap:24, gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))'}}>
          <div className="card">
            <h3 style={{marginBottom:8}}>Distribuição</h3>
            <Bar data={chartBarData} options={{plugins:{legend:{display:false}},responsive:true,maintainAspectRatio:false}} height={160} />
          </div>
          {state.stats.length>0 && (
            <div className="card">
              <h3 style={{marginBottom:8}}>Mapa de Acertos</h3>
              <Doughnut data={chartPieData} options={{plugins:{legend:{display:false}}}} />
            </div>
          )}
        </div>
        <div style={{marginTop:24}}>
          <h3 style={{marginBottom:8}}>Revisão das Perguntas</h3>
          <ol style={{display:'grid',gap:8}}>
            {state.stats.map(s=> (
              <li key={s.index} className="card" style={{borderLeft:`4px solid ${s.correta?'var(--color-success)':'var(--color-danger)'}`}}>
                <div style={{fontWeight:600}}>{s.pergunta}</div>
                <div style={{fontSize:12,color:'var(--color-text-soft)'}}>Tempo: {s.tempoGasto.toFixed(2)}s — {s.correta? 'Acertou':'Errou'}</div>
              </li>
            ))}
          </ol>
        </div>
        <div style={{marginTop:24,display:'flex',gap:8,flexWrap:'wrap'}}>
          <button className="btn btn-roxo" onClick={()=>nav('/ranking')}>Ver Ranking</button>
          <button className="btn" onClick={()=>{dispatch({type:'reset'}); nav('/') }}>Novo Quiz</button>
        </div>
      </section>
    </main>
  )
}
