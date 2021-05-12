import React, { useState } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const StageFive = () => {
  let history = useHistory();

  // State
  const [userAnswer, setUserAnswer] = useState("");

  const getAnswerValue = (e) => {
    setUserAnswer(e.target.value);
  };

  const checkAnswer = (e) => {
    e.preventDefault();
    if (userAnswer === "mind") {
      history.push("/stage-four");
    } else {
      history.push("/game-over-stage-three");
    }
  };

  // JSX
  return (
    <div>
      <h1 className="title">Stage Five</h1>
      {/*  */}
      <div className="container">
        <Jumbotron className="intro-jumbo">
          <h1 className="intro-head">The Final Stage</h1>
          {/* qusetion */}
          <p>
             You made it to the final stage of the Devils Dungeon. You see in the distance a large gate 
             with no lever to prop it open. A warlock is the only thing between you and the gate. He is ready to stop 
             you at all cause what strategy will you use to break free?
          </p>
          {/* user selection */}
          <form onSubmit={checkAnswer}>
            <div className="answer-div">
              {/* answer one  */}
              <input
                type="radio"
                id="read"
                value="read"
                style={{ color: "black" }}
                onClick={getAnswerValue}
              />
              <label for="read">Read mind</label>
              <br></br>
              {/* answer two */}
              <input
                type="radio"
                id="blast"
                value="blast"
                style={{ color: "black" }}
                onClick={getAnswerValue}
              />
              <label for="blast">Use blast potion</label>
              <br></br>
            </div>
            <Button variant="primary" type="submit" className="start-btn">
              Select
            </Button>
          </form>
          {/* user selection end */}
        </Jumbotron>
        {/*  */}
      </div>
    </div>
  );
};

export default StageFive;