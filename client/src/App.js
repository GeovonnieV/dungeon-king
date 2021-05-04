import React from "react";
import "./styles/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Button } from "react-bootstrap";
import {Link, Router} from "@reach/router";
import StageOne from "./components/StageOne";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="App">
    // 
    <Router>
      <Intro path="/" />
      <StageOne path="/stage-one" />
    </Router>
    
    </div>
  );
}

export default App;
