import React from "react";
import { Routes, Route } from "react-router-dom";
import { Bird, Endangered, Endemic, Home, Migratory, Native } from "./pages";
import { Navigation } from "./components";

const App = () => {
  return (
    <div className="font-Lato">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/birds" element={<Bird />}>
          <Route index element={<Native />} />
          <Route path="migratory" element={<Migratory />} />
          <Route path="endemic" element={<Endemic />} />
          <Route path="endangered" element={<Endangered />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
