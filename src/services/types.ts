export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonDetails = {
  species: {
    name: string;
  };
  sprites: {
    front_shiny: string;
  };
};
