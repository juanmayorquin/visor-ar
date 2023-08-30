import { Parrafo } from "./Parrafo";

export function SectionParrafoDoble({titulo1, texto1, titulo2, texto2, backgroundColor, textColor}) {
    const style = {
        backgroundColor: backgroundColor,
        color: textColor
    }
    
    return (
        <div className="parrafo-doble" style={style}>
            <div className="parrafo-doble__parrafo">
                <h3 className="parrafo-doble__titulo">{titulo1}</h3>
                <p className="parrafo-doble__texto">{texto1}</p>
            </div>
            <div className="parrafo-doble__parrafo">
                <h3 className="parrafo-doble__titulo">{titulo2}</h3>
                <p className="parrafo-doble__texto">{texto2}</p>
            </div>
            
        </div>
    )
}
