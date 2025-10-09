import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'

createRoot(document.getElementById('root')!).render(  //busca root y monta toda la app de React en el <div> de index.html
  <StrictMode>
    <App /> 
  </StrictMode>,
)

// ! en TS es la forma de decirle a TS que algo no va a ser null para que no de error