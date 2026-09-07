import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import PainelCadastrarAutomovel from './pages/PainelCadastrarAutomovel'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'



function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App
