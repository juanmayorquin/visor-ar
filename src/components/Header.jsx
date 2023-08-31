import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="headerDiv">
      <header className="header">
        <nav className="navbar">
          <button
            id="navbar-button"
            onClick={toggleMobileMenu}
            className="navbar__button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu-2"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#D20B0B"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </button>
          <NavLink className="navbar__logo" to="/" onClick={scrollToTop}>
            <img src="./img/UAO.png" alt="Logo UAO" />
          </NavLink>
          <ul className="navbar__items">
            <NavLink
              to="/"
              onClick={scrollToTop}
              className={({ isActive }) =>
                isActive ? "navbar__item active" : "navbar__item"
              }
            >
              <li>Inicio</li>
            </NavLink>
            <NavLink
              to="/instrumentos"
              onClick={scrollToTop}
              className={({ isActive }) =>
                isActive ? "navbar__item active" : "navbar__item"
              }
            >
              <li>Instrumentos</li>
            </NavLink>
            <NavLink
              to="/about"
              onClick={scrollToTop}
              className={({ isActive }) =>
                isActive ? "navbar__item active" : "navbar__item"
              }
            >
              <li>Acerca de</li>
            </NavLink>
          </ul>
        </nav>
        <img
          className="header__logo50"
          src="./img/Logo-50.png"
          alt="Logo 50 Años"
        />
      </header>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.ul
            animate={{ y: 0 }}
            initial={{ y: -600 }}
            transition={{ duration: 0.25 }}
            exit={{ y: -600 }}
            className="navbar__items--mobile"
          >
            <NavLink to="/" className="navbar__item--mobile">
              <li>Inicio</li>
            </NavLink>
            <NavLink to="/instrumentos" className="navbar__item--mobile">
              <li>Instrumentos</li>
            </NavLink>
            <NavLink to="/about" className="navbar__item--mobile">
              <li>Acerca de</li>
            </NavLink>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
