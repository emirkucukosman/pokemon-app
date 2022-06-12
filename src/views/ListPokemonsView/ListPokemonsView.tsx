import React, { useEffect, useCallback, useRef } from "react";

// Routing
import { Link } from "react-router-dom";

// Services
import { useGetPokemonsQuery, usePrefetch } from "src/services/pokemon";
import { Pokemon } from "src/services/types";

export const ListPokemonsView = () => {
  const [offset, setOffset] = React.useState(0);
  const [totalResults, setTotalResults] = React.useState<Pokemon[]>();

  // RTK Query
  const { data, error, isLoading } = useGetPokemonsQuery(offset);
  const prefetchPokemonDetails = usePrefetch("getPokemonByName");

  // Infinite scrolling
  const observer = useRef<IntersectionObserver>();
  const lastPokemonItem = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && data?.next) {
          setOffset((prevOffset) => prevOffset + 40);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, data?.next]
  );

  const handleLinkHover = (name: string) => () => {
    prefetchPokemonDetails(name);
  };

  useEffect(() => {
    if (data?.results) {
      return setTotalResults(totalResults ? [...totalResults, ...data.results] : data.results);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.results]);

  if (error) {
    return (
      <div className="container">
        <span>Could not fetch Pokemons</span>
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
      {totalResults
        ? totalResults.map((pokemon, i) => (
            <Link
              to={`/${pokemon.name}`}
              style={{ textDecoration: "none" }}
              onMouseOver={handleLinkHover(pokemon.name)}
              key={i}
            >
              <div
                className="pokemon-item"
                ref={i + 1 === totalResults.length ? lastPokemonItem : undefined}
              >
                <span>{pokemon.name}</span>
              </div>
            </Link>
          ))
        : null}
    </div>
  );
};
