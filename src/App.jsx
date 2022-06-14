import HomePage from "./pages/HomePage";
import ListAllBeers from "./pages/ListAllBeers";
import CreateNewBeer from "./pages/CreateNewBeer";
import RandomBeerPage from "./pages/RandomBeerPage";
import SingleBeerPage from "./pages/SingleBeerPage";
import axios from "axios";
import { useEffect, useState } from "react/cjs/react.production.min";

function App() {
  const [beersData, setbeersData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(apiUrl);
      setbeerData(data.data);
    };
    getData();
  }, []);

  return <div className="App">npm</div>;
}

export default App;
