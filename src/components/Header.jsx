import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header__contain">
        <h2 className="myapp-open-sans header__contain_subtitle">Precisa de um</h2>
        <h2 className="title myapp-open-sans header__contain_title">Desenvolvedor Front End</h2>
        <h2 className="myapp-open-sans header__contain_subtitle">Para transfomar suas ideias em experiências incriveis?</h2>
        <div className="header__contain_btns">
          <Link
            className="header__contain__btn"
            href="https://www.linkedin.com/in/erickydias/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/image/linkedin.svg" alt="Logo Linkedin" />
          </Link>
          <Link
            className="header__contain__btn"
            href="https://github.com/dev-erickydias"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/image/github.svg" alt="Logo Github" />
          </Link>
          <Link
            className="header__contain__btn"
            href="https://www.instagram.com/ericky_dias/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/image/instagram.svg" alt="Logo Instagram" />
          </Link>
        </div>
      </div>
      <img
      className="header__contain_img"
        src="/image/Sem_titulo-2.png"
        alt=""
      />
    </header>
  );
}
