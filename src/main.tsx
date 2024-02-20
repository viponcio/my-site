import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Avatar from './Perfil/index.tsx'
import About from './Bio/index.tsx'
import Experience from './Experience/index.tsx'
import Footer from './Footer/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="flex flex-col min-h-screen py-10 px-3 sm:px-5">
      <Avatar />
      <About/>
      <Experience/>
      <Footer/>
    </div>
  </React.StrictMode>,
)
