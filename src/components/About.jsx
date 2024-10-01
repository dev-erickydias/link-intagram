"use client";
import handleDownload from "../utils/cvDownLoade";

export default function About() {
    return (
        <section id="sobre" className="about fade-in">
            <div className="contain">
                <img className="about__image" src="./image/perfil-image.png" alt="foto de perfil de Ericky Dias." />
                <button className="btn about__btn" onClick={handleDownload}>Baixar CV</button>
            </div>
            <div className="about__texts">
                <h2 className="title about__title">Sobre mim</h2>
                <p className="about__description">Me chamo Ericky Dias e sou desenvolvedor FullStack com 2 anos de experiência na área. Possuo habilidades em <span className="about__description_span">HTML, CSS, JavaScript, Tailwind CSS, API Rest, Node e MongoDB.</span></p>
                <p className="about__description">Também sou sócio do salão de beleza Heavens Hair, onde desenvolvo minhas Soft Skills, como: disciplina, persistência, criatividade, resiliência, escuta ativa, memória, empatia e trabalho em equipe.</p>
            </div>
        </section>
    );
}
