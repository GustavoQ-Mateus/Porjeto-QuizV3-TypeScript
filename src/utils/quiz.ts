/** Níveis de dificuldade suportados */
export type Dificuldade = 'Easy'|'Basic'|'Medium'|'Hard'
/** Modos/conteúdos de questionário disponíveis */
export type Modo = 'relacao'|'logica'|'conjuntos'

export const temposPorDificuldade: Record<Dificuldade, number> = {
  Easy: 18,
  Basic: 15,
  Medium: 10,
  Hard: 8,
}

/**
 * Calcula bônus de rapidez.
 * Fórmula: (tempoPergunta - tempoGasto) * 5 arredondado, mínimo 0.
 * Ex.: Pergunta de 18s respondida em 8s => (18-8)*5 = 50 pts bônus.
 */
export function calcBonus(tempoPergunta:number, tempoGasto:number){
  return Math.max(0, Math.round((tempoPergunta - tempoGasto) * 5))
}

/** Gera chave de ranking por modo + dificuldade */
export function rankingKey(conteudo:Modo, dificuldade:Dificuldade){
  return `quizRanking_${conteudo}_${dificuldade}`
}

export type PerguntaRelacao = { 
  dificuldade:Dificuldade; 
  pares:number[][]; 
  pergunta:string; 
  resposta:boolean; 
  explicacao?:string }
export type PerguntaAlternativas = { 
  dificuldade:Dificuldade; 
  pergunta:string; 
  alternativas:string[]; 
  respostaCorreta:number; 
  explicacao?:string }

/**
 * Seleciona aleatoriamente `n` questões de uma lista filtrada pela dificuldade.
 * Implementa Fisher-Yates para embaralhamento.
 */
export function escolherQuestoes<T extends {dificuldade:Dificuldade}>(todas:T[], dificuldade:Dificuldade, n=6):T[]{
  const nivel = todas.filter(q=> q.dificuldade===dificuldade)
  const arr = nivel.slice()
  for(let i=arr.length-1;i>0;i--){ 
    const j = Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]];
  }
  return arr.slice(0,n)
}

/** Embaralha alternativas preservando qual índice passa a ser o correto. */
export function embaralharAlternativas(p: PerguntaAlternativas): PerguntaAlternativas{
  const withIdx = p.alternativas.map((t,i)=>({t,i}))
  for(let i=withIdx.length-1;i>0;i--){ 
    const j = Math.floor(Math.random()*(i+1)); 
    [withIdx[i],withIdx[j]]=[withIdx[j],withIdx[i]] 
  }
  const respostaCorreta = withIdx.findIndex(a=> a.i===p.respostaCorreta)
  return { ...p, alternativas: withIdx.map(a=>a.t), respostaCorreta }
}
