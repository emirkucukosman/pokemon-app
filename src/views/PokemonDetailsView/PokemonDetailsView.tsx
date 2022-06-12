import React from "react";

// Routing
import { useParams, useNavigate } from "react-router-dom";

// Services
import { useGetPokemonByNameQuery } from "src/services/pokemon";

export const PokemonDetailsView = () => {
  const navigate = useNavigate();
  const { pokemonName } = useParams();
  const { data, isLoading, error } = useGetPokemonByNameQuery(pokemonName || "", {
    skip: pokemonName === undefined,
  });

  const handleBackClicked = () => {
    navigate(-1);
  };

  if (error) {
    return (
      <div className="container">
        <span>Could not fetch Pokemon details</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="container">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="top-left">
        <button className="navigate-back" onClick={handleBackClicked}>
          <span className="material-symbols-outlined">navigate_before</span>
          <span>Back</span>
        </button>
      </div>
      <div className="center-middle">
        <div className="pokemon-details">
          <h2 style={{ textAlign: "center" }}>{pokemonName}</h2>
          {data ? <img src={data.sprites.front_shiny} alt={pokemonName} /> : null}
        </div>
      </div>
    </div>
  );
};
