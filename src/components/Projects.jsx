"use client";

import { useState, useEffect } from "react";
import getDataBase from "../services/bdService";

export default function Projects() {
  // Estado para armazenar o resultado da base de dados
  const [data, setData] = useState(null);
  const [startIndex, setStartIndex] = useState(0); // Índice inicial dos projetos visíveis
  const [endIndex, setEndIndex] = useState(6); // Índice final dos projetos visíveis

  // Use useEffect para buscar os dados ao montar o componente
  useEffect(() => {
    getDataBase()
      .then((res) => {
        setData(res); // Atualize o estado com o resultado
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []); // [] garante que o useEffect rode apenas uma vez, ao montar o componente

  // Função para carregar os próximos 6 projetos
  const loadNextProjects = () => {
    if (endIndex < data.documents.length) {
      setStartIndex(startIndex + 6);
      setEndIndex(endIndex + 6);
    } else {
      // Se não houver mais projetos suficientes, recomece do início
      setStartIndex(0);
      setEndIndex(6);
    }
  };

  // Verifique se data e data.documents estão disponíveis antes de mapear
  if (!data || !data.documents) {
    return <p>Carregando...</p>; // Exibe uma mensagem enquanto os dados estão sendo carregados
  }

  const projetosDataBase = data.documents;

  // Filtrar e renderizar somente projetos com todas as propriedades válidas
  const projetosFiltrados = projetosDataBase.filter(
    (projeto) =>
      projeto.name &&
      projeto.image &&
      projeto.descricao &&
      projeto.tecnologia &&
      projeto.deploy &&
      projeto.repositorio
  );

  return (
    <section id="project" className="projects fade-in">
      <h2 className="title projects__title">Projetos</h2>
      {/* Mostrar apenas os projetos entre startIndex e endIndex */}
      {projetosFiltrados.slice(startIndex, endIndex).map((projeto, index) => (
        <div key={index} className="project">
          <img className="project__image" src={projeto.image} alt={projeto.name} />
          <div className="project__contain">
            <h2 className="project__title myapp-caveat">{projeto.name}</h2>
            <p className="project__text">{projeto.descricao}</p>
            <div className="project__techs">
              {projeto.tecnologia.map((tech, techIndex) => (
                <span key={techIndex} className="project__tech">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project__btns">
              <a
                className="project__btn"
                href={projeto.deploy}
                target="_blank"
                rel="noopener noreferrer"
              >
                Deploy
              </a>
              <a
                className="project__btn"
                href={projeto.repositorio}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repositório
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Renderizar o botão "Ver Mais" apenas se houver mais de 6 projetos */}
      {projetosFiltrados.length > 6 && (
        <div className="project__more">
          <button onClick={loadNextProjects} className="project__btn">
            Ver Mais
          </button>
        </div>
      )}
    </section>
  );
}
