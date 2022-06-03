import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";

const ListPokemonsView = React.lazy(() =>
  import("./views/ListPokemonsView").then((module) => ({ default: module.ListPokemonsView }))
);
const PokemonDetailsView = React.lazy(() =>
  import("./views/PokemonDetailsView").then((module) => ({
    default: module.PokemonDetailsView,
  }))
);

export const AppRoutes = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <ListPokemonsView />,
    },
    {
      path: "/:pokemonName",
      element: <PokemonDetailsView />,
    },
  ];

  return <React.Suspense fallback={<div>Loading...</div>}>{useRoutes(routes)}</React.Suspense>;
};
