import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home.js";
import KnowLedge from "./Pages/KnowLedge";
import NotFound from "./Pages/NotFound";
import Portfolio from "./Pages/Portfolio";

import "./styles/styles.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/competences" exact element={<KnowLedge />} />
        <Route path="/portfolio" exact element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
