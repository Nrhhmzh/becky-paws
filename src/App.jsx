import React from 'react';
import './index.css'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Areas from "./components/Areas";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Areas />
      <Services />
      <Pricing />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}

export default App;