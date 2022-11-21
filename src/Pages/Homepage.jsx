import React, { useState, useEffect } from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Homepage() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      async function fetchImagesForCards() {
        const { data } = await axios.get(
          "https://6374a94848dfab73a4e4fc2d.mockapi.io/cards"
        );
        setCards(data);
        setIsLoading(false);
      }
      fetchImagesForCards();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="homepage-section">
      {isLoading && <Spinner />}
      <h1>Memory Card Game</h1>
      <Link Link to="/about">
        <button>About</button>
      </Link>
      <Link Link to="/gamePage">
        <button onClick={fetchImagesForCards}>New Game</button>
      </Link>
      {/* <button>Top Scores</button> */}
    </div>
  );
}

export default Homepage;
