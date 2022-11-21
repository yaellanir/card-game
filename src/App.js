import Homepage from "./Pages/Homepage";
import GamePage from "./Pages/GamePage";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";
import Error from "./Pages/Error";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      {isLoading && <Spinner />}
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route
          exact
          path="/gamepage"
          element={<GamePage setIsLoading={setIsLoading} />}
        />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
