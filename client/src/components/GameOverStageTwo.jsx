import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import {Link} from "react-router-dom";

const GameOverStageTwo = () => {
  return (
    <div>
      <h1 className="title">Game Over</h1>
      {/*  */}
      <div className="container">
        <Jumbotron className="intro-jumbo">
          <p>
            The Wizard knows of the Junipers Swords power. He thinks of the opposite 
            door to walk into & vanishes, leading you into the right door where a hundred demons 
            take you to your death.  
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

export default GameOverStageTwo;