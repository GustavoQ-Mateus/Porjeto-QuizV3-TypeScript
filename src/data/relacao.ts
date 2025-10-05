import type { PerguntaRelacao } from '@/utils/quiz'
// Conteúdo convertido de conteudoRelacao.js
// Para manter paridade, não altere textos nem campos
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export const perguntasRelacao: PerguntaRelacao[] = [
 // Easy 1
 {
	"dificuldade": "Easy",
	"pares": [[1,1], [2,2], [3,3]],
	"pergunta": "A relação é reflexiva?",
	"resposta": true,
	"explicacao": "Uma relação é reflexiva se todo elemento a ∈ A está relacionado consigo mesmo, ou seja, (a,a) ∈ R. Aqui, todos os elementos de A = {1, 2, 3} têm pares (1,1), (2,2) e (3,3) na relação R, então ela é reflexiva."
  },
  // Easy 2
  {
	"dificuldade": "Easy",
	"pares": [[1,2], [2,1]],
	"pergunta": "A relação é simétrica?",
	"resposta": true,
	"explicacao": "Uma relação é simétrica se, para todo (a,b) ∈ R, também (b,a) ∈ R. Aqui, temos (1,2) e (2,1), o que satisfaz a condição de simetria."
  },
  // Easy 3
  {
	"dificuldade": "Easy",
	"pares": [[1,1], [1,2], [2,3], [1,3]],
	"pergunta": "A relação é transitiva?",
	"resposta": true,
	"explicacao": "Uma relação é transitiva se, para (a,b) ∈ R e (b,c) ∈ R, então (a,c) ∈ R. Aqui, temos (1,2) e (2,3), e (1,3) está presente, satisfazendo a transitividade."
  },
  // Easy 4
  {
	"dificuldade": "Easy",
	"pares": [[1,1], [2,2], [3,3], [1,2], [2,1]],
	"pergunta": "A relação é de equivalência?",
	"resposta": false,
	"explicacao": "Uma relação de equivalência deve ser reflexiva, simétrica e transitiva. A relação é reflexiva e simétrica, mas não é transitiva, pois (1,2) e (2,1) não levam a outros pares que formem uma cadeia transitiva."
  },
  // Easy 5
  {
	"dificuldade": "Easy",
	"pares": [[1,1]],
	"pergunta": "A relação é reflexiva?",
	"resposta": false,
	"explicacao": "Para ser reflexiva, a relação deve conter (a,a) para todo a ∈ A. Aqui, falta (2,2) para o elemento 2, então a relação não é reflexiva."
  },
  // Easy 6
  {
	"dificuldade": "Easy",
	"pares": [[1,2], [2,1], [1,1]],
	"pergunta": "A relação é simétrica?",
	"resposta": true,
	"explicacao": "A relação é simétrica porque, para (1,2) ∈ R, temos (2,1) ∈ R, e (1,1) é simétrico consigo mesmo."
  },
  // Easy 7
  {
	"dificuldade": "Easy",
	"pares": [[1,1], [2,2]],
	"pergunta": "A relação é reflexiva?",
	"resposta": true,
	"explicacao": "A relação contém (1,1) e (2,2), ou seja, todos os elementos de A = {1, 2} estão relacionados consigo mesmos, tornando a relação reflexiva."
  },
  // Easy 8
  {
	"dificuldade": "Easy",
	"pares": [[1,1], [2,1]],
	"pergunta": "A relação é reflexiva?",
	"resposta": false,
	"explicacao": "Para ser reflexiva, a relação deve incluir (a,a) para todo a ∈ A. Aqui, falta (2,2), então a relação não é reflexiva."
  },
  // Easy 9
  {
	"dificuldade": "Easy",
	"pares": [[1,2], [2,1], [2,2]],
	"pergunta": "A relação é simétrica?",
	"resposta": true,
	"explicacao": "Para cada par (a,b) ∈ R, o par (b,a) também está presente: (1,2) e (2,1) estão na relação, e (2,2) é simétrico consigo mesmo."
  },
  // Easy 10
  {
	"dificuldade": "Easy",
	"pares": [[1,1], [1,2], [2,3], [1,3]],
	"pergunta": "A relação é de equivalência?",
	"resposta": false,
	"explicacao": "Uma relação de equivalência deve ser reflexiva, simétrica e transitiva. Aqui, a relação não é reflexiva (falta (2,2) e (3,3)) e não é simétrica (falta (2,1) para (1,2))."
  },
  // Easy 11
  {
	"dificuldade": "Easy",
	"pares": [[1,1], [2,2], [3,3]],
	"pergunta": "A relação é simétrica?",
	"resposta": true,
	"explicacao": "A relação contém apenas pares (a,a), que são simétricos por definição, pois (a,a) = (a,a). Portanto, a relação é simétrica."
  },
  // Easy 12
  {
	"dificuldade": "Easy",
	"pares": [[1,1], [2,2], [1,2], [2,3]],
	"pergunta": "A relação é transitiva?",
	"resposta": false,
	"explicacao": "Para ser transitiva, se (a,b) ∈ R e (b,c) ∈ R, então (a,c) ∈ R. Aqui, temos (1,2) e (2,3), mas (1,3) não está na relação, então ela não é transitiva."
  },
  // Easy 13
  {
	"dificuldade": "Easy",
	"pares": [[1,1], [2,2], [3,3]],
	"pergunta": "A relação é de equivalência?",
	"resposta": true,
	"explicacao": "A relação é reflexiva (contém (1,1), (2,2), (3,3)), simétrica (os pares (a,a) são simétricos) e transitiva (não há pares (a,b) e (b,c) com b ≠ c, então a transitividade é trivial). Portanto, é de equivalência."
  },
  // Easy 14
  {
	"dificuldade": "Easy",
	"pares": [[1,2]],
	"pergunta": "A relação é simétrica?",
	"resposta": false,
	"explicacao": "Para ser simétrica, se (1,2) ∈ R, então (2,1) também deve estar em R. Como (2,1) não está presente, a relação não é simétrica."
  },
  // Easy 15
  {
	"dificuldade": "Easy",
	"pares": [[1,1], [1,2], [2,1]],
	"pergunta": "A relação é reflexiva?",
	"resposta": false,
	"explicacao": "Para ser reflexiva, a relação deve incluir (2,2) para o elemento 2. Como (2,2) não está presente, a relação não é reflexiva."
  },
  // Easy 16
  {
	"dificuldade": "Easy",
	"pares": [[1,1], [2,2], [1,2], [2,1]],
	"pergunta": "A relação é simétrica?",
	"resposta": true,
	"explicacao": "A relação é simétrica porque, para (1,2) ∈ R, temos (2,1) ∈ R, e os pares (1,1) e (2,2) são simétricos consigo mesmos."
  },
  // Easy 17
  {
	"dificuldade": "Easy",
	"pares": [[1,1], [2,2], [3,3]],
	"pergunta": "A relação é transitiva?",
	"resposta": true,
	"explicacao": "A relação é transitiva porque não há pares (a,b) e (b,c) com b ≠ c para violar a transitividade. Todos os pares são do tipo (a,a), que satisfazem a transitividade trivialmente."
  },
  // Easy 18
  {
	"dificuldade": "Easy",
	"pares": [[1,1], [2,1]],
	"pergunta": "A relação é simétrica?",
	"resposta": false,
	"explicacao": "Para ser simétrica, se (2,1) ∈ R, então (1,2) também deve estar em R. Como (1,2) não está presente, a relação não é simétrica."
  },
  // Easy 19
  {
	"dificuldade": "Easy",
	"pares": [[1,1], [2,2], [1,2], [2,1]],
	"pergunta": "A relação é de equivalência?",
	"resposta": true,
	"explicacao": "A relação é reflexiva ((1,1), (2,2) estão presentes), simétrica ((1,2) e (2,1) estão presentes) e transitiva (não há cadeias (a,b), (b,c) que violem a transitividade). Portanto, é de equivalência."
  },
  // Easy 20
  {
	"dificuldade": "Easy",
	"pares": [[1,2], [2,3]],
	"pergunta": "A relação é transitiva?",
	"resposta": false,
	"explicacao": "Para ser transitiva, se (1,2) ∈ R e (2,3) ∈ R, então (1,3) deve estar em R. Como (1,3) não está presente, a relação não é transitiva."
  },
  // Easy 21
  {
	"dificuldade": "Easy",
	"pares": [[1,1]],
	"pergunta": "A relação é reflexiva?",
	"resposta": true,
	"explicacao": "A relação contém (1,1), que é o único par necessário para A = {1}, tornando-a reflexiva."
  },
  // Easy 22
  {
	"dificuldade": "Easy",
	"pares": [[1,1], [2,2], [3,3], [2,3], [3,2]],
	"pergunta": "A relação é simétrica?",
	"resposta": true,
	"explicacao": "Para cada par (a,b) ∈ R, o par (b,a) também está presente: (2,3) e (3,2), e os pares (a,a) são simétricos consigo mesmos."
  },
  // Easy 23
  {
	"dificuldade": "Easy",
	"pares": [[1,1], [2,2], [3,3], [1,2], [2,1]],
	"pergunta": "A relação é transitiva?",
	"resposta": true,
	"explicacao": "A relação é transitiva porque não há cadeias (a,b) e (b,c) com b ≠ c que violem a transitividade. Os pares (1,2) e (2,1) não formam cadeias problemáticas."
  },
  // Easy 24
  {
	"dificuldade": "Easy",
	"pares": [[1,2]],
	"pergunta": "A relação é reflexiva?",
	"resposta": false,
	"explicacao": "Para ser reflexiva, a relação deve conter (1,1) e (2,2). Como esses pares não estão presentes, a relação não é reflexiva."
  },
  // Easy 25
  {
	"dificuldade": "Easy",
	"pares": [[1,1], [2,2], [3,3]],
	"pergunta": "A relação é de equivalência?",
	"resposta": true,
	"explicacao": "A relação é reflexiva (contém (1,1), (2,2), (3,3)), simétrica (os pares (a,a) são simétricos) e transitiva (não há pares que violem a transitividade). Portanto, é de equivalência."
  },
  // Basic 1
  {
	"dificuldade": "Basic",
	"pares": [[1,1], [2,2], [3,3], [1,2]],
	"pergunta": "A relação é reflexiva?",
	"resposta": true,
	"explicacao": "Uma relação é reflexiva se todo elemento a ∈ A tem (a,a) ∈ R. Aqui, temos (1,1), (2,2) e (3,3) para todos os elementos de A = {1, 2, 3}, então a relação é reflexiva."
  },
  // Basic 2
  {
	"dificuldade": "Basic",
	"pares": [[1,2], [2,1], [2,3], [3,2]],
	"pergunta": "A relação é simétrica?",
	"resposta": true,
	"explicacao": "Uma relação é simétrica se, para todo (a,b) ∈ R, também (b,a) ∈ R. Aqui, temos (1,2) e (2,1), e (2,3) e (3,2), satisfazendo a simetria."
  },
  // Basic 3
  {
	"dificuldade": "Basic",
	"pares": [[1,1], [1,2], [2,3], [1,3]],
	"pergunta": "A relação é transitiva?",
	"resposta": true,
	"explicacao": "Uma relação é transitiva se, para (a,b) ∈ R e (b,c) ∈ R, então (a,c) ∈ R. Aqui, temos (1,2) e (2,3), e (1,3) está presente, satisfazendo a transitividade."
  },
  // Basic 4
  {
	"dificuldade": "Basic",
	"pares": [[1,1], [2,2], [3,3], [1,2], [2,1], [2,3], [3,2]],
	"pergunta": "A relação é de equivalência?",
	"resposta": false,
	"explicacao": "Uma relação de equivalência deve ser reflexiva, simétrica e transitiva. A relação é reflexiva e simétrica, mas não é transitiva, pois (1,2) e (2,3) estão presentes, mas (1,3) não está."
  },
  // Basic 5
  {
	"dificuldade": "Basic",
	"pares": [[1,1], [2,2], [1,2]],
	"pergunta": "A relação é reflexiva?",
	"resposta": false,
	"explicacao": "Para ser reflexiva, a relação deve conter (a,a) para todo a ∈ A. Aqui, falta (3,3) para o elemento 3, então a relação não é reflexiva."
  },
  // Basic 6
  {
	"dificuldade": "Basic",
	"pares": [[1,2], [2,1], [1,1], [3,3]],
	"pergunta": "A relação é simétrica?",
	"resposta": true,
	"explicacao": "A relação é simétrica porque, para (1,2) ∈ R, temos (2,1) ∈ R, e (1,1) e (3,3) são simétricos consigo mesmos."
  },
  // Basic 7
  {
	"dificuldade": "Basic",
	"pares": [[1,1], [2,2], [3,3], [2,3]],
	"pergunta": "A relação é transitiva?",
	"resposta": true,
	"explicacao": "A relação é transitiva porque não há cadeias (a,b) e (b,c) com b ≠ c que violem a transitividade. O par (2,3) não forma uma cadeia problemática."
  },
  // Basic 8
  {
	"dificuldade": "Basic",
	"pares": [[1,1], [2,1], [2,2]],
	"pergunta": "A relação é reflexiva?",
	"resposta": false,
	"explicacao": "Para ser reflexiva, a relação deve incluir (3,3) para o elemento 3. Como (3,3) não está presente, a relação não é reflexiva."
  },
  // Basic 9
  {
	"dificuldade": "Basic",
	"pares": [[1,2], [2,1], [2,2], [3,3]],
	"pergunta": "A relação é simétrica?",
	"resposta": true,
	"explicacao": "Para cada par (a,b) ∈ R, o par (b,a) também está presente: (1,2) e (2,1), e (2,2) e (3,3) são simétricos consigo mesmos."
  },
  // Basic 10
  {
	"dificuldade": "Basic",
	"pares": [[1,1], [2,2], [3,3], [1,2], [2,3]],
	"pergunta": "A relação é transitiva?",
	"resposta": false,
	"explicacao": "Para ser transitiva, se (1,2) ∈ R e (2,3) ∈ R, então (1,3) deve estar em R. Como (1,3) não está presente, a relação não é transitiva."
  },
  // Basic 11
  {
	"dificuldade": "Basic",
	"pares": [[1,1], [2,2], [3,3], [1,3], [3,1]],
	"pergunta": "A relação é simétrica?",
	"resposta": true,
	"explicacao": "A relação é simétrica porque, para (1,3) ∈ R, temos (3,1) ∈ R, e os pares (1,1), (2,2), (3,3) são simétricos consigo mesmos."
  },
  // Basic 12
  {
	"dificuldade": "Basic",
	"pares": [[1,1], [2,2], [1,2], [2,3], [1,3]],
	"pergunta": "A relação é transitiva?",
	"resposta": true,
	"explicacao": "A relação é transitiva porque, para (1,2) e (2,3), temos (1,3) ∈ R, satisfazendo a condição de transitividade."
  },
  // Basic 13
  {
	"dificuldade": "Basic",
	"pares": [[1,1], [2,2], [3,3], [1,2], [2,1], [2,3], [3,2]],
	"pergunta": "A relação é de equivalência?",
	"resposta": false,
	"explicacao": "A relação é reflexiva e simétrica, mas não é transitiva, pois (1,2) e (2,3) estão presentes, mas (1,3) não está."
  },
  // Basic 14
  {
	"dificuldade": "Basic",
	"pares": [[1,2], [2,3], [3,1]],
	"pergunta": "A relação é transitiva?",
	"resposta": true,
	"explicacao": "Para (1,2) e (2,3), temos (1,3) ∈ R; para (2,3) e (3,1), temos (2,1) não presente, mas não há outras cadeias que violem a transitividade."
  },
  // Basic 15
  {
	"dificuldade": "Basic",
	"pares": [[1,1], [2,2], [1,2], [2,1]],
	"pergunta": "A relação é reflexiva?",
	"resposta": false,
	"explicacao": "Falta (3,3) para o elemento 3, então a relação não é reflexiva."
  },
  // Basic 16
  {
	"dificuldade": "Basic",
	"pares": [[1,1], [2,2], [3,3], [1,2], [2,1], [3,1], [1,3]],
	"pergunta": "A relação é simétrica?",
	"resposta": true,
	"explicacao": "Para (1,2) temos (2,1), para (3,1) temos (1,3), e os pares (a,a) são simétricos, então a relação é simétrica."
  },
  // Basic 17
  {
	"dificuldade": "Basic",
	"pares": [[1,1], [2,2], [3,3], [1,2], [2,3], [1,3]],
	"pergunta": "A relação é transitiva?",
	"resposta": true,
	"explicacao": "Para (1,2) e (2,3), temos (1,3) ∈ R, satisfazendo a transitividade."
  },
  // Basic 18
  {
	"dificuldade": "Basic",
	"pares": [[1,1], [2,2], [1,2]],
	"pergunta": "A relação é simétrica?",
	"resposta": false,
	"explicacao": "Para (1,2) ∈ R, (2,1) deve estar presente, mas não está, então a relação não é simétrica."
  },
  // Basic 19
  {
	"dificuldade": "Basic",
	"pares": [[1,1], [2,2], [3,3], [1,2], [2,1], [2,3], [3,2], [1,3], [3,1]],
	"pergunta": "A relação é de equivalência?",
	"resposta": true,
	"explicacao": "A relação é reflexiva (contém (1,1), (2,2), (3,3)), simétrica (todos os pares (a,b) têm (b,a)) e transitiva (ex.: (1,2) e (2,3) implicam (1,3))."
  },
  // Basic 20
  {
	"dificuldade": "Basic",
	"pares": [[1,1], [2,2], [1,2]],
	"pergunta": "A relação é simétrica?",
	"resposta": false,
	"explicacao": "Para (1,2) ∈ R, (2,1) deve estar presente, mas não está, então a relação não é simétrica."
  },
  // Basic 21
  {
	"dificuldade": "Basic",
	"pares": [[1,1], [2,2], [3,3], [1,3]],
	"pergunta": "A relação é simétrica?",
	"resposta": false,
	"explicacao": "Para (1,3) ∈ R, (3,1) deve estar presente, mas não está, então a relação não é simétrica."
  },
  // Basic 22
  {
	"dificuldade": "Basic",
	"pares": [[1,1], [2,2], [3,3], [2,3], [3,2], [1,2], [2,1]],
	"pergunta": "A relação é transitiva?",
	"resposta": false,
	"explicacao": "Para (1,2) e (2,3), (1,3) deve estar em R, mas não está, então a relação não é transitiva."
  },
  // Basic 23
  {
	"dificuldade": "Basic",
	"pares": [[1,1], [2,2], [3,3]],
	"pergunta": "A relação é de equivalência?",
	"resposta": true,
	"explicacao": "A relação é reflexiva, simétrica e transitiva (os pares (a,a) satisfazem todas as condições trivialmente), então é de equivalência."
  },
  // Basic 24
  {
	"dificuldade": "Basic",
	"pares": [[1,2], [2,3], [3,1]],
	"pergunta": "A relação é simétrica?",
	"resposta": false,
	"explicacao": "Para (1,2) ∈ R, (2,1) deve estar presente, mas não está, então a relação não é simétrica."
  },
  // Basic 25
  {
	"dificuldade": "Basic",
	"pares": [[1,1], [2,2], [3,3], [1,2], [2,1], [1,3], [3,1], [2,3], [3,2]],
	"pergunta": "A relação é de equivalência?",
	"resposta": true,
	"explicacao": "A relação é reflexiva (contém (1,1), (2,2), (3,3)), simétrica (todos os pares (a,b) têm (b,a)) e transitiva (ex.: (1,2) e (2,3) implicam (1,3))."
  },
  // Medium 1
  {
	"dificuldade": "Medium",
	"pares": [[1,1], [2,2], [3,3], [4,4], [1,2], [2,1]],
	"pergunta": "A relação é reflexiva?",
	"resposta": true,
	"explicacao": "Uma relação é reflexiva se todo elemento a ∈ A tem (a,a) ∈ R. Aqui, temos (1,1), (2,2), (3,3) e (4,4) para todos os elementos de A = {1, 2, 3, 4}, então a relação é reflexiva."
  },
  // Medium 2
  {
	"dificuldade": "Medium",
	"pares": [[1,2], [2,1], [2,3], [3,2], [3,1]],
	"pergunta": "A relação é simétrica?",
	"resposta": false,
	"explicacao": "Uma relação é simétrica se, para todo (a,b) ∈ R, também (b,a) ∈ R. Aqui, temos (3,1), mas (1,3) não está presente, então a relação não é simétrica."
  },
  // Medium 3
  {
	"dificuldade": "Medium",
	"pares": [[1,1], [2,2], [3,3], [1,2], [2,3], [1,3]],
	"pergunta": "A relação é transitiva?",
	"resposta": true,
	"explicacao": "Uma relação é transitiva se, para (a,b) ∈ R e (b,c) ∈ R, então (a,c) ∈ R. Aqui, para (1,2) e (2,3), temos (1,3), satisfazendo a transitividade."
  },
  // Medium 4
  {
	"dificuldade": "Medium",
	"pares": [[1,1], [2,2], [3,3], [4,4], [1,2], [2,1], [3,4], [4,3]],
	"pergunta": "A relação é de equivalência?",
	"resposta": false,
	"explicacao": "A relação é reflexiva e simétrica, mas não é transitiva, pois (1,2) e (2,3) não implicam (1,3) ∈ R, nem (3,4) e (4,1) implicam (3,1) ∈ R."
  },
  // Medium 5
  {
	"dificuldade": "Medium",
	"pares": [[1,1], [2,2], [3,3], [1,2]],
	"pergunta": "A relação é reflexiva?",
	"resposta": false,
	"explicacao": "Para ser reflexiva, a relação deve conter (a,a) para todo a ∈ A. Aqui, falta (4,4), então a relação não é reflexiva."
  },
  // Medium 6
  {
	"dificuldade": "Medium",
	"pares": [[1,2], [2,1], [2,3], [3,2], [1,1], [3,3]],
	"pergunta": "A relação é simétrica?",
	"resposta": true,
	"explicacao": "Para cada par (a,b) ∈ R, o par (b,a) está presente: (1,2) e (2,1), (2,3) e (3,2), e (1,1), (3,3) são simétricos consigo mesmos."
  },
  // Medium 7
  {
	"dificuldade": "Medium",
	"pares": [[1,1], [2,2], [3,3], [1,2], [2,3]],
	"pergunta": "A relação é transitiva?",
	"resposta": false,
	"explicacao": "Para (1,2) e (2,3), (1,3) deve estar em R para a relação ser transitiva. Como (1,3) não está presente, a relação não é transitiva."
  },
  // Medium 8
  {
	"dificuldade": "Medium",
	"pares": [[1,1], [2,2], [3,3], [4,4], [1,3], [3,1]],
	"pergunta": "A relação é simétrica?",
	"resposta": true,
	"explicacao": "Para (1,3) ∈ R, temos (3,1) ∈ R, e os pares (1,1), (2,2), (3,3), (4,4) são simétricos consigo mesmos, então a relação é simétrica."
  },
  // Medium 9
  {
	"dificuldade": "Medium",
	"pares": [[1,1], [2,2], [3,3], [1,2], [2,1], [2,3], [3,2], [1,3], [3,1]],
	"pergunta": "A relação é de equivalência?",
	"resposta": true,
	"explicacao": "A relação é reflexiva (contém (1,1), (2,2), (3,3)), simétrica (todos os pares (a,b) têm (b,a)) e transitiva (ex.: (1,2) e (2,3) implicam (1,3))."
  },
  // Medium 10
  {
	"dificuldade": "Medium",
	"pares": [[1,2], [2,3], [3,1], [1,1]],
	"pergunta": "A relação é transitiva?",
	"resposta": true,
	"explicacao": "Para (1,2) e (2,3), temos (1,3); para (2,3) e (3,1), temos (2,1) não presente, mas não há outras cadeias que violem a transitividade."
  },
  // Medium 11
  {
	"dificuldade": "Medium",
	"pares": [[1,1], [2,2], [3,3], [4,4], [1,2], [2,3], [3,4]],
	"pergunta": "A relação é transitiva?",
	"resposta": false,
	"explicacao": "Para (1,2) e (2,3), (1,3) deve estar em R; para (2,3) e (3,4), (2,4) deve estar em R. Como (1,3) e (2,4) não estão presentes, a relação não é transitiva."
  },
  // Medium 12
  {
	"dificuldade": "Medium",
	"pares": [[1,1], [2,2], [3,3], [1,2], [2,1]],
	"pergunta": "A relação é reflexiva?",
	"resposta": false,
	"explicacao": "Falta (4,4) para o elemento 4, então a relação não é reflexiva."
  },
  // Medium 13
  {
	"dificuldade": "Medium",
	"pares": [[1,2], [2,1], [2,3], [3,2], [3,1], [1,3]],
	"pergunta": "A relação é simétrica?",
	"resposta": true,
	"explicacao": "Para cada par (a,b) ∈ R, o par (b,a) está presente: (1,2) e (2,1), (2,3) e (3,2), (3,1) e (1,3)."
  },
  // Medium 14
  {
	"dificuldade": "Medium",
	"pares": [[1,1], [2,2], [3,3], [4,4], [1,2], [2,3], [3,4], [1,4]],
	"pergunta": "A relação é transitiva?",
	"resposta": true,
	"explicacao": "Para (1,2) e (2,3), temos (1,3) não presente, mas (1,4) cobre a cadeia com (3,4). Todas as cadeias possíveis satisfazem a transitividade."
  },
  // Medium 15
  {
	"dificuldade": "Medium",
	"pares": [[1,1], [2,2], [3,3], [1,2], [2,3]],
	"pergunta": "A relação é de equivalência?",
	"resposta": false,
	"explicacao": "A relação é reflexiva, mas não é simétrica ((1,2) está presente, mas (2,1) não está) nem transitiva ((1,2) e (2,3) não implicam (1,3))."
  },
  // Medium 16
  {
	"dificuldade": "Medium",
	"pares": [[1,1], [2,2], [3,3], [4,4], [1,3], [3,1], [2,4], [4,2]],
	"pergunta": "A relação é simétrica?",
	"resposta": true,
	"explicacao": "Para (1,3) temos (3,1), para (2,4) temos (4,2), e os pares (a,a) são simétricos, então a relação é simétrica."
  },
  // Medium 17
  {
	"dificuldade": "Medium",
	"pares": [[1,1], [2,2], [3,3], [1,2], [2,3], [1,3]],
	"pergunta": "A relação é de equivalência?",
	"resposta": false,
	"explicacao": "A relação é reflexiva e transitiva, mas não é simétrica, pois (1,2) está presente, mas (2,1) não está."
  },
  // Medium 18
  {
	"dificuldade": "Medium",
	"pares": [[1,2], [2,3], [3,1], [2,2]],
	"pergunta": "A relação é transitiva?",
	"resposta": true,
	"explicacao": "Para (1,2) e (2,3), temos (1,3); para (2,3) e (3,1), temos (2,1) não presente, mas não há outras cadeias que violem a transitividade."
  },
  // Medium 19
  {
	"dificuldade": "Medium",
	"pares": [[1,1], [2,2], [3,3], [4,4], [1,2], [2,1], [3,4], [4,3]],
	"pergunta": "A relação é transitiva?",
	"resposta": false,
	"explicacao": "Para (1,2) e (2,3), (1,3) deve estar em R, mas não está. Portanto, a relação não é transitiva."
  },
  // Medium 20
  {
	"dificuldade": "Medium",
	"pares": [[1,1], [2,2], [3,3], [1,2], [2,1], [2,3], [3,2]],
	"pergunta": "A relação é de equivalência?",
	"resposta": false,
	"explicacao": "A relação é reflexiva e simétrica, but não é transitiva, pois (1,2) e (2,3) não implicam (1,3) ∈ R."
  },
  // Medium 21
  {
	"dificuldade": "Medium",
	"pares": [[1,1], [2,2], [3,3], [4,4], [1,3], [3,4]],
	"pergunta": "A relação é simétrica?",
	"resposta": false,
	"explicacao": "Para (1,3) ∈ R, (3,1) deve estar presente, e para (3,4), (4,3) deve estar presente. Como esses pares não estão, a relação não é simétrica."
  },
  // Medium 22
  {
	"dificuldade": "Medium",
	"pares": [[1,1], [2,2], [3,3], [4,4], [1,2], [2,3], [3,4], [1,4], [2,4]],
	"pergunta": "A relação é transitiva?",
	"resposta": true,
	"explicacao": "Para (1,2) e (2,3), temos (1,3) não presente, mas (1,4) cobre com (3,4). Para (2,3) e (3,4), temos (2,4). Todas as cadeias satisfazem a transitividade."
  },
  // Medium 23
  {
	"dificuldade": "Medium",
	"pares": [[1,1], [2,2], [3,3], [4,4], [1,2], [2,1], [3,4], [4,3], [1,3], [3,1]],
	"pergunta": "A relação é de equivalência?",
	"resposta": false,
	"explicacao": "A relação é reflexiva e simétrica, mas não é transitiva, pois (1,2) e (2,3) não implicam (1,3), embora (1,3) esteja presente, outras cadeias como (3,4) e (4,1) não implicam (3,1)."
  },
  // Medium 24
  {
	"dificuldade": "Medium",
	"pares": [[1,2], [2,3], [3,1], [1,1], [2,2]],
	"pergunta": "A relação é reflexiva?",
	"resposta": false,
	"explicacao": "Falta (3,3) para o elemento 3, então a relação não é reflexiva."
  },
  // Medium 25
  {
	"dificuldade": "Medium",
	"pares": [[1,1], [2,2], [3,3], [4,4], [1,2], [2,1], [2,3], [3,2], [3,4], [4,3], [1,4], [4,1]],
	"pergunta": "A relação é de equivalência?",
	"resposta": false,
	"explicacao": "A relação é reflexiva e simétrica, mas não é transitiva, pois (1,2) e (2,3) não implicam (1,3) ∈ R."
  },
  // Hard 1
  {
	"dificuldade": "Hard",
	"pares": [[1,1], [2,2], [3,3], [4,4], [5,5], [1,2], [2,3], [3,4], [4,5]],
	"pergunta": "A relação é transitiva?",
	"resposta": false,
	"explicacao": "Para ser transitiva, se (a,b) ∈ R e (b,c) ∈ R, então (a,c) ∈ R. Aqui, temos (1,2) e (2,3), mas (1,3) não está em R; também, (2,3) e (3,4) implicam que (2,4) deveria estar, mas não está. Portanto, a relação não é transitiva."
  },
  // Hard 2
  {
	"dificuldade": "Hard",
	"pares": [[1,1], [2,2], [3,3], [4,4], [1,2], [2,1], [2,3], [3,2], [3,4], [4,3]],
	"pergunta": "A relação é de equivalência?",
	"resposta": false,
	"explicacao": "A relação é reflexiva (contém (a,a) para todo a ∈ A) e simétrica (para cada (a,b), (b,a) está presente). No entanto, não é transitiva, pois (1,2) e (2,3) não implicam (1,3) ∈ R. Assim, não é de equivalência."
  },
  // Hard 3
  {
	"dificuldade": "Hard",
	"pares": [[1,2], [2,3], [3,1], [2,2], [3,3], [4,4]],
	"pergunta": "A relação é reflexiva?",
	"resposta": false,
	"explicacao": "Para ser reflexiva, a relação deve conter (a,a) para todo a ∈ A. Aqui, falta (1,1), então a relação não é reflexiva."
  },
  // Hard 4
  {
	"dificuldade": "Hard",
	"pares": [[1,1], [2,2], [3,3], [4,4], [5,5], [1,3], [3,1], [2,4], [4,2], [3,5], [5,3]],
	"pergunta": "A relação é simétrica?",
	"resposta": true,
	"explicacao": "Para cada par (a,b) ∈ R, o par (b,a) está presente: (1,3) e (3,1), (2,4) e (4,2), (3,5) e (5,3), e os pares (a,a) são simétricos. Portanto, a relação é simétrica."
  },
  // Hard 5
  {
  "dificuldade": "Hard",
  "pares": [[1,1], [2,2], [3,3], [4,4], [1,2], [2,3], [3,4], [1,4]],
  "pergunta": "A relação é transitiva?",
  "resposta": false,
  "explicacao": "Para ser transitiva, se (a,b) ∈ R e (b,c) ∈ R, então (a,c) ∈ R. Aqui, temos (1,2) e (2,3), mas (1,3) não está em R; também, (2,3) e (3,4) implicam que (2,4) deveria estar, mas não está. Portanto, a relação não é transitiva."
},
  // Hard 6
  {
	"dificuldade": "Hard",
	"pares": [[1,1], [2,2], [3,3], [4,4], [5,5], [1,2], [2,3], [3,1], [4,5]],
	"pergunta": "A relação é de equivalência?",
	"resposta": false,
	"explicacao": "A relação é reflexiva, mas não é simétrica ((1,2) está presente, mas (2,1) não está) nem transitiva ((1,2) e (2,3) não implicam (1,3), embora (3,1) esteja presente, outras cadeias falham). Portanto, não é de equivalência."
  },
  // Hard 7
  {
  "dificuldade": "Hard",
  "pares": [[1,2], [2,3], [3,4], [4,1], [1,1], [2,2], [3,3]],
  "pergunta": "A relação é transitiva?",
  "resposta": false,
  "explicacao": "Para ser transitiva, se (a,b) ∈ R e (b,c) ∈ R, então (a,c) ∈ R. Aqui, temos (1,2) e (2,3), mas (1,3) não está em R; (2,3) e (3,4) implicam que (2,4) deveria estar, mas não está; (3,4) e (4,1) implicam que (3,1) deveria estar, mas não está. Portanto, a relação não é transitiva."
},
  // Hard 8
  {
  "dificuldade": "Hard",
  "pares": [[1,1], [2,2], [3,3], [4,4], [5,5], [1,3], [3,5], [5,1]],
  "pergunta": "A relação é simétrica?",
  "resposta": false,
  "explicacao": "Para ser simétrica, se (a,b) ∈ R, então (b,a) ∈ R. Aqui, temos (1,3), mas (3,1) não está em R; (3,5), mas (5,3) não está; (5,1), mas (1,5) não está. Portanto, a relação não é simétrica."
},
  // Hard 9
  {
	"dificuldade": "Hard",
	"pares": [[1,1], [2,2], [3,3], [4,4], [1,2], [2,3], [3,4], [4,1], [2,4], [4,2]],
	"pergunta": "A relação é de equivalência?",
	"resposta": true,
	"explicacao": "A relação é reflexiva (contém (a,a) para todo a ∈ A), simétrica ((1,2) e (2,1), (2,4) e (4,2), etc.) e transitiva (ex.: (1,2) e (2,3) implicam (1,3) não presente, mas (1,4) e (4,1) cobrem as cadeias). Portanto, é de equivalência."
  },
  // Hard 10
  {
  "dificuldade": "Hard",
  "pares": [[1,2], [2,3], [3,4], [4,5], [5,1]],
  "pergunta": "A relação é transitiva?",
  "resposta": false,
  "explicacao": "Para ser transitiva, se (a,b) ∈ R e (b,c) ∈ R, então (a,c) ∈ R. Aqui, temos (1,2) e (2,3), mas (1,3) não está em R; (2,3) e (3,4), mas (2,4) não está; (3,4) e (4,5), mas (3,5) não está; (4,5) e (5,1), mas (4,1) não está. Portanto, a relação não é transitiva."
},
  // Hard 11
  {
	"dificuldade": "Hard",
	"pares": [[1,1], [2,2], [3,3], [4,4], [5,5], [1,2], [2,3], [3,4], [4,5], [5,1]],
	"pergunta": "A relação é de equivalência?",
	"resposta": false,
	"explicacao": "A relação é reflexiva, mas não é simétrica ((1,2) está presente, mas (2,1) não está) nem transitiva ((1,2) e (2,3) não implicam (1,3)). Não é de equivalência."
  },
  // Hard 12
  {
	"dificuldade": "Hard",
	"pares": [[1,1], [2,2], [3,3], [4,4], [1,3], [3,1], [2,4], [4,2], [3,4]],
	"pergunta": "A relação é simétrica?",
	"resposta": false,
	"explicacao": "Para (3,4) ∈ R, (4,3) deve estar presente, mas não está. Portanto, a relação não é simétrica."
  },
  // Hard 13
  {
	"dificuldade": "Hard",
	"pares": [[1,1], [2,2], [3,3], [4,4], [5,5], [1,2], [2,3], [3,4], [4,5], [1,5]],
	"pergunta": "A relação é transitiva?",
	"resposta": true,
	"explicacao": "Para (1,2) e (2,3), temos (1,3) não presente, mas (1,5) cobre com (4,5); para (2,3) e (3,4), temos (2,4) não presente, mas (2,5) não é necessário. A relação é transitiva."
  },
  // Hard 14
  {
	"dificuldade": "Hard",
	"pares": [[1,1], [2,2], [3,3], [4,4], [1,2], [2,3], [3,1], [2,4], [4,2]],
	"pergunta": "A relação é de equivalência?",
	"resposta": false,
	"explicacao": "A relação é reflexiva, mas não é simétrica ((1,2) está presente, mas (2,1) não está) nem transitiva ((1,2) e (2,3) não implicam (1,3)). Não é de equivalência."
  },
  // Hard 15
  {
	"dificuldade": "Hard",
	"pares": [[1,2], [2,3], [3,4], [4,1], [2,2], [3,3], [4,4]],
	"pergunta": "A relação é reflexiva?",
	"resposta": false,
	"explicacao": "Falta (1,1) para o elemento 1, então a relação não é reflexiva."
  },
  // Hard 16
  {
	"dificuldade": "Hard",
	"pares": [[1,1], [2,2], [3,3], [4,4], [5,5], [1,3], [3,1], [2,4], [4,2], [3,5], [5,3], [1,5], [5,1]],
	"pergunta": "A relação é simétrica?",
	"resposta": true,
	"explicacao": "Para cada par (a,b) ∈ R, o par (b,a) está presente: (1,3) e (3,1), (2,4) e (4,2), (3,5) e (5,3), (1,5) e (5,1). A relação é simétrica."
  },
  // Hard 17
  {
	"dificuldade": "Hard",
	"pares": [[1,1], [2,2], [3,3], [4,4], [1,2], [2,3], [3,4], [4,1], [2,4]],
	"pergunta": "A relação é transitiva?",
	"resposta": true,
	"explicacao": "Para (1,2) e (2,3), temos (1,3) não presente, mas (1,4) cobre; para (2,3) e (3,4), temos (2,4); para (3,4) e (4,1), temos (3,1) não presente, mas (4,1) cobre. A relação é transitiva."
  },
  // Hard 18
  {
	"dificuldade": "Hard",
	"pares": [[1,1], [2,2], [3,3], [4,4], [5,5], [1,2], [2,1], [2,3], [3,2], [3,4], [4,5]],
	"pergunta": "A relação é de equivalência?",
	"resposta": false,
	"explicacao": "A relação é reflexiva e parcialmente simétrica, mas não é simétrica ((3,4) está presente, mas (4,3) não está) nem transitiva ((2,3) e (3,4) não implicam (2,4)). Não é de equivalência."
  },
  // Hard 19
  {
	"dificuldade": "Hard",
	"pares": [[1,2], [2,3], [3,4], [4,5], [5,1], [1,1], [2,2]],
	"pergunta": "A relação é reflexiva?",
	"resposta": false,
	"explicacao": "Faltam (3,3), (4,4) e (5,5) para os elementos 3, 4 e 5, então a relação não é reflexiva."
  },
  // Hard 20
  {
	"dificuldade": "Hard",
	"pares": [[1,1], [2,2], [3,3], [4,4], [5,5], [1,3], [3,5], [5,1], [2,4], [4,2]],
	"pergunta": "A relação é transitiva?",
	"resposta": true,
	"explicacao": "Para (1,3) e (3,5), temos (1,5); para (3,5) e (5,1), temos (3,1) não presente, mas (1,3) cobre; para (2,4) e (4,2), (2,2) está presente. A relação é transitiva."
  },
  // Hard 21
  {
	"dificuldade": "Hard",
	"pares": [[1,1], [2,2], [3,3], [4,4], [1,2], [2,3], [3,1], [2,4], [4,3]],
	"pergunta": "A relação é simétrica?",
	"resposta": false,
	"explicacao": "Para (1,2) ∈ R, (2,1) não está presente; para (2,4), (4,2) não está presente. A relação não é simétrica."
  },
  // Hard 22
  {
	"dificuldade": "Hard",
	"pares": [[1,1], [2,2], [3,3], [4,4], [5,5], [1,2], [2,3], [3,4], [4,5], [5,1], [1,3], [3,5]],
	"pergunta": "A relação é transitiva?",
	"resposta": true,
	"explicacao": "Para (1,2) e (2,3), temos (1,3); para (2,3) e (3,4), temos (2,4) não presente, mas (3,5) e (5,1) cobrem outras cadeias. Todas as cadeias possíveis satisfazem a transitividade."
  },
  // Hard 23
  {
	"dificuldade": "Hard",
	"pares": [[1,1], [2,2], [3,3], [4,4], [1,2], [2,1], [2,3], [3,2], [3,4], [4,3], [1,4], [4,1]],
	"pergunta": "A relação é de equivalência?",
	"resposta": true,
	"explicacao": "A relação é reflexiva, simétrica (todos os pares (a,b) têm (b,a)) e transitiva (ex.: (1,2) e (2,3) implicam (1,3) não presente, mas (1,4) e (4,1) cobrem). É de equivalência."
  },
  // Hard 24
  {
	"dificuldade": "Hard",
	"pares": [[1,2], [2,3], [3,4], [4,1], [1,1], [2,2], [3,3], [4,4], [2,4]],
	"pergunta": "A relação é simétrica?",
	"resposta": false,
	"explicacao": "Para (1,2) ∈ R, (2,1) não está presente; para (2,4), (4,2) não está presente. A relação não é simétrica."
  },
  // Hard 25
  {
	"dificuldade": "Hard",
	"pares": [[1,1], [2,2], [3,3], [4,4], [5,5], [1,2], [2,1], [2,3], [3,2], [3,4], [4,3], [4,5], [5,4], [1,5], [5,1]],
	"pergunta": "A relação é de equivalência?",
	"resposta": true,
	"explicacao": "A relação é reflexiva (contém (a,a) para todo a ∈ A), simétrica (todos os pares (a,b) têm (b,a)) e transitiva (ex.: (1,2) e (2,3) implicam (1,3) não presente, mas (1,5) e (5,4) cobrem as cadeias). É de equivalência."
  }
]