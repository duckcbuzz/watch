import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes/index";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
