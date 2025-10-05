import { describe, it, expect } from 'vitest'
import { temposPorDificuldade } from '@/utils/quiz'
import type { Dificuldade, Modo } from '@/utils/quiz'
import { reducer } from './quiz'

function runSequence(actions:any[], initial:any){
  return actions.reduce((s,a)=> reducer(s,a), initial)
}

describe('quiz reducer', ()=>{
  const inicial: any = {
    nome: '', modo: 'relacao' as Modo, dificuldade: 'Easy' as Dificuldade,
    tempoPergunta: temposPorDificuldade['Easy'], pontuacao:0, bonusTotal:0, total:2, restantes:2, stats:[], concluido:false
  }

  it('registrar adiciona pontuação e estat', ()=>{
    const after = runSequence([
      {type:'registrar', correta:true, tempoGasto:1, pergunta:'Q1'}
    ], inicial)
    expect(after.pontuacao).toBeGreaterThanOrEqual(100)
    expect(after.stats).toHaveLength(1)
    
    expect(after.restantes).toBe(1)
  })

  it('timeout (correta=false) não adiciona bônus', ()=>{
    const after = runSequence([
      {type:'registrar', correta:false, tempoGasto:20, pergunta:'Q1'}
    ], inicial)
    expect(after.pontuacao).toBe(0)
    expect(after.bonusTotal).toBe(0)
  })
})
