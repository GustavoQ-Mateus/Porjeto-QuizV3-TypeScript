import { createContext, useContext, useMemo, useReducer } from "react";
import { temposPorDificuldade, calcBonus, rankingkey, type Modo, type Dificuldade } from "../utils/quiz";
import { AnimationPlaybackLifecycles } from "framer-motion";
import { g } from "framer-motion/client";
const safeLS: Storage | null = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined' ? window.localStorage : null
export type EstadoQuiz = {
    nome: string
    modo: Modo
    dificuldade: Dificuldade
    tempoPergunta: number
    pontuacao: number
    bonustotal: number
    total: number
    restantes: number
    stats: StatPergunta[]
    concluido: boolean
}
export type StatPergunta = {
    index: number //ordem quiz
    correta: boolean
    tempoGasto: number
    pergunta: string
    dificuldade: Dificuldade
}

const inicial: EstadoQuiz = {
    nome: safeLS?.getItem('quizNome') || '',
    modo: 'relacao',
    dificuldade: 'Easy',
    tempoPergunta: temposPorDificuldade['Easy'],
    pontuacao: 0,
    bonustotal: 0,
    total: 6,
    restantes: 6,
    stats: [],
    concluido: false
}

type Action =
| { type: 'setNome'; nome: string }
| { type: 'config'; modo: Modo; dificuldade: Dificuldade; total?: number }
| { type: 'finalizar' }
| { type: 'reset' }
export function reducer(state: EstadoQuiz, action: Action): EstadoQuiz{
    switch(action.type){
        case 'setNome':
            safeLS?.setItem('quizNome', action.nome)
            return { ...state, nome: action.nome }
            case 'config':{
                const tempoPergunta = temposPorDificuldade[action.dificuldade]
                return { ...state, modo:action.modo, dificuldade:action.dificuldade, tempoPergunta, pontuacao:0, bonusTotal:0, total: action.total??6, restantes: action.total??6, stats:[], concluido:false }
  }
            case 'finalizar': {
                const ls = safeLS || (globalThis as any).localStorage || null
                const key = rankingKey(state.modo, state.dificuldade)
                const raw = ls?.getItem(key)
                const list = raw? JSON.parse(raw) as { 
                    nome:string;
                    pontos:number}[] : []
                const nome = ls?.getItem('quizNome') || state.nome || 'Você'
                list.push({ nome, pontos: state.pontuacao })
                list.sort((a,b) => b.pontos - a.pontos)
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
const QuizCtx = createContext<{state:EstadoQuiz; dispatch: React.Dispatch<Action>}>({state:inicial, dispatch: () => {}})
export function QuizProvider({ children }:{children: React.ReactNode}){
  const [state, dispatch] = useReducer(reducer, inicial)
  const value = useMemo(()=>({state, dispatch}),[state])
  return <QuizCtx.Provider value={value}>{children}</QuizCtx.Provider>
}
export function useQuiz(){return useContext(QuizCtx)}