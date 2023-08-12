export function LargeArticle({titulo, contenido, src, img, alt, side, bgColor, textColor}){
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
                </div>
                <div className="article__model-div">
                    <model-viewer 
                        className="articulo__model"
                        src={src}
                        poster={src}
                        alt={alt}
                        orbit="45deg 55deg 1m"
                        touch-action="pan-y"
                        disable-tap
                        disable-zoom
                        disable-pan
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
                        touch-action="pan-y"
                        disable-tap
                        disable-zoom
                        disable-pan
                        camera-controls
                        auto-rotate ar>
                    </model-viewer>
                </div>           
                <div className="articulo__contenido">
                    <h2 className="articulo__title">{titulo}</h2>
                    <p className="articulo__text">{contenido}</p>
                </div>
            </article>
        );
    }
    else {
        return;
    }
}