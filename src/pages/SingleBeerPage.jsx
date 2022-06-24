import React from "react";
import NavBar from "./../components/Navbar";
import { loadBeer } from "../services/beer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SingleBeerPage = () => {
  const [beer, setBeer] = useState(null);
  const { id } = useParams();

  useEffect(
    () => {
      console.log(id);
      loadBeer(id).then((data) => {
        console.log(data);
        setBeer(data);
      });
    },
    { id }
  );

  return (
    <div>
      <NavBar />
      {beer && (
        <>
          <h1>{beer.name}</h1>
          <img src={beer.image_url} style={{ maxHeight: "20vh" }} />
          <p>{beer.tagline}</p>
          <p>Created by: {beer.contributed_by}</p>
        </>
      )}
      SingleBeerPage and good stuff
    </div>
  );
};

export default SingleBeerPage;
