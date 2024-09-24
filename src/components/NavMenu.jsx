"use client"

import Link from "next/link";
import handleDownload from "../utils/cvDownLoade"

export default function NavMenu({title}){
    return (
        <nav className="nav__menu">
            <Link href={"/"} className=" myapp-caveat nav__title">{title}</Link>
            <ul className="nav__menu_list">
                <Link href={"#"} className="nav__link">Home</Link>
                <Link href={"#"} className="nav__link">Sobre</Link>
                <Link href={"#"} className="nav__link">Projetos</Link>
                <Link href={"#"} className="nav__link">Contato</Link>
                <button className="nav__btn btn" onClick={handleDownload}>Baixar CV</button>
            </ul>
            
        </nav>
    )
}