import React from "react";
import Button from "./Button";

const Score = ({ refresh, score }) => {
  return (
    <article className="scoreCard">
      <h1>Your Score</h1>
      <p>{score}</p>
      <Button onClick={refresh}>Take Quiz Again</Button>
    </article>
  );
};

export default Score;
