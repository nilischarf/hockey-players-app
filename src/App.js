import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Players from "./pages/Players";
import About from "./pages/About";

function App() {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/players")
      .then((response) => response.json())
      .then((data) => setPlayers(data))
  }, [])

  function addPlayer(newPlayer) {
    setPlayers([...players, newPlayer])
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players players={players} addPlayer={addPlayer} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;