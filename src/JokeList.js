import React from "react";

function JokeList({ searchTerm, jokes }) {
  return (
    <div className="joke-list">
      <h1>Jokes about {searchTerm}</h1>
      <ul>
        {jokes.map((joke) => (
          <li key={joke.id}>{joke.joke}</li>
        ))}
      </ul>
    </div>
  );
}

export default JokeList;
