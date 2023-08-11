export function Header() {
    return (
        <>
            <header className="header">
                <nav className="navbar">
                    <button id="navbar-button" className="navbar__button">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#D20B0B" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 6l16 0" />
                            <path d="M4 12l16 0" />
                            <path d="M4 18l16 0" />
                        </svg>
                    </button>
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