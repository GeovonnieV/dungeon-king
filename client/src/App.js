import React from "react";
import "./styles/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StageOne from "./components/StageOne";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="App">
      //
      <Router>
        <Switch>
          <Intro path="/" exact component={Intro} />
          <StageOne path="/stage-one" component={StageOne} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
