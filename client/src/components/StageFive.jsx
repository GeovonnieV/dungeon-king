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
    if (userAnswer === "wing") {
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
          <h1 className="intro-head">Hippogriff</h1>
          {/* qusetion */}
          <p>
            In comes a soaring Hippogriff, with claws as big as a small house. It picks 
            you up with only your arms free of its grip. Sword still in hand you are left 2 decisions. 
          </p>
          {/* user selection */}
          <form onSubmit={checkAnswer}>
            <div className="answer-div">
              {/* answer one  */}
              <input
                type="radio"
                id="feet"
                value="feet"
                style={{ color: "black" }}
                onClick={getAnswerValue}
              />
              <label for="kill">Cut feet and become free of grip</label>
              <br></br>
              {/* answer two */}
              <input
                type="radio"
                id="wing"
                value="wing"
                style={{ color: "black" }}
                onClick={getAnswerValue}
              />
              <label for="grab">Cut wing to stop flight</label>
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