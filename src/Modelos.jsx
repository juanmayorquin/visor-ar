import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ColorBar } from "./components/ColorBar";
import { Banner } from "./components/Banner";
import { Section } from "./components/Section";

export function Modelos() {
    return (
        <>
            <ColorBar />
            <Header />
            <Banner 
                titulo={"Modelos 3D"}
            />
            <Section
                texto={"¡Disfruta de esta emocionante aventura en el mundo de los modelos 3D de instrumentos biomédicos!"}
                isBold
            />
            <Footer/>
        </>
    );
}