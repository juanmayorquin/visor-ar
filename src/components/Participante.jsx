export function Participante({ nombre, subtitulo, texto1, nombre_corto, texto2 }) {
    return (
        <div className="participante">
            <div className="participante__info">
                <h3 className="participante__nombre">{nombre}</h3>
                
                <h4 className="participante__subtitulo">{subtitulo}</h4>
            </div>
            <p className="participante__texto">{texto1}<span>{nombre_corto}</span>{texto2}</p>
        </div>
    );
}