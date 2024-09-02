import React from "react";
import Amazon from "../assets/amazon.png";
import Flipkart from "../assets/flipkart.png";
import Hero from "../assets/hero-image.png";

/**
 * Componente HeroSection
 *
 * Representa a seção principal da página inicial, que apresenta um título, uma descrição,
 * botões de ação e logotipos de marcas de lojas. Inclui uma imagem de destaque ao lado.
 *
 * @returns {JSX.Element} Componente HeroSection.
 */
const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>SEUS PÉS MERECEM O MELHOR</h1>
        <p>
          SEUS PÉS MERECEM O MELHOR E ESTAMOS AQUI PARA AJUDÁ-LO COM NOSSOS
          SAPATOS.
        </p>

        <div className="hero-btn">
          <button>Compre Agora</button>
          <button className="secondary-btn">Categoria</button>
        </div>

        <div className="shopping">
          <p>Também Disponível Em</p>

          <div className="brand-icons">
            <img src={Amazon} alt="amazon-logo" />
            <img src={Flipkart} alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={Hero} alt="hero-image" />
      </div>
    </main>
  );
};

export default HeroSection;
