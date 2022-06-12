import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { GitHubLink } from "./GitHubLink";

test("github link renders correctly", () => {
  render(<GitHubLink />);
  const anchor = screen.getByRole("link");
  expect(anchor).toBeInTheDocument();
  expect(anchor).toHaveAttribute("href", "https://github.com/emirkucukosman/pokemon-app");
  expect(anchor).toHaveAttribute("target", "_blank");
  expect(anchor).toHaveAttribute("rel", "noopener noreferrer");
});
