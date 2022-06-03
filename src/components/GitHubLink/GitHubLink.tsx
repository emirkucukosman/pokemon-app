import React from "react";

// Assets
import GitHubLogo from "../../assets/github-logo.png";

export const GitHubLink = () => {
  return (
    <a
      href="https://github.com/emirkucukosman"
      target="_blank"
      rel="noopener noreferrer"
      className="github-link"
    >
      <img src={GitHubLogo} alt="GitHub" width={40} />
    </a>
  );
};
