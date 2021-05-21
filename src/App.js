import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes/index";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ToastContainer />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
