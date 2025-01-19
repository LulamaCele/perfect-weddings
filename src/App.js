import React from "react";
import { Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import { Nav } from "./components/nav/Nav";
// import { Main } from './components/main/Main';
// import { ServiceCTA } from './components/services/ServiceCTA';
// import { GalleryCTA } from './components/gallery/GalleryCTA';
// import { TestimonialsCTA } from './components/testimonials/TestimonialsCTA';
// import { Footer } from './components/footer/Footer';
import { Services } from "./pages/services/Services";
import { Testimonials } from "./pages/testimonials/Testimonials";
import { Gallery } from "./pages/gallery/Gallery";
import { Contact } from "./pages/contact/Contact";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/perfect-weddings" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

// export default App;
