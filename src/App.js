import React from "react";
import Booster from "./components/Booster";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Shortener from "./components/Shortener";
import Stats from "./components/Stats";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Shortener />
      <Stats />
      <Booster />
      <Footer />
    </div>
  );
}

export default App;
