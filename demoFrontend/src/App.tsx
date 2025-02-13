import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import "./App.css";

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
        <ul>
          {pokemon.map((p) => (
            <li key={p.id_pokemon}>{p.nombre}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
