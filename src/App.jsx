import React from "react";
import { Routes, Route } from "react-router-dom";
import { Bird, Home } from "./pages";
import { Navigation } from "./components";

const App = () => {
  return (
    <div className="font-Lato">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/birds" element={<Bird />} />
      </Routes>
    </div>
  );
};

export default App;
