import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Pokemon, PokemonDetails } from "./types";

interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<PokemonDetails, string>({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemons: builder.query<PaginatedResponse<Pokemon>, number | void>({
      query: (offset = 0) => `pokemon?offset=${offset}&limit=40`,
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetPokemonsQuery } = pokemonApi;
