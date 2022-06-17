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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beers" element={<ListAllBeers />} />
          <Route path="/beers/:id" element={<SingleBeerPage />} />
          <Route path="/random-beer" element={<RandomBeerPage />} />
          <Route path="/new-beer" element={<CreateNewBeer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
