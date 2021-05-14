import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import {Link} from "react-router-dom";

const DungeonEscape = () => {
  return (
    <div>
      <h1 className="title">You Escaped</h1>
      {/*  */}
      <div className="container">
        <Jumbotron className="intro-jumbo">
          <p>
            You read the warlocks mind & know his every move. You outsmart and defeat the warlock using this 
            method. The dungeons gate still remains locked with no latch to open it. Using the blast potion 
            the door swings open without any 
          </p>
          <p>
            <Link to="/">
              <Button variant="primary" className="start-btn">
                Play Again
              </Button>
            </Link>
          </p>
        </Jumbotron>
      </div>
    </div>
  );
};

export default DungeonEscape;