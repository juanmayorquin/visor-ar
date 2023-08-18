import { ColorBar } from "../components/ColorBar";
import { Footer } from "../components/Footer";
import { Banner } from "../components/Banner";
import { Section } from "../components/Section";
import { Instrumento } from "../components/Instrumento";
import { instrumentosData } from "../data/instrumentosData";
import {motion} from "framer-motion"

export default function Instrumentos() {
  return (
    <motion.main initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.7}}>
      <Banner titulo={"Instrumentos Biomédicos"} tipo={1} />
      <Section
        texto={
          "¡Comencemos este emocionante viaje explorando de cerca dos instrumentos biomédicos que están cambiando el juego en la medicina moderna!"
        }
        isBold
      />
      {instrumentosData.map((instrumento, index) => (
        <>
          <Instrumento instrumentoData={instrumento} key={index} />
          <Section texto={instrumento.section} backgroundColor={"#F4F4F4"} />
          {index != 0 ? "" : <ColorBar />}
        </>
      ))}

      <Footer />
    </motion.main>
  );
}
