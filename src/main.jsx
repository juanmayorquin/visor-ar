import React from 'react'
import ReactDOM from 'react-dom/client'
import { ColorBar } from './ColorBar.jsx'
import { Header } from './Header.jsx'
import { Hero } from './Hero.jsx'
import { Section1 } from './Section1.jsx'
import './main.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
        <ColorBar />
        <Header />
        <Hero />
        <Section1 />
    </>
)
