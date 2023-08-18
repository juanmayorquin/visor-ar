import { Link } from "react-router-dom";

export function Article({titulo, contenido, src, alt, side}) {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    if (side === "left"){
        return(
            <article className="articulo">
                <div className="articulo__contenido">
                    <h2 className="articulo__title">{titulo}</h2>
                    <p className="articulo__text">{contenido}</p>
                    <Link onClick={scrollToTop} className="articulo__boton" to="/instrumentos">Saber más</Link>
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
                    <Link onClick={scrollToTop} className="articulo__boton" to="/instrumentos">Saber más</Link>
                </div>
            </article>
        );
    }
    else {
        return;
    }
}