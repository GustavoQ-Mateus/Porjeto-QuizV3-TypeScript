import { createContext, useContext, useMemo, useReducer } from 'react'
import { temposPorDificuldade, calcBonus, rankingKey, type Modo, type Dificuldade } from '../utils/quiz'

const safeLS: Storage | null = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined' ? window.localStorage : null

export type EstadoQuiz = {
  nome: string
  modo: Modo
  dificuldade: Dificuldade
  tempoPergunta: number
  pontuacao: number
  bonusTotal: number
  total: number
  restantes: number
  stats: StatPergunta[]
  concluido: boolean
}

export type StatPergunta = {
  index:number // ordem no quiz
  correta:boolean
  tempoGasto:number // segundos
  pergunta:string
  dificuldade:Dificuldade
}

const inicial: EstadoQuiz = {
  nome: safeLS?.getItem('quizNome')||'',
  modo: 'relacao',
  dificuldade: 'Easy',
  tempoPergunta: temposPorDificuldade['Easy'],
  pontuacao: 0,
  bonusTotal: 0,
  total: 6,
  restantes: 6,
  stats: [],
  concluido: false,
}

type Action =
 | { type:'setNome'; nome:string }
 | { type:'config'; modo:Modo; dificuldade:Dificuldade; total?:number }
 | { type:'registrar'; correta:boolean; tempoGasto:number; pergunta:string }
 | { type:'finalizar' }
 | { type:'reset' }

export function reducer(state:EstadoQuiz, action:Action):EstadoQuiz{
  switch(action.type){
    case 'setNome':
  safeLS?.setItem('quizNome', action.nome)
      return { ...state, nome: action.nome }



    case 'config': {
      const tempoPergunta = temposPorDificuldade[action.dificuldade]
  return { ...state, modo:action.modo, dificuldade:action.dificuldade, tempoPergunta, pontuacao:0, bonusTotal:0, total: action.total??6, restantes: action.total??6, stats:[], concluido:false }
    }
    case 'registrar': {
      const base = action.correta ? 100 : 0
      const bonus = action.correta ? calcBonus(state.tempoPergunta, action.tempoGasto) : 0
      const stats:StatPergunta[] = [...state.stats, { index: state.total - state.restantes, correta: action.correta, tempoGasto: action.tempoGasto, pergunta: action.pergunta, dificuldade: state.dificuldade }]
  return { ...state, pontuacao: state.pontuacao + base + bonus, bonusTotal: (state.bonusTotal||0) + bonus, restantes: Math.max(0, state.restantes-1), stats }
    }
    case 'finalizar': {
      // persist ranking compatível
  const ls = safeLS || (globalThis as any).localStorage || null
  const key = rankingKey(state.modo, state.dificuldade)
  const raw = ls?.getItem(key)
      const list = raw? JSON.parse(raw) as {nome:string;pontos:number}[] : []
  const nome = ls?.getItem('quizNome') || state.nome || 'Você'
      list.push({ nome, pontos: state.pontuacao })
      list.sort((a,b)=> b.pontos-a.pontos)
  ls?.setItem(key, JSON.stringify(list))
  ls?.setItem('quizLastRankingConteudo', state.modo)
  ls?.setItem('quizLastRankingDificuldade', state.dificuldade)
      return { ...state, concluido:true }
    }
    case 'reset':
      return { ...inicial, nome: state.nome }
    default:
      return state
  }
}

const QuizCtx = createContext<{state:EstadoQuiz; dispatch: React.Dispatch<Action>}>({state:inicial, dispatch: ()=>{}})

export function QuizProvider({ children }:{children: React.ReactNode}){
  const [state, dispatch] = useReducer(reducer, inicial)
  const value = useMemo(()=>({state, dispatch}),[state])
  return <QuizCtx.Provider value={value}>{children}</QuizCtx.Provider>
}

export function useQuiz(){ return useContext(QuizCtx) }
