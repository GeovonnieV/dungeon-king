import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import {Link} from "react-router-dom";

const GameOverStageOne = () => {
  return (
    <div>
      <h1 className="title">Game Over</h1>
      {/*  */}
      <div className="container">
        <Jumbotron className="intro-jumbo">
          <p>
            Fate was not on your side.
          </p>
          <p>
            <Link to="/">
              <Button variant="primary" className="start-btn">
                Try Again
              </Button>
            </Link>
          </p>
        </Jumbotron>
      </div>
    </div>
  );
};

export default GameOverStageOne;
