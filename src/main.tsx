import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/theme.css'
/**
 * Ponto de entrada da aplicação.
 * - Monta React StrictMode
 * - Envolve a aplicação em BrowserRouter
 * - Registra Service Worker (quando suportado) para PWA / offline básico
 */

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

if('serviceWorker' in navigator){
  window.addEventListener('load', ()=>{
    navigator.serviceWorker.register('/sw.js').catch(()=>{/* ignore */})
  })
}
