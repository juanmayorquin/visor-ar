export function ParrafoPeq ({ titulo, contenido }) {
    return (
        <div className="parrafo-doble__parrafo">
            <h3 className="parrafo-doble__titulo">{titulo}</h3>
            <p className="parrafo-doble__texto">{contenido}</p>
        </div>
    );
}