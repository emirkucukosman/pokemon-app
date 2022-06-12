import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { PokeAPILink } from "./PokeAPILink";

test("poke api link renders correctly", () => {
  render(<PokeAPILink />);
  const anchor = screen.getByRole("link");
  expect(anchor).toBeInTheDocument();
  expect(anchor).toHaveAttribute("href", "https://pokeapi.co/");
  expect(anchor).toHaveAttribute("target", "_blank");
  expect(anchor).toHaveAttribute("rel", "noopener noreferrer");
});
