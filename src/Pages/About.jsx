import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="title">Do you have good memory?</h1>
      <h3 className="sub-title">let's test it out!</h3>
      <p>
        The game starts with all the cards face down and players take turns to
        turn over two cards.
        <br />
        <br />
        If the two cards have the same picture, then they keep the cards,
        otherwise they turn the cards face down again.
        <br />
        <br />
        The winner is the person with the most cards when all the cards have
        been taken
      </p>
      <h2>GOOD LUCK!</h2>
      <br />
      <br />
      <Link Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default About;
