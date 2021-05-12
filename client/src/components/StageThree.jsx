import React, { useState } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const StageThree = () => {
  let history = useHistory();

  // State
  const [userAnswer, setUserAnswer] = useState("");

  const getAnswerValue = (e) => {
    setUserAnswer(e.target.value);
  };

  const checkAnswer = (e) => {
    e.preventDefault();
    if (userAnswer === "slay") {
      alert("heyooo");
    } else {
      history.push("/game-over-stage-two");
    }
  };

  // JSX
  return (
    <div>
      <h1 className="title">Stage Two</h1>
      {/*  */}
      <div className="container">
        <Jumbotron className="intro-jumbo">
          <h1 className="intro-head">Hippogriff</h1>
          {/* qusetion */}
          <p>
           The Juniper Sword gave you the power to read minds. You aproach 2 doors guarded by a tall elder wizard.
           He shoots a mystic ball, barley dodigng it you get close enough to the wizard.
          </p>
          {/* user selection */}
          <form onSubmit={checkAnswer}>
            <div className="answer-div">
              {/* answer one  */}
              <input
                type="radio"
                id="slay"
                value="slay"
                style={{ color: "black" }}
                onClick={getAnswerValue}
              />
              <label for="kill">Slay him with the Juniper Sword and walk in the left door</label>
              <br></br>
              {/* answer two */}
              <input
                type="radio"
                id="grab"
                value="grab"
                style={{ color: "black" }}
                onClick={getAnswerValue}
              />
              <label for="grab">Grab him and try to read his mind</label>
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

export default StageThree;
