/**
 * Componente raiz da aplicação.
 * Responsável por:
 * - Prover contextos globais de Tema e Quiz
 * - Declarar as rotas principais da SPA (Home, Quiz, Resultado, Ranking, Config)
 * - Renderizar o cabeçalho fixo (AppHeader)
 */
import { Route, Routes, Navigate } from 'react-router-dom';
import { AppHeader } from '@/components/AppHeader'
import { Home } from '@/pages/Home'
import { Quiz } from '@/pages/Quiz'
import { Resultado } from '@/pages/Resultado'
import { Ranking } from '@/pages/Ranking'
import { Config} from '@/pages/Config'
import { ThemeProvider } from '@/state/theme'
import { QuizProvider } from '@/state/quiz'

export default function App() {
  return (
    <ThemeProvider>
      <QuizProvider>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/resultado" element={<Resultado />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/config" element={<Config />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </QuizProvider>
    </ThemeProvider>
  )
}