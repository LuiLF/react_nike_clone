import React from "react";
import Logo from "../assets/brand_logo.png";

/**
 * Componente Navigation
 *
 * Representa a barra de navegação do site, incluindo o logotipo e uma lista de itens de menu.
 * Inclui um botão de ação para entrada.
 *
 * @returns {JSX.Element} Componente Navigation.
 */
const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Localização</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>

      <button>Entrar</button>
    </nav>
  );
};

export default Navigation;
