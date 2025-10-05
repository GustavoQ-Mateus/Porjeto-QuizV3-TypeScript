import { createContext, useContext, useMemo, useReducer } from "react";
import { temposPorDificuldade, calcBonus, rankingkey, type Modo, type Dificuldade } from "../utils/quiz";
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
}