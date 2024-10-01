 const handleDownload = () => {
    const pdfUrl = "/Ericky_Dias_en_2024.pdf"
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Ericky_Dias_en_2024.pdf'; // Nome do arquivo quando baixado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export default handleDownload