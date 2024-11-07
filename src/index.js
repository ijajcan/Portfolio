import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import MyCookBook from "./pages/MyCookBook";
import Pssst from "./pages/Pssst";
import Gallery from "./pages/Gallery";

function App() {
  const location = useLocation();
  const [pageClass, setPageClass] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setPageClass("page-home");
        break;
      case "/about":
        setPageClass("page-about");
        break;
      case "/contact":
        setPageClass("page-contact");
        break;
      case "/work":
      case "/pssst":
      case "/mycookbook":
      case "/gallery":
        setPageClass("page-work");
        break;
      default:
        setPageClass("");
    }

    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={pageClass}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="/pssst" element={<Pssst />} />
        <Route path="/mycookbook" element={<MyCookBook />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
