export function Article({titulo, contenido, src, alt, side}) {
    if (side === "left"){
        return(
            <article className="articulo">
                <div className="articulo__contenido">
                    <h2 className="articulo__title">{titulo}</h2>
                    <p className="articulo__text">{contenido}</p>
                    <a className="articulo__boton" href="/instrumentos">Saber más</a>
                </div>
                <div className="articulo__img-div">
                    <img className="articulo__img" alt={alt} src={src}/>
                </div>
            </article>
        );
    }
    else if (side === "right"){
        return(
            <article className="articulo-right">
                <div className="articulo__img-div">
                    <img className="articulo__img" alt={alt} src={src}/>
                </div>
                <div className="articulo__contenido">
                    <h2 className="articulo__title">{titulo}</h2>
                    <p className="articulo__text">{contenido}</p>
                    <a className="articulo__boton" href="/instrumentos">Saber más</a>
                </div>
            </article>
        );
    }
    else {
        return;
    }
}