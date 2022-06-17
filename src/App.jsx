import HomePage from "./pages/HomePage";
import ListAllBeers from "./pages/ListAllBeers";
import CreateNewBeer from "./pages/CreateNewBeer";
import RandomBeerPage from "./pages/RandomBeerPage";
import SingleBeerPage from "./pages/SingleBeerPage";
import axios from "axios";
import { useEffect, useState } from "react/cjs/react.production.min";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "../src/App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      npm
    </div>
  );
}

export default App;
