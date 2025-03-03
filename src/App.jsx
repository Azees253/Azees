import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Route, Routes } from "react-router-dom";
import Home from "./componant/Home";
import About from "./componant/About";
import Skill from "./componant/Skill";
import Protfolio from "./componant/Protfolio";
import Contact from "./componant/Contact";
import Navbar from "./Navbar";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/protfolio" element={<Protfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
