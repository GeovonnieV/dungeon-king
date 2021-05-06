import React, { useState } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const StageOne = () => {
  let history = useHistory();

  // State
  const [userAnswer, setUserAnswer] = useState("");

  const getAnswerValue = (e) => {
    setUserAnswer(e.target.value);
  };

  const checkAnswer = (e) => {
    e.preventDefault();
    if (userAnswer === "juniper-sword") {
      alert("yay");
    } else {
      history.push("/");
    }
  };

  // JSX
  return (
    <div>
      <h1 className="title">Stage One</h1>
      {/*  */}
      <div className="container">
        <Jumbotron className="intro-jumbo">
          <h1 className="intro-head">The Weaponary</h1>
          {/* qusetion */}
          <p>
            A warrior is as great as his weapon. The Dungeons witch cast a spell on all but one of the follwing, 
            let fate decide if you advance to the next stage.
          </p>
          {/* user selection */}
          <form onSubmit={checkAnswer}>
            <div className="answer-div">
              {/* answer one  */}
              <input
                type="radio"
                id="lightning-sword"
                name="age"
                value="lightning-sword"
                style={{ color: "black" }}
                onClick={getAnswerValue}
              />
              <label for="lightning-sword">Lightning Sword</label>
              <br></br>
              {/* answer two */}
              <input
                type="radio"
                id="juniper-sword"
                name="age"
                value="juniper-sword"
                style={{ color: "black" }}
                onClick={getAnswerValue}
              />
              <label for="juniper-sword">Juniper Sword</label>
              <br></br>
              {/* answer three */}
              <input
                type="radio"
                id="earth-staff"
                name="age"
                value="earth-staff"
                style={{ color: "black" }}
                onClick={getAnswerValue}
              />
              <label for="earth-staff">Earth Staff</label>
              <br></br>
            </div>
            <Button variant="primary" type="submit" className="start-btn">
              Start
            </Button>
          </form>
          {/* user selection end */}
        </Jumbotron>
        {/*  */}
      </div>
    </div>
  );
};

export default StageOne;
