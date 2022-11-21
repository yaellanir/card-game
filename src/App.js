import Homepage from "./Pages/Homepage";
import GamePage from "./Pages/GamePage";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";
import Error from "./Pages/Error";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Homepage/> */}
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/gamepage" element={<GamePage />} />
        <Route exact path="/about" element={<About />} />
        <Route  path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;