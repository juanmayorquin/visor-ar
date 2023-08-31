import { Footer } from "../components/Footer";
import { ColorBar } from "../components/ColorBar";
import { Banner } from "../components/Banner";
import { Section } from "../components/Section";
import { Parrafo } from "../components/Parrafo";
import { SectionParrafoDoble } from "../components/SectionParrafoDoble";
import { ParrafoPeq } from "../components/ParrafoPeq";
import { Container } from "../components/Container";
import { ModelSection } from "../components/ModelSection";
import {motion} from "framer-motion"
import { Participante } from "../components/Participante";

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
            <Container
                backgroundColor={"#FFFFFF"}
                content={
                    <Parrafo
                        titulo={"Sobre nuestro proyecto"}
                        texto={<p className="parrafo__texto">Nos complace presentar un proyecto que fusiona la ingeniería biomédica con la vanguardia tecnológica: "Explorando el Futuro a través de la Tecnología Biomédica". En un desafiante plazo de 21 días, nuestro equipo multidisciplinario se ha propuesto una misión ambiciosa: desarrollar un modelo prototipo de sistema multimedia diseñado específicamente para estudiantes de ingeniería biomédica.</p>}
            />
                }
            />

            <Container
                backgroundColor={"#D60707"}
                textColor={"#FFFFFF"}
                content={
                    <Parrafo
                titulo={"Este proyecto abarca múltiples aspectos esenciales:"}
                backgroundColor={"#D60707"}
                textColor={"#FFFFFF"}
                texto={
                    <>
                        <SectionParrafoDoble
                            parrafo1={
                                <ParrafoPeq
                                    titulo={"Modelo 3D y Realidad Aumentada"}
                                    contenido={"En solo 21 días, llevaremos a la realidad virtual dos de los dispositivos más innovadores de nuestro laboratorio biomédico. Estos modelos 3D permitirán a los estudiantes explorar y entender los dispositivos en detalle, desde cualquier lugar y en cualquier momento. La realidad aumentada les brindará la experiencia de interactuar con los dispositivos como si estuvieran en el laboratorio."}
                                />
                            }
                            parrafo2={
                                <ParrafoPeq
                                    titulo={"Página Web Interactiva"}
                                    contenido={"Nuestra página web se convertirá en un recurso esencial para los estudiantes. Cada dispositivo tendrá su propia sección con información exhaustiva, detalles técnicos y guías de uso. Pero no nos detenemos ahí: la incorporación de videos con audio que ilustran el uso correcto y las características técnicas ampliará la comprensión y el aprendizaje."}
                                />
                            }
                        />
                    </>
                }
            />
                }
            />
            <Container
                content={
                    <SectionParrafoDoble
                        parrafo1={
                            <ParrafoPeq
                                titulo={"Diseño Coherente y Material Design"}
                                contenido={"La estética y la funcionalidad se unen en nuestro proyecto. Siguiendo el sistema de diseño Material Design y manteniendo el estilo visual de la Universidad Autónoma de Occidente (UAO), garantizamos una experiencia unificada y agradable tanto en la aplicación como en la página web. Cada elemento multimedia se integra con fluidez para fomentar un aprendizaje intuitivo."}
                            />
                        }
                        parrafo2={
                            <ParrafoPeq
                                titulo={"Innovación en la Presentación de Información"}
                                contenido={"Más allá de la tecnología, nuestra innovación radica en cómo presentamos información. Buscamos transformar la manera en que los estudiantes interactúan con los dispositivos biomédicos. En solo 21 días, redefiniremos cómo se aprende sobre estos dispositivos, alentando la curiosidad y la exploración."}
                            />
                        }
                    />
                }
            />
            <ColorBar/>
            <Container
                content={
                    <>
                        <SectionParrafoDoble
                            parrafo1={
                                <Participante
                                    nombre={"Juan José Mayorquín Cabrera"}
                                    subtitulo={"El Maestro de la Codificación"}
                                    texto1={"Este participante es más que un experto en código, es un alquimista de la programación que transforma sueños en funcionalidades con un toque de magia digital. La destreza de "}
                                    nombre_corto={"Juan José"}
                                    texto2={" en la programación es como un hilo conductor entre la imaginación y la realidad, convirtiendo conceptos en sistemas tangibles con una maestría inigualable."}
                                />
                            }
                            parrafo2={
                                <Participante
                                    nombre={"Juan Camilo Castro López"}
                                    subtitulo={"El Comunicador Carismático"}
                                    texto1={"La destreza excepcional de "}
                                    nombre_corto={"Juan Camilo"}
                                    texto2={" para comunicar convierte ideas en emocionantes aventuras, conectando audiencias con la esencia y valor del proyecto como solo un auténtico maestro puede hacerlo."}
                                />
                            }
                        />
                        <SectionParrafoDoble
                            parrafo1={
                                <Participante
                                    nombre={"Valeria Bowers Gutiérrez"}
                                    subtitulo={"La Visionaria Creativa"}
                                    texto1={"Las ideas toman forma gracias al toque artístico de "}
                                    nombre_corto={"Valeria"}
                                    texto2={". Con una habilidad innata para el diseño, aporta belleza y creatividad al proyecto, transformando conceptos en obras maestras visuales."}
                                />
                            }
                            parrafo2={
                                <Participante
                                    nombre={"Julián Camilo Garzón Toro"}
                                    subtitulo={"La Mente Analítica"}
                                    texto1={"Conoce a nuestro experto analítico, "}
                                    nombre_corto={"Julián Camilo"}
                                    texto2={", quien aporta una perspectiva de otro nivel. Con una trayectoria impresionante desentraña los desafíos más complejos del proyecto y proporciona soluciones que marcan la diferencia."}
                                />
                            }
                        />
                    </>
                }
            />
            
            <Footer/>
        </motion.main>
    );
}