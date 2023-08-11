import React from 'react'
import ReactDOM from 'react-dom/client'
import { ColorBar } from './ColorBar.jsx'
import { Header } from './Header.jsx'
import { Hero } from './Hero.jsx'
import { Section1 } from './Section1.jsx'
import { Article } from './Article.jsx'
import { LongArticle } from './LongArticle.jsx'
import './main.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
        <ColorBar />
        <Header />
        <Hero />
        <Section1 />
        <ColorBar />
        <section className="container">
            <Article titulo={"Osciloscopio: Explorando las Ondas Electrónicas"}
            contenido={"Sumérgete en el mundo de las ondas electrónicas con los osciloscopios. Desde señales simples hasta complejas, estas herramientas te permiten visualizar y comprender el comportamiento de las corrientes eléctricas. Aprende a ajustar la escala y la frecuencia para analizar detenidamente las formas de onda. Descubre cómo un osciloscopio puede ser tu aliado para diagnosticar problemas y diseñar circuitos más eficientes."}
            src={"../src/assets/fuente_de_voltaje.png"} 
            alt={"Fuente de voltaje"}
            side={"left"}
            />
            <Article titulo={"Fuente de Voltaje: Controla el Flujo de Energía"}
            contenido={"Adéntrate en el mundo de la regulación de energía con las fuentes de voltaje. Desde proyectos electrónicos simples hasta experimentos avanzados, estas fuentes te permiten ajustar y suministrar voltajes específicos. Aprende a establecer voltajes constantes o variables, y descubre cómo limitar corrientes para evitar daños. Con una fuente de voltaje a tu disposición, podrás alimentar tus circuitos y dispositivos con precisión y confiabilidad."}
            src={"../src/assets/fuente_de_voltaje.png"} 
            alt={"Fuente de voltaje"}
            side={"right"}
            />
        </section>
        <section className="container">
            <LongArticle titulo={"¡Descubre la Maravilla del Osciloscopio en 3D!"}
            contenido={"Sumérgete en una experiencia única mientras desvelamos el mundo del osciloscopio a través de un modelado en 3D sorprendentemente realista."}
            src={"../src/assets/fuente_de_voltaje.glb"}
            img={"../src/assets/fuente_de_voltaje.glb"}
            alt={"Osciloscopio"}
            side={"left"}
            bgColor={"#FB1818"}
            textColor={"#FFFFFF"}
            />
            <LongArticle titulo={" ¡Descubre la Fuente de Voltaje en 3D!"}
            contenido={"Te damos la bienvenida a un viaje tridimensional hacia el mundo de la fuente de voltaje. En este fascinante recorrido, podrás explorar cada componente y rincón de esta herramienta que desempeña un papel fundamental en la alimentación y el funcionamiento de dispositivos electrónicos."}
            src={"../src/assets/fuente_de_voltaje.glb"}
            img={"../src/assets/fuente_de_voltaje.png"}
            alt={"Fuente de voltaje"}
            side={"right"}
            bgColor={"#FFFFFF"}
            textColor={"#000000"}
            />
        </section>
    </>
)
