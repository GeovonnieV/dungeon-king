import React, { useState } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Stagefour = () => {
  let history = useHistory();

  // State
  const [userAnswer, setUserAnswer] = useState("");

  const getAnswerValue = (e) => {
    setUserAnswer(e.target.value);
  };

  const checkAnswer = (e) => {
    e.preventDefault();
    if (userAnswer === "blast") {
      history.push("/stage-five");
    } else {
      history.push("/game-over-stage-four");
    }
  };

  // JSX
  return (
    <div>
      <h1 className="title">Stage Four</h1>
      {/*  */}
      <div className="container">
        <Jumbotron className="intro-jumbo">
          <h1 className="intro-head">Potions</h1>
          {/* qusetion */}
          <p>
            Select from the following potions. Healing potion will cure you of current wounds, 
            blast potion is good for a one time blast that will destroy any material infront of it, fire potion will 
            keep the juniper sword a flame for 24hours. Choose wisley only one will help with the next stage.
          </p>
          {/* user selection */}
          <form onSubmit={checkAnswer}>
            <div className="answer-div">
              {/* answer one  */}
              <input
                type="radio"
                id="Heal"
                value="heal"
                style={{ color: "black" }}
                onClick={getAnswerValue}
              />
              <label for="heal">Heal potion</label>
              <br></br>
              {/* answer two */}
              <input
                type="radio"
                id="blast"
                value="blast"
                style={{ color: "black" }}
                onClick={getAnswerValue}
              />
              <label for="blast">Blast potion</label>
              <br></br>
              {/* answer three */}
              <input
                type="radio"
                id="fire"
                value="fire"
                style={{ color: "black" }}
                onClick={getAnswerValue}
              />
              <label for="fire">Fire potion</label>
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

export default Stagefour;