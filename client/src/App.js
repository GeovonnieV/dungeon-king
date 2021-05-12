import React from "react";
import "./styles/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import components
import StageOne from "./components/StageOne";
import StageTwo from "./components/StageTwo";
import StageThree from "./components/StageThree";
import StageFour from "./components/StageFour";
import Intro from "./components/Intro";
import GameOverStageOne from "./components/GameOverStageOne";
import GameOverStageTwo from "./components/GameOverStageTwo";
import GameOverStageThree from "./components/GameOverStageThree";
import GameOverStageFour from "./components/GameOverStageFour";

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
          <GameOverStageTwo path="/game-over-stage-two" component={GameOverStageTwo} />
          {/* stage three */}
          <StageThree path="/stage-three" component={StageThree} />
          <GameOverStageThree path="/game-over-stage-three" component={GameOverStageThree} />
          {/* stage four */}
          <StageFour path="/stage-four" component={StageFour} />
          <GameOverStageFour path="/game-over-stage-four" component={GameOverStageFour} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
