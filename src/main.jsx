import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import {createHashRouter, RouterProvider} from "react-router-dom"
import Inicio from "./routes/Inicio"
import Instrumentos from "./routes/Instrumentos"
import Modelos from "./routes/Modelos"


const route = createHashRouter([
    {
        path: '/',
        element: <Inicio/>
    },
    {
        path: '/instrumentos',
        element: <Instrumentos/>
    },
    {
        path: '/modelos',
        element: <Modelos/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <RouterProvider router={route}/>
    </React.StrictMode>
)

