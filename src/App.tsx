import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import RecommendationPage from "./pages/RecommendationPage";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">Voorgestelde oefeningen</div>
        <Routes>
          <Route path="/" element={<RecommendationPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
