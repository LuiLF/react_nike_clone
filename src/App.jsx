import "./App.css";
import HeroSection from "./components/Hero";
import Navigation from "./components/Navigation";

/**
 * Componente App
 *
 * Componente principal da aplicação. Inclui a navegação e a seção hero.
 *
 * @returns {JSX.Element} Componente App.
 */
const App = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
    </div>
  );
};

export default App;
