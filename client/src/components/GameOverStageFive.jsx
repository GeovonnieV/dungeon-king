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
            You used the blast potion to strike down the warlock, but the door still remains 
            locked and the juniper sowrd is not enough to cut it open.
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