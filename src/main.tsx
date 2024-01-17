import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Avatar from './Perfil/index.tsx'
import About from './Bio/index.tsx'
import Experience from './Experience/index.tsx'
import Footer from './Footer/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Avatar />
    <About/>
    <Experience/>
    <Footer/>
  </React.StrictMode>,
)
