import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './Header.jsx'
import { Hero } from './Hero.jsx'
import './main.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
        <Header />
        <Hero />
    </>
)
