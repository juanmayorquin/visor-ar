import { Footer } from "../components/Footer";
import { ColorBar } from "../components/ColorBar";
import { Banner } from "../components/Banner";
import { Section } from "../components/Section";
import { ModelSection } from "../components/ModelSection";
import {motion} from "framer-motion"

export default function Modelos() {
    return (
        <motion.main initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.7}}>
            <Banner 
                titulo={"Modelos 3D"}
            />
            <Section
                texto={"¡Disfruta de esta emocionante aventura en el mundo de los modelos 3D de instrumentos biomédicos!"}
                backgroundColor={"#F2F2F2"}
                isBold
            />
            <ModelSection
                nombre={"Osciloscopio"}
                src={"./models/osciloscopio.glb"}
                img={"./assets/osciloscopio.png"}
                alt={"Osciloscopio"}
            />
            <ColorBar />
            <ModelSection
                nombre={"Fuente de Voltaje"}
                src={"./models/fuente_de_voltaje.glb"}
                img={"./assets/fuente_de_voltaje.png"}
                alt={"Fuente de voltaje"}
            />
            <Footer/>
        </motion.main>
    );
}