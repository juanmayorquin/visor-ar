import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Banner } from "./components/Banner";
import { Section } from "./components/Section";

export function Instrumentos() {
    return (
        <>
            <Header />
            <Banner />
            <Section 
                texto={"¡Comencemos este emocionante viaje explorando de cerca dos instrumentos biomédicos que están cambiando el juego en la medicina moderna!"}
                isBold
            />
            <Footer />
        </>
    );
}

