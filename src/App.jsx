/**
 * App component - The main entry point of the application.
 *
 * Renders a simple div containing the text "App".
 *
 * @component
 * @returns {JSX.Element} The rendered App component.
 */
import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
/**
 * Functional component representing the application.
 *
 * @returns {JSX.Element} The main application container.
 */
const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
