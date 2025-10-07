import { useTheme } from "@/state/theme";
/**
 * Página de Configurações simples (atualmente apenas troca de tema).
 * Pode ser expandida futuramente para volume de perguntas, sons, acessibilidade etc.
 */
export function Config(){
    const { theme, toggle } = useTheme()
    return (
        <main className="container">
      <section className="card">
        <h2 style={{color:'var(--color-primary)'}}>Configurações</h2>
        <div className="grid" style={{gridTemplateColumns:'1fr 1fr'}}>
          <div>
            <div className="label">Tema</div>
            <button className="btn" onClick={toggle}>{theme==='dark'?'Modo Claro':'Modo Escuro'}</button>
          </div>
        </div>
      </section>
    </main>
    )
}