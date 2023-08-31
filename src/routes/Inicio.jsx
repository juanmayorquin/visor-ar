import { ColorBar } from "../components/ColorBar.jsx";
import { Hero } from "../components/Hero.jsx";
import { Section } from "../components/Section.jsx";
import { Article } from "../components/Article.jsx";
import { LargeArticle } from "../components/LargeArticle.jsx";
import { Footer } from "../components/Footer.jsx";
import {motion} from "framer-motion"
export default function Inicio() {
  return (
    <motion.main initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.7}}>
      <Hero />
      <Section
        texto={"¡Bienvenidos a nuestra plataforma dedicada a brindarte información detallada sobre dos instrumentos biomédicos líderes en la industria de la salud!"}
        isBold
      />
      <ColorBar/>
      <Section
        texto={"Nuestra misión es transformar la educación en ingeniería biomédica a través de la fusión de la tecnología, la experiencia multimedia y la innovación educativa. En un plazo de 21 días, nos embarcamos en una emocionante travesía para desarrollar un prototipo de sistema multimedia de vanguardia, diseñado específicamente para estudiantes de ingeniería biomédica."}
        video={"https://www.youtube.com/embed/8jPKgJAQlZA"}
        fontSize="2.8rem"
      />
      <ColorBar />
      <section className="container-home">
        <Article
          titulo={"Osciloscopio: Explorando las Ondas Electrónicas"}
          contenido={
            "Sumérgete en el mundo de las ondas electrónicas con los osciloscopios. Desde señales simples hasta complejas, estas herramientas te permiten visualizar y comprender el comportamiento de las corrientes eléctricas. Aprende a ajustar la escala y la frecuencia para analizar detenidamente las formas de onda. Descubre cómo un osciloscopio puede ser tu aliado para diagnosticar problemas y diseñar circuitos más eficientes."
          }
          src={"./assets/osciloscopio.png"}
          alt={"Fuente de voltaje"}
          side={"left"}
          isBold={true}
        />
        <Article
          titulo={"Fuente de Voltaje: Controla el Flujo de Energía"}
          contenido={
            "Adéntrate en el mundo de la regulación de energía con las fuentes de voltaje. Desde proyectos electrónicos simples hasta experimentos avanzados, estas fuentes te permiten ajustar y suministrar voltajes específicos. Aprende a establecer voltajes constantes o variables, y descubre cómo limitar corrientes para evitar daños. Con una fuente de voltaje a tu disposición, podrás alimentar tus circuitos y dispositivos con precisión y confiabilidad."
          }
          src={"./assets/fuente_de_voltaje.png"}
          alt={"Fuente de voltaje"}
          side={"right"}
        />
      </section>
      <section className="container-home">
        <LargeArticle
          titulo={"¡Descubre la Maravilla del Osciloscopio en 3D!"}
          contenido={
            "Sumérgete en una experiencia única mientras desvelamos el mundo del osciloscopio a través de un modelado en 3D sorprendentemente realista."
          }
          src={"./models/osciloscopio.glb"}
          img={"./assets/osciloscopio.png"}
          alt={"Osciloscopio"}
          side={"left"}
          bgColor={"#D20B0B"}
          textColor={"#FFFFFF"}
        />
        <LargeArticle
          titulo={"¡Descubre la Fuente de Voltaje en 3D!"}
          contenido={
            "Te damos la bienvenida a un viaje tridimensional hacia el mundo de la fuente de voltaje. En este fascinante recorrido, podrás explorar cada componente y rincón de esta herramienta que desempeña un papel fundamental en la alimentación y el funcionamiento de dispositivos electrónicos."
          }
          src={"./models/fuente_de_voltaje.glb"}
          img={"./assets/fuente_de_voltaje.png"}
          alt={"Fuente de voltaje"}
          side={"right"}
          bgColor={"#F4F4F4"}
          textColor={"#000000"}
        />
      </section>
      <Section
        texto={
          "Mantente actualizado con las últimas innovaciones y avances en la tecnología biomédica mientras continuamos compartiendo contenido relevante y apasionante."
        }
        backgroundColor={"#F4F4F4"}
      />
        
      <Footer />
    </motion.main>
  );
}
