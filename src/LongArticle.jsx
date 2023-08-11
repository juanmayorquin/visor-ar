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
            <div className="article__model-div">
                <model-viewer 
                    className="articulo__model"
                    orbit="45deg 55deg 1m"
                    src={src}
                    poster={src}
                    alt={alt}
                    camera-controls
                    auto-rotate ar>
                </model-viewer>
            </div>
        </article>
        );
    }
    else if (side === "right"){
        return(
            <article className="articulo-largo-right">
            <div className="article__model-div">
                <model-viewer 
                    className="articulo__model"
                    src={src}
                    poster={src}
                    alt={alt}
                    orbit="45deg 55deg 1m"
                    camera-controls
                    auto-rotate ar>
                </model-viewer>
            </div>           
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