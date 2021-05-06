import React, {useState} from "react";
import { Jumbotron, Button } from "react-bootstrap";
import {useHistory} from "react-router-dom";

const StageOne = () => {

  let history = useHistory();

  // State
  const [userAnswer, setUserAnswer] = useState(""); 

 const getAnswerValue = (e) => {
    setUserAnswer(e.target.value)
  };

 const checkAnswer = (e) => {
   e.preventDefault()
   if(userAnswer === "juniper sword"){
      alert("yay")
   }else{
      history.push("/")
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
            A warrior is as great as his sword. You walk into a room that appears to be one of a black smiths.

          </p>
          {/* user selection */}
          <form >
            <input
              type="radio"
              id="age1"
              name="age"
              value="30"
              style={{ color: "black" }}
              onClick={getAnswerValue}
            />
            <label for="age1">0 - 30</label>
            <br></br>
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
