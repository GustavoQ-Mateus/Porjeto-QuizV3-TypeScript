export type Dificuldade = 'Easy' | 'Basic' | 'Medium' | 'Hard'
export type Modo = 'relacao' | 'logica' | 'conjuntos'
export const temposPorDificuldade: Record<Dificuldade, number> = {
    Easy: 10,
    Basic: 15,
    Medium: 20,
    Hard: 30
}
export function calcBonus(tempoPergunta:number, tempoGasto:number){
    return Math.max(0, Math.round((tempoPergunta - tempoGasto) * 5))
}
export function rankingkey(conteudo:Modo, dificuldade:Dificuldade){
    return `quizRanking_${conteudo}_${dificuldade}`
}
export type PerguntaRelacao = { 
    dificuldade:Dificuldade;
    pares:number[][];
    pergunta:string;
    resposta:boolean;
    explicacao?:string
}
export type PerguntaAlternativas = {
    dificuldade:Dificuldade;
    pergunta:string;
    alternativas:string[];
    respostaCorreta:number;
    explicacao?:string
}
export function escolherQuestoes<T extends {dificuldade:Dificuldade}>(todas:T[], dificuldade:Dificuldade, n=6):T[]{
    const nivel = todas.filter(q => q.dificuldade===dificuldade)
    const arr = nivel.slice()
    for(let i=arr.length-1; i>0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, n);
}

export function embaralharAlternativas(p: PerguntaAlternativas): PerguntaAlternativas{
    const withIdx = p.alternativas.map((t,i)=>({t,i}))
    for(let i=withIdx.length-1; i>0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [withIdx[i], withIdx[j]] = [withIdx[j], withIdx[i]];
    }
    const respostaCorreta = withIdx.findIndex( a=> a.i === p.respostaCorreta )
    return {
        ...p, alternativas: withIdx.map(a=>a.t), respostaCorreta
    }
}