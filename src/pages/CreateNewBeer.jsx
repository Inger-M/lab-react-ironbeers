/* import React from "react";
import NavBar from "./../components/Navbar";
import { usestate } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateNewBeer = () => {
  const [beer, setBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_tips: "",
  });
  const navigate = useNavigate();

  const handleBeerCreation = (event) => {
    event.preventDefault();

    const apiURL = axios.create({
      baseURL: "https://ih-beers-api2.herokuapp.com/beers",
    });

    apiURL.post("/new", beer).then((response) => {
      console.log(response);
      console.log(beer);
      navigate("/");
    });
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={handleBeerCreation}>
        <label htmlFor="input">name</label>
        <input
          onChange={(event) => setBeer({ ...beer, name: event.target.value })}
          value={beer.name}
          type="text"
        />
        <br />
        <label htmlFor="input">tagline</label>
        <button> Create new beer</button>
      </form>
    </div>
  );
};

export default CreateNewBeer; */
