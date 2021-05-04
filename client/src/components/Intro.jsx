import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import {Link, Router} from "@reach/router";

const Intro = () => {
  return (
    <div>
      <h1 className="title">Dungeon King</h1>
      {/*  */}
      <div className="container">
        <Jumbotron className="intro-jumbo">
          <h1 className="intro-head">Escape the Dungeon</h1>
          <p>
            This is a simple hero game, you are Tavious a warrior whos team was
            annihilated during battle in Devils Dungeon. Make it through the 10
            stages to escape, but beware of your choices for it may be your
            last.
          </p>
          <p>
            <Link to="/stage-one">
              <Button variant="primary" className="start-btn">
                Start
              </Button>
            </Link>
          </p>
        </Jumbotron>
      </div>
    </div>
  );
};

export default Intro;
