import Inicio from "./routes/Inicio";
import Instrumentos from "./routes/Instrumentos";
import About from "./routes/About";
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
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};
