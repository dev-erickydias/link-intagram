"use client"

export default function NavMenu({title}){
    //Função OnClick do btn
    const handleDownload = () => {
        const pdfUrl = "/Ericky_Dias_en_2024.pdf"
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Ericky_Dias_en_2024.pdf'; // Nome do arquivo quando baixado
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <nav className="nav__menu">
            <h1 className="title nav__title">{title}</h1>
            <ul className="nav__menu_list">
                <l1 className="nav__link">Home</l1>
                <l1 className="nav__link">Sobre</l1>
                <l1 className="nav__link">Projetos</l1>
                <l1 className="nav__link">Contato</l1>
                <button className="nav__btn" onClick={handleDownload}>Baixar CV</button>
            </ul>
            
        </nav>
    )
}