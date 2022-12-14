import React, { useState, useEffect } from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Homepage() {



  return (
    <div className="homepage-section">
      {/* {isLoading && <Spinner />} */}
      <h1>Memory Card Game</h1>
      <Link Link to="/about">
        <button>About</button>
      </Link>
      <Link Link to="/gamePage">
        <button>New Game</button>
      </Link>
      {/* <button>Top Scores</button> */}
    </div>
  );
}

export default Homepage;
