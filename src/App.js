import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header.js';
import HomePage from './HomePage.js';
import Footer from './Components/Footer/Footer.js';
import Tile from './Components/Tile/Tile.js';
import Banner from './Components/Banner/Banner';
import Progress from './Components/Progress/Progress';
import Intro from './Components/Intro/Intro.js';
import About from './Components/About/About.js';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            {/* Done on web vscode */}
          </Routes>
          {/* <HomePage /> */}
          {/* <Intro />
          <About/> */}
          <Footer />
      </div>
    </Router>
  );
}

export default App;