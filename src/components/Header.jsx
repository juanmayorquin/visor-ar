import { useEffect } from "react";

export function Header() {    
    useEffect(() => {

        function toggleNavigation() {
          const navbarItems = document.querySelector('.navbar__items--mobile');
          navbarItems.classList.toggle('active');
          this.classList.toggle('active');
        }
        
        const navbarToggle = document.getElementById('navbar-button');
        
        if (navbarToggle !== null) {
          navbarToggle.addEventListener('click', toggleNavigation);
        }
        
        return () => {
          if (navbarToggle !== null) {
            navbarToggle.removeEventListener('click', toggleNavigation);
          }
        }
        
      }, []);
    return (
        <div className="headerDiv">
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
                    <a className="navbar__logo" href="./"><img src="./img/UAO.png" alt="Logo UAO" /></a>
                    <ul className="navbar__items">
                        <a href="./" className="navbar__item"><li>Inicio</li></a>    
                        <a href="./#/instrumentos" className="navbar__item"><li>Instrumentos</li></a>
                        <a href="./#/modelos" className="navbar__item"><li>Modelos</li></a>
                    </ul>   
                </nav>
                    <img className="header__logo50" src="./img/Logo-50.png" alt="Logo 50 Años" />       
            </header>
            <ul className="navbar__items--mobile">
                <a href="./" className="navbar__item--mobile"><li>Inicio</li></a>    
                <a href="./#/instrumentos" className="navbar__item--mobile"><li>Instrumentos</li></a>
                <a href="./#/modelos" className="navbar__item--mobile"><li>Modelos</li></a>
            </ul>
        </div>
    );
    }