import { ColorBar } from "./components/ColorBar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Banner } from "./components/Banner";
import { Section } from "./components/Section";
import { Instrumento } from "./components/Instrumento";

export function Instrumentos() {
    return (
        <>
            <ColorBar />
            <Header />
            <Banner 
                titulo={"Instrumentos Biomédicos"}
                tipo={1}
            />
            <Section 
                texto={"¡Comencemos este emocionante viaje explorando de cerca dos instrumentos biomédicos que están cambiando el juego en la medicina moderna!"}
                isBold
            />
            <Instrumento
                nombre={"Osciloscopios"}
                titulo={"Desvelando el Universo Invisible: El Osciloscopio en Acción"}
                info={"El osciloscopio, una herramienta esencial en el ámbito de la electrónica y la ingeniería, es un dispositivo que permite visualizar y analizar señales eléctricas en forma de ondas. Esta tecnología se ha convertido en los ojos electrónicos que nos permiten adentrarnos en el mundo invisible de las señales eléctricas y comprender cómo interactúan en circuitos y sistemas diversos."}
                funcionamiento={"El osciloscopio funciona capturando las señales eléctricas y representándolas gráficamente en su pantalla. Utiliza una sonda para medir la tensión de la señal y luego la muestra en una forma de onda en tiempo real. Esto permite a los ingenieros y técnicos observar instantáneas de cómo varían las señales a lo largo del tiempo. Además de mostrar la amplitud y la frecuencia de las señales, el osciloscopio también puede revelar detalles sutiles, como la forma y la fase de las ondas."}
                src={"#"}
                alt={"Osciloscopio"}
                tipos={"Existen diferentes tipos de osciloscopios, desde los analógicos tradicionales hasta los modernos osciloscopios digitales. Los osciloscopios digitales son los más comunes en la actualidad y ofrecen ventajas como una mayor precisión, capacidad de almacenamiento de datos y opciones avanzadas de análisis y procesamiento de señales."}
                aplicaciones={"El osciloscopio se utiliza en una amplia gama de aplicaciones, desde la investigación y el desarrollo de productos hasta la resolución de problemas en circuitos y sistemas. Los ingenieros electrónicos utilizan osciloscopios para diseñar y probar circuitos, identificar fallos y depurar problemas de señal. En campos como las telecomunicaciones, la medicina y la investigación científica, el osciloscopio juega un papel fundamental en la captura y el análisis de señales."}
                src2={"#"}
                alt2={"Osciloscopio"}
                funcionesAvanzadas={"Los osciloscopios modernos ofrecen funciones avanzadas que van más allá de la simple visualización de señales. Algunos modelos permiten el análisis de espectro, lo que significa que pueden descomponer una señal en sus componentes de frecuencia. También pueden realizar mediciones automáticas de parámetros clave de la señal, como la frecuencia, el período y la amplitud."}
                importancia={"El osciloscopio es una herramienta fundamental para la innovación tecnológica. Desde el desarrollo de nuevos productos hasta la investigación científica, el osciloscopio permite a los ingenieros y científicos explorar el mundo invisible de las señales eléctricas y desbloquear un sinfín de posibilidades en la innovación."}
            />
            <Section
                texto={"El osciloscopio es una herramienta poderosa que ha revolucionado la forma en que los ingenieros y científicos comprenden y trabajan con señales eléctricas. Desde su capacidad para revelar detalles sutiles de las señales hasta su papel crucial en la resolución de problemas y la toma de decisiones en diseño y desarrollo, el osciloscopio sigue siendo un pilar en la industria electrónica. Es una ventana al mundo oculto de las señales eléctricas que impulsa nuestra tecnología moderna y transforma la forma en que interactuamos con el mundo de la electrónica."}
                backgroundColor={"#F2F2F2"}
            />
            <ColorBar />
            <Instrumento
                nombre={"Fuentes de Voltaje"}
                titulo={"El Corazón Energético: Explorando la Fuente de Voltaje"}
                info={"La fuente de voltaje, un componente esencial en la electrónica y la ingeniería eléctrica, es el núcleo que proporciona la energía necesaria para alimentar y operar una amplia variedad de dispositivos y sistemas electrónicos. Detrás de cada aparato electrónico que usamos, desde teléfonos inteligentes hasta sistemas de comunicación, se encuentra la fuente de voltaje, que convierte la energía eléctrica en posibilidades ilimitadas."}
                funcionamiento={"Una fuente de voltaje genera una tensión eléctrica constante, que puede ser ajustable en algunos modelos, y la proporciona a los circuitos y dispositivos conectados. Esta tensión es fundamental para que los componentes electrónicos funcionen correctamente, ya que define el flujo de corriente y la cantidad de energía disponible."}
                src={"/img/fuente-de-voltaje.webp"}
                alt={"Fuente de voltaje"}
                tipos={"Existen diferentes tipos de fuentes de voltaje, cada una diseñada para atender necesidades específicas. Las fuentes de voltaje lineales proporcionan una tensión constante y estable, mientras que las fuentes de voltaje conmutadas (conocidas como fuentes de alimentación conmutadas) ofrecen una mayor eficiencia energética al regular la tensión de salida de manera más dinámica."}
                aplicaciones={"Las fuentes de voltaje se utilizan en una amplia gama de aplicaciones, desde la electrónica de consumo hasta la investigación científica. En la electrónica doméstica, son responsables de alimentar dispositivos como computadoras, televisores y electrodomésticos. En entornos industriales, las fuentes de voltaje son fundamentales para operar maquinaria y sistemas de control. Además, en laboratorios y entornos de investigación, las fuentes de voltaje son esenciales para llevar a cabo experimentos y pruebas precisas."}
                src2={"/img/fuente-de-voltaje-2.png"}
                alt2={"Fuente de voltaje"}
                funcionesAvanzadas={"Las fuentes de voltaje modernas a menudo incorporan funciones avanzadas, como la capacidad de programar y controlar la tensión de salida, así como la limitación de corriente para proteger los componentes y prevenir daños. Algunos modelos también ofrecen interfaces digitales que permiten el control remoto y la automatización."}
                importancia={"La fuente de voltaje es un componente fundamental en la innovación tecnológica. Desde dispositivos portátiles hasta sistemas de energía renovable, la capacidad de generar y regular una tensión precisa es crucial para impulsar la evolución de la tecnología moderna. La investigación y el desarrollo continúan explorando formas de crear fuentes de voltaje más eficientes y versátiles."}
            />
            <Section
                texto={"La fuente de voltaje, a menudo pasando desapercibida pero omnipresente en nuestro mundo electrificado, es el motor que impulsa nuestra vida digital y tecnológica. Sin ella, la mayoría de los dispositivos que damos por sentado simplemente no podrían funcionar. Es el corazón energético que hace latir la electrónica moderna y desbloquea un sinfín de posibilidades en la innovación y el progreso tecnológico."}
                backgroundColor={"#F4F4F4"}
            />
            <Footer />
        </>
    );
}

