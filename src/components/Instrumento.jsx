/* eslint-disable react/prop-types */
export function Instrumento({instrumentoData}) {
  return (
    <article className="elemento">
            <h2 className="elemento__title">{instrumentoData.titulo}</h2>
            <div className="elemento__content">
                <div className="elemento__texto">
                    <div className="elemento__parrafo">
                        <h4 className="elemento__subtitle">Información</h4>
                        <p>{instrumentoData.info}</p>
                    </div>
                    <div className="elemento__parrafo--derecha">
                        <h4 className="elemento__subtitle">Funcionamiento</h4>
                        <p>{instrumentoData.funcionamiento}</p>
                    </div>
                </div>
                <img className="elemento__img" src={instrumentoData.src} alt={instrumentoData.alt} />
            </div>
            <div className="elemento__content--reverse">
                <div className="elemento__texto">
                    <div className="elemento__parrafo">
                        <h4 className="elemento__subtitle">Tipos de {instrumentoData.nombre}</h4>
                        <p>{instrumentoData.tipos}</p>
                    </div>
                    <div className="elemento__parrafo--derecha">
                        <h4 className="elemento__subtitle">Información</h4>
                        <p>{instrumentoData.aplicaciones}</p>
                    </div>
                </div>
                <img className="elemento__img" src={instrumentoData.src2} alt={instrumentoData.alt2} />
            </div>
            <div className="elemento__content--abajo">
                <div className="elemento__parrafo--centrado">
                    <h4 className="elemento__subtitle">Funciones avanzadas</h4>
                    <p>{instrumentoData.funcionesAvanzadas}</p>
                </div>
                <div className="elemento__parrafo--centrado">
                    <h4 className="elemento__subtitle">Importancia en la Innovación</h4>
                    <p>{instrumentoData.importancia}</p>
                </div>
            </div>
            <div className="section__video-container">
                <iframe className="section__video" src={instrumentoData.video} title="YouTube video player" ></iframe>
            </div>
        </article>
  );
}
