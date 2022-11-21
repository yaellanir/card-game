import React, { useState, useEffect } from "react";
import "./GamePage.css";
import axios from "axios";
import Card from "../components/Card";

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

<<<<<<< HEAD
  return (
    <div className="gamepage-section">
      <div className="gameboard"></div>
      <div className="user-section"></div>
    </div>
  );
}
=======
  return <div className="gamepage-section">
<div className="gameboard"></div>
<div className="user-section"></div>
<Card />
    </div>;
>>>>>>> 7e1ed6c1f44b6fa971954fcdff4405be533391c0

export default GamePage;
