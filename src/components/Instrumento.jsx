export function Instrumento({nombre, titulo, info, funcionamiento, src, alt, tipos, aplicaciones, src2, alt2, funcionesAvanzadas, importancia}){
    return(
        <article className="elemento">
            <h2 className="elemento__title">{titulo}</h2>
            <div className="elemento__content">
                <div className="elemento__texto">
                    <div className="elemento__parrafo">
                        <h4 className="elemento__subtitle">Información</h4>
                        <p>{info}</p>
                    </div>
                    <div className="elemento__parrafo--derecha">
                        <h4 className="elemento__subtitle">Funcionamiento</h4>
                        <p>{funcionamiento}</p>
                    </div>
                </div>
                <img className="elemento__img" src={src} alt={alt} />
            </div>
            <div className="elemento__content--reverse">
                <div className="elemento__texto">
                    <div className="elemento__parrafo">
                        <h4 className="elemento__subtitle">Tipos de {nombre}</h4>
                        <p>{tipos}</p>
                    </div>
                    <div className="elemento__parrafo--derecha">
                        <h4 className="elemento__subtitle">Información</h4>
                        <p>{aplicaciones}</p>
                    </div>
                </div>
                <img className="elemento__img" src={src2} alt={alt2} />
            </div>
            <div className="elemento__content--abajo">
                <div className="elemento__parrafo--centrado">
                    <h4 className="elemento__subtitle">Funciones avanzadas</h4>
                    <p>{funcionesAvanzadas}</p>
                </div>
                <div className="elemento__parrafo--centrado">
                    <h4 className="elemento__subtitle">Importancia en la Innovación</h4>
                    <p>{importancia}</p>
                </div>
            </div>
        </article>
    );
}