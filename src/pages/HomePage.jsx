import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import BeersList from "./../assets/beers.png";
import BeersRandom from "../assets/random-beer.png";
import BeersNew from "../assets/new-beer.png";

function HomePage() {
  return (
    <div>
      <NavLink to="/beers">
        <a href="" className="BeersList">
          <img src={BeersList} alt="home gif" className="BeersList" />
        </a>{" "}
      </NavLink>
      <h1>All Beers</h1>
      <p>
        If you want to see a list of all the beers we have click the picture
        above.
      </p>

      <NavLink to="/random-beer">
        <a href="" className="BeersRandom">
          <img src={BeersRandom} alt="home gif" className="BeersRandom" />
        </a>{" "}
      </NavLink>
      <h1>Random Beer</h1>
      <p>If you want to see a random beer please click the picture above.</p>

      <NavLink to="/new-beer">
        <a href="" className="BeersNew">
          <img src={BeersNew} alt="home gif" className="BeersNew" />
        </a>{" "}
      </NavLink>
      <h1>New Beer</h1>
      <p>
        If you want to new beer not on the list please click the picture above.
      </p>
    </div>
  );
}

export default HomePage;
