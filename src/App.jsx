import { Routes, Route } from "react-router-dom";
import { Inicio } from "./Inicio";
import { Instrumentos } from "./Instrumentos";
import { Modelos } from "./Modelos";

export function App(){
    return(
        <div className="App">
            <Routes>
                <Route path="/visor-ar/" element={<Inicio/>} />
                <Route path="/visor-ar/instrumentos/" element={<Instrumentos/>} />
                <Route path="/visor-ar/modelos" element={<Modelos/>} />
            </Routes>
        </div>
    );
}