import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../state/theme'

export function AppHeader(){
  const { theme, toggle } = useTheme()
  const loc = useLocation()
  return (
    <header className="card" style={{position:'sticky',top:0,zIndex:10,margin:8,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <Link to="/" style={{display:'flex',gap:8,alignItems:'center',fontWeight:800,color:'var(--color-primary)',textDecoration:'none'}}>
        <span aria-label="Cérebro" role="img">🧠</span>
        <span>Quiz Lógico</span>
      </Link>
      <nav style={{display:'flex',gap:12,alignItems:'center'}}>
        <Link to="/ranking" className="btn">Ranking</Link>
        <Link to="/config" className="btn">Config</Link>
        <button className="btn" aria-label="Alternar tema" onClick={toggle}>
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </nav>
    </header>
  )
}