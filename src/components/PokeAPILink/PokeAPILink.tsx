import React from "react";

// Assets
import PokeAPILogo from "../../assets/poke-api.png";

export const PokeAPILink = () => {
  return (
    <a
      href="https://pokeapi.co/"
      target="_blank"
      rel="noopener noreferrer"
      className="poke-api-link"
    >
      <img src={PokeAPILogo} alt="Poke API" width={80} />
    </a>
  );
};
