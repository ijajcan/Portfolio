import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Navigation from "./components/Navigation";

let Component;
switch (window.location.pathname) {
  case "/":
    Component = Home
    break;
  case "/about":
    Component = About
    break;
    case "/contact":
      Component = Contact
      break;  case "/work":
      Component = Work
      break;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
  <Navigation />
  <Component />
</React.StrictMode>);
