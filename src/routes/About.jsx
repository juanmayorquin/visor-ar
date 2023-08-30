import { Footer } from "../components/Footer";
import { ColorBar } from "../components/ColorBar";
import { Banner } from "../components/Banner";
import { Section } from "../components/Section";
import { Parrafo } from "../components/Parrafo";
import { SectionParrafoDoble } from "../components/SectionParrafoDoble";
import { ModelSection } from "../components/ModelSection";
import {motion} from "framer-motion"

export default function About() {
    return (
        <motion.main initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.7}}>
            <Banner 
                titulo={"Acerca de"}
            />
            <Section
                texto={"¡Descrube de que se trata nuestro proyecto y a las personas detrás de este!"}
                isBold
            />
            <ColorBar/>
            <Parrafo
                titulo={"Sobre nuestro proyecto"}
                texto={<p>Nos complace presentar un proyecto que fusiona la ingeniería biomédica con la vanguardia tecnológica: "Explorando el Futuro a través de la Tecnología Biomédica". En un desafiante plazo de 21 días, nuestro equipo multidisciplinario se ha propuesto una misión ambiciosa: desarrollar un modelo prototipo de sistema multimedia diseñado específicamente para estudiantes de ingeniería biomédica.</p>}
            />
            <Parrafo
                titulo={"Este proyecto abarca múltiples aspectos esenciales:"}
                backgroundColor={"#D60707"}
                textColor={"#FFFFFF"}
                texto={
                    <>
                        <SectionParrafoDoble
                            titulo1 = {"Modelo 3D y Realidad Aumentada"}
                            texto1={"En solo 21 días, llevaremos a la realidad virtual dos de los dispositivos más innovadores de nuestro laboratorio biomédico. Estos modelos 3D permitirán a los estudiantes explorar y entender los dispositivos en detalle, desde cualquier lugar y en cualquier momento. La realidad aumentada les brindará la experiencia de interactuar con los dispositivos como si estuvieran en el laboratorio."}
                            titulo2 = {"Página Web Interactiva"}
                            texto2 = {"Nuestra página web se convertirá en un recurso esencial para los estudiantes. Cada dispositivo tendrá su propia sección con información exhaustiva, detalles técnicos y guías de uso. Pero no nos detenemos ahí: la incorporación de videos con audio que ilustran el uso correcto y las características técnicas ampliará la comprensión y el aprendizaje."}
                        />
                    </>
                }
            />
            
            <Footer/>
        </motion.main>
    );
}