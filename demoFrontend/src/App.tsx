import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import "./App.css";
import "./assets/buttons.css";

interface Pokemon {
  id_pokemon: number;
  nombre: string;
}

function App() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    axios
      .get<Pokemon[]>("http://localhost:3000/pokemon")
      .then((response) => setPokemon(response.data))
      .catch((err) => console.error(err));
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
        {pokemon.map((p) => (
          <button className="button" key={p.nombre}>
            {p.nombre}
          </button>
        ))}
      </div>
    </>
  );
}

export default App;
