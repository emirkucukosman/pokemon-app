import React from "react";

// Routing
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

// Components
import { GitHubLink } from "./components/GitHubLink";
import { PokeAPILink } from "./components/PokeAPILink";

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <GitHubLink />
      <PokeAPILink />
    </BrowserRouter>
  );
};
