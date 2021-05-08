import React from "react";
import "./styles/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import components
import StageOne from "./components/StageOne";
import StageTwo from "./components/StageTwo";
import Intro from "./components/Intro";
import GameOverStageOne from "./components/GameOverStageOne";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Intro path="/" exact component={Intro} />
          {/* stage one */}
          <StageOne path="/stage-one" component={StageOne} />
          <GameOverStageOne path="/game-over-stage-one" component={GameOverStageOne} />
          {/* stage two */}
          <StageTwo path="/stage-two" component={StageTwo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
