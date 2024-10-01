"use client";

import { useState } from "react";
import Link from "next/link";
import handleDownload from "../utils/cvDownLoade";

export default function NavMenu({ title }) {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar o menu hambúrguer

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav__menu">
      <Link href={"/"} className="myapp-caveat nav__title">
        {title}
      </Link>

      {/* Menu Hambúrguer (aparece só no mobile) */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="hamburger__line"></span>
        <span className="hamburger__line"></span>
        <span className="hamburger__line"></span>
      </div>

      {/* Links normais para desktop */}
      <ul className="nav__menu_list">
        <Link href={"/"} className="nav__link nav__popup_link">
          Home
        </Link>
        <Link href={"#sobre"} className="nav__link nav__popup_link">
          Sobre
        </Link>
        <Link href={"#project"} className="nav__link nav__popup_link">
          Projetos
        </Link>
        <Link href={"#header"} className="nav__link nav__popup_link">
          Contato
        </Link>
        <button className="nav__btn btn" onClick={handleDownload}>
          Baixar CV
        </button>
      </ul>

      {/* Menu Popup (aparece apenas quando o hambúrguer é clicado) */}
      {menuOpen && (
        <div className="nav__popup" onClick={toggleMenu}>
          <ul className="nav__popup_list">
            <Link href={"/"} className="nav__popup_link" onClick={toggleMenu}>
              Home
            </Link>
            <Link href={"#sobre"} className="nav__popup_link" onClick={toggleMenu}>
              Sobre
            </Link>
            <Link href={"#project"} className="nav__popup_link" onClick={toggleMenu}>
              Projetos
            </Link>
            <Link href={"#header"} className="nav__popup_link" onClick={toggleMenu}>
              Contato
            </Link>
            <button className="nav__btn btn" onClick={handleDownload}>
              Baixar CV
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
