import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Avatar from './perfil/Avatar.tsx'
import About from './Bio/About.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Avatar />
    <About/>
  </React.StrictMode>,
)
