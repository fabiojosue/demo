import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState<string>("");

  useEffect(() => {
    axios
      .get<{ pokemon: string }>("http://localhost:3000/pokemon")
      .then((response) => setPokemon(response.data.pokemon))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Laraa + Sorg</h1>
      <div className="card">
        <h2>Pokemon API:</h2>
        <p>{pokemon}</p>
      </div>
    </>
  );
}

export default App;
