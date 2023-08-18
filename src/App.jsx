import Inicio from "./routes/Inicio";
import Instrumentos from "./routes/Instrumentos";
import Modelos from "./routes/Modelos";
import { Header } from "./components/Header";
import { ColorBar } from "./components/ColorBar";
import { Route, Routes } from "react-router-dom";
export const App = () => {
  return (
    <>
      <ColorBar />
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/instrumentos" element={<Instrumentos />} />
        <Route path="/modelos" element={<Modelos />} />
      </Routes>
    </>
  );
};
