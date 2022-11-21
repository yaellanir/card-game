import React, { useState, useEffect } from "react";
import "./GamePage.css";
import axios from "axios";

function GamePage({ setIsLoading }) {
  const [cards, setCards] = useState([]);

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

  function shuffle() {}

  return (
    <div className="gamepage-section">
      <div className="gameboard"></div>
      <div className="user-section"></div>
    </div>
  );
}

export default GamePage;
