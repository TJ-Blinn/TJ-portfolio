import React from "react";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar, Resume } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Resume />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
