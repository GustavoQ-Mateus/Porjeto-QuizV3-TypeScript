import { describe, it, expect, beforeEach } from 'vitest'
import { rankingKey, temposPorDificuldade } from '@/utils/quiz'

class MemStorage {
  store: Record<string,string> = {}
  getItem(k:string){ return this.store[k] ?? null }
  setItem(k:string,v:string){ this.store[k]=String(v) }
  removeItem(k:string){ delete this.store[k] }
  clear(){ this.store = {} }
  key(i:number){ return Object.keys(this.store)[i] || null }
  get length(){ return Object.keys(this.store).length }
}
const ls = new MemStorage()
;(globalThis as any).localStorage = ls
;(globalThis as any).window = { localStorage: ls }

import { reducer } from './quiz'

const inicial:any = {
  nome: 'Jogador', modo:'relacao', dificuldade:'Easy', tempoPergunta:temposPorDificuldade['Easy'], pontuacao:0, total:1, restantes:1, stats:[], concluido:false
}

describe('ranking persistence', ()=>{
  beforeEach(()=>{ ls.clear() })

  it('salva entrada no ranking ao finalizar', ()=>{
    const afterReg = reducer(inicial, {type:'registrar', correta:true, tempoGasto:1, pergunta:'Q'})
    const afterFin = reducer(afterReg, {type:'finalizar'})
    const key = rankingKey(afterFin.modo, afterFin.dificuldade)
    const raw = ls.getItem(key)
    expect(raw).not.toBeNull()
    const list = JSON.parse(raw!)
    expect(list.length).toBe(1)
    expect(list[0].pontos).toBeGreaterThan(0)
  })
})
