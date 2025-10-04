import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = 'light' | 'dark';

const ThemeCtx = createContext<{theme:Theme; toggle:()=>void}>({theme:'light', toggle:()=>{}})
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

export function useTheme(){ return useContext(ThemeCtx) }