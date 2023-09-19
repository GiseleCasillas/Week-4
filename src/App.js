import React, { useState, useEffect } from "react";
import "./App.css";
import JokeList from "./JokeList";

function App() {
  const [jokes, setJokes] = useState([]);
  const [currentSearchTerm, setCurrentSearchTerm] = useState("cat");

  const fetchJokes = (searchTerm) => {
    fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}`, {
      headers: { Accept: "application/json" }
    })
      .then((response) => response.json())
      .then((data) => {
        setJokes(data.results);
      });
  };

  useEffect(() => {
    fetchJokes(currentSearchTerm);
  }, [currentSearchTerm]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dad Jokes</h1>
      </header>
      <main>
        <div className="button-group">
          <button onClick={() => setCurrentSearchTerm("cat")}>Cat Jokes</button>
          <button onClick={() => setCurrentSearchTerm("dog")}>Dog Jokes</button>
          <button onClick={() => setCurrentSearchTerm("computer")}>
            Computer Jokes
          </button>
        </div>
        <JokeList searchTerm={currentSearchTerm} jokes={jokes} />
      </main>
    </div>
  );
}

export default App;
