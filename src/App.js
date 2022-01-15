import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Electronics from "./components/Electronics";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div className="content">
        <Electronics />
        {/* Grocery */}
        {/* Clothings */}
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
