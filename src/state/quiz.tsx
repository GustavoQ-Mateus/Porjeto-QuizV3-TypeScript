import { createContext, useContext, useMemo, useReducer } from 'react'
import { temposPorDificuldade, calcBonus, rankingKey, type Modo, type Dificuldade } from '../utils/quiz'

/**
 * Estado global e reducer do Quiz.
 *
 * Responsabilidades:
 * - Manter configuração atual (nome, modo, dificuldade)
 * - Controlar tempo padrão por pergunta conforme dificuldade
 * - Acumular pontuação base (100 por acerto) + bônus por rapidez (ver `calcBonus`)
 * - Registrar estatísticas individuais de cada pergunta respondida
 * - Persistir nome do jogador e ranking em `localStorage`
 * - Expor `QuizProvider` e hook `useQuiz` para consumo nos componentes.
 */

const safeLS: Storage | null = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined' ? window.localStorage : null

/**
 * Shape completo do estado mantido no contexto de Quiz.
 */
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

/** Estatística individual de uma pergunta respondida. */
export type StatPergunta = {
  /** Ordem (0-based) da pergunta dentro do quiz atual */
  index:number
  /** Se a resposta foi correta */
  correta:boolean
  /** Tempo gasto em segundos */
  tempoGasto:number
  /** Texto do enunciado para revisão posterior */
  pergunta:string
  /** Dificuldade vigente no momento da resposta */
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

/** Ações suportadas pelo reducer de Quiz */
type Action =
 | { type:'setNome'; nome:string }
 | { type:'config'; modo:Modo; dificuldade:Dificuldade; total?:number }
 | { type:'registrar'; correta:boolean; tempoGasto:number; pergunta:string }
 | { type:'finalizar' }
 | { type:'reset' }

/**
 * Reducer puro do Quiz.
 * Observações:
 * - `registrar`: incrementa pontuação + bônus, registra estatística e decrementa restantes
 * - `finalizar`: persiste entrada no ranking local
 */
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
      // Persiste ranking compatível com chave dinâmica (modo + dificuldade)
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

// Contexto React para estado + dispatch
const QuizCtx = createContext<{state:EstadoQuiz; dispatch: React.Dispatch<Action>}>({state:inicial, dispatch: ()=>{}})

/** Provider que envolve a aplicação e disponibiliza o estado do quiz */
export function QuizProvider({ children }:{children: React.ReactNode}){
  const [state, dispatch] = useReducer(reducer, inicial)
  const value = useMemo(()=>({state, dispatch}),[state])
  return <QuizCtx.Provider value={value}>{children}</QuizCtx.Provider>
}

/** Hook de conveniência para consumir o contexto do quiz */
export function useQuiz(){ return useContext(QuizCtx) }
