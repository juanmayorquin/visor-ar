import { Routes, Route } from "react-router-dom";
import { Inicio } from "./Inicio";
import { Instrumentos } from "./Instrumentos";
import { Modelos } from "./Modelos";

export function App(){
    return(
        <div className="App">
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/instrumentos" element={<Instrumentos/>} />
                <Route path="/modelos" element={<Modelos/>} />
            </Routes>
        </div>
    );
}