export function LongArticle({titulo, contenido, src, img, alt, side, bgColor, textColor}){
    const articleStyle = {
        backgroundColor: bgColor,
        color: textColor
    }

    if (side === "left"){
        return(
            <article className="articulo-largo" style={articleStyle}>
            <div className="articulo__contenido">
                <h2 className="articulo__title">{titulo}</h2>
                <p className="articulo__text">{contenido}</p>
                <a className="articulo__boton" href="#">Saber más</a>
            </div>
            <model-viewer className="articulo__model" alt={alt} src={src} ar poster={img} camera-controls touch-action="pan-y"></model-viewer>
        </article>
        );
    }
    else if (side === "right"){
        return(
            <article className="articulo-largo-right">
            <model-viewer className="articulo__model" alt={alt} src={src} ar poster={img} camera-controls touch-action="pan-y"></model-viewer>
            <div className="articulo__contenido">
                <h2 className="articulo__title">{titulo}</h2>
                <p className="articulo__text">{contenido}</p>
                <a className="articulo__boton" href="#">Saber más</a>
            </div>
        </article>
        );
    }
    else {
        return;
    }
}