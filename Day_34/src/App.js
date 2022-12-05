import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel/Carousel";

const App = () => {
  return (
    <div>
      <h1>APP COMPONENT</h1>
      <Navbar />
      <Carousel />
      <Footer />
    </div>
  );
};

export default App;
