export function Banner({titulo, tipo}){
    if (tipo==1) {
        return(
            <div className="banner">
                <div className="banner__contenido">
                    <h1 className="banner__title">{titulo}</h1>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className="banner--alt">
                <div className="banner__contenido">
                    <h1 className="banner__title">{titulo}</h1>
                </div>
            </div>
        );
    }
}