# Projeto Quiz V3 (TypeScript + Vite + React)

Aplicação de quiz interativo com foco em conteúdos de Lógica, Relações e Conjuntos. O usuário escolhe dificuldade, responde dentro de um tempo limite e ganha bônus por rapidez. Ranking local é mantido via `localStorage`.

## Tecnologias
- React 18 + TypeScript
- Vite 5 (desenvolvimento e build)
- React Router v6 (navegação SPA)
- Context API (estado global de tema e quiz)
- Chart.js + react-chartjs-2 (visualização de resultados)
- Framer Motion (animações de transição e feedback)
- Vitest + jsdom (testes unitários)

## Estrutura de Pastas (src)
```
components/    => UI reutilizável (ex: AppHeader)
data/          => Banco de perguntas (relacao, logica, conjuntos)
pages/         => Páginas principais (Home, Quiz, Resultado, Ranking, Config)
state/         => Providers (quiz.tsx, theme.tsx) + testes
utils/         => Tipos e helpers de quiz (cálculo de bônus, embaralhar, etc.)
styles/        => CSS de tema (light/dark via data-theme)
```

## Fluxo do Jogo
1. Home: jogador define nome, modo (conteúdo) e dificuldade.
2. Quiz: perguntas são selecionadas e embaralhadas. Tempo regressivo por pergunta.
3. Cada acerto: +100 pts + bônus = (tempoRestante * 5) arredondado.
4. Ao finalizar: estatísticas salvas (pontuação, tempos) e ranking atualizado.
5. Resultado: gráficos (barras e pizza) + revisão de perguntas.
6. Ranking: lista top pontuações por modo+dificuldade (persistido localmente).

## Estado Global (Context)
`QuizProvider` mantém:
- nome, modo, dificuldade
- tempoPergunta (derivado da dificuldade)
- pontuacao + bonusTotal
- stats detalhados (por pergunta)
- restantes / total e flag concluido

`ThemeProvider` alterna entre temas `light` e `dark` e persiste preferência.

## Scripts
```
npm install        # instala dependências
npm run dev        # inicia servidor Vite
npm run build      # build de produção (tsc + vite build)
npm run preview    # serve build em modo preview
npm test           # executa testes (vitest)
```

## Testes
Testes em `src/state/*.test.ts` cobrem:
- Lógica do reducer (pontuação, registro, timeout)
- Persistência no ranking após finalizar

## Acessibilidade (a11y)
- Uso de `aria-live` para feedback de tempo esgotado / acerto / erro.
- Botões com `aria-pressed` para estado de seleção.
- Foco forçado no enunciado em mudança de pergunta para navegação assistiva.

## Melhorias Futuras
- Internacionalização (pt/eng)
- Paginação ou modulação de grande volume de perguntas
- Modo multiplayer / compartilhamento de ranking remoto
- Exportação de resultados (CSV / JSON)

## Licença
Livre para uso educacional/demonstração. Ajuste conforme necessidade.

