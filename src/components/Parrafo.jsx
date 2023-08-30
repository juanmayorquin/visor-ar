export function Parrafo({ titulo, texto, backgroundColor, textColor }) {
    const style = {
        backgroundColor: backgroundColor,
        color: textColor
    };
    
    return (
        <div className="parrafo" style={style}>
            <h2 className="parrafo__title">{titulo}</h2>
            <p className="parrafo__texto">{texto}</p>
        </div>
    )
}