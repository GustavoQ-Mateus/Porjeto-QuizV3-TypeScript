import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = 'light' | 'dark';

const ThemeCtx = createContext<{theme:Theme; toggle:()=>void}>({theme:'light', toggle:()=>{}})
/**
 * Provider de tema claro/escuro.
 * Armazena a seleção do usuário em `localStorage` sob a chave `quizTheme`
 * e aplica atributo `data-theme` na raiz do documento para facilitar o theming via CSS.
 */
export function ThemeProvider({children}: {children: React.ReactNode}){
    const [theme, setTheme] = useState<Theme>(()=>{
        const t = localStorage.getItem('quizTheme')
        return (t === 'dark' || t === 'light') ? t : 'light'
    })
    useEffect(()=>{
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('quizTheme', theme)
    }, [theme])
    const value = useMemo(()=>({
        theme,
        toggle: () => setTheme(t => t === 'dark' ? 'light' : 'dark')
    }), [theme])
    return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>
}

/** Hook para consumir tema atual e função de toggle */
export function useTheme(){ return useContext(ThemeCtx) }