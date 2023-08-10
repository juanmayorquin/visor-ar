export function Header() {
    return (
        <>
            <div className="color-bar"></div>
            <header className="header">
                <nav className="navbar">
                    <a className="navbar__logo" href="./index.html"><img src="../img/UAO.png" alt="Logo UAO" /></a>
                    <ul className="navbar__items">
                        <a href="./index.html" className="navbar__item"><li>Inicio</li></a>    
                        <a href="#" className="navbar__item"><li>Información</li></a>
                        <a href="#" className="navbar__item"><li>Modelos</li></a>    
                    </ul>   
                </nav>  
                    <img src="../img/Logo-50.png" alt="Logo 50 Años" />       
            </header>
        </>
    );
    }