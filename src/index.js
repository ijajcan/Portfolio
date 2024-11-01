import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

let Component;
let pageClass = ""; 

switch (window.location.pathname) {
  case "/":
    Component = Home;
    pageClass = "page-home"; 
    break;
  case "/about":
    Component = About;
    pageClass = "page-about"; 
    break;
  case "/contact":
    Component = Contact;
    pageClass = "page-contact"; 
    break;
  case "/work":
    Component = Work;
    pageClass = "page-work"; 
    break;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className={pageClass}>
      <Navigation />
      <Component />
      <Footer />
    </div>
  </React.StrictMode>
);
