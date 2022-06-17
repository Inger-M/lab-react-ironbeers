import React from "react";
import NavBar from "./../components/Navbar";
import { listBeers } from "../services/beer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ListAllBeers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    listBeers().then((data) => {
      console.log(data);
      setBeers(data);
    });
  }, []);

  return (
    <div>
      <NavBar />
      <ul>
        {beers.map((beer) => (
          <li key={beer._id}>
            <img src={beer.image_url} style={{ maxHeight: "20vh" }} />
            <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
            <p>{beer.tagline}</p>
            <p>Created by: {beer.contributed_by}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListAllBeers;
