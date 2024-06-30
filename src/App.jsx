import React from "react";
import "./App.css";
import Header from "./Component/Header";
import HeroPage from "./Component/HeroPage";
import "../node_modules/boxicons";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Component/Footer";
import Project from "./Component/Project";

const App = () => {
  return (
    <div>
      <Header />
      <HeroPage />
      <Project />
      <Footer />
    </div>
  );
};

export default App;
