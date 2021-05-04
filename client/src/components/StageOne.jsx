import React, {useState} from "react";
import { Jumbotron, Button } from "react-bootstrap";

const StageOne = () => {

  // State
  const [userAnswer, setUserAnswer] = useState(""); 

 const getAnswerValue = (e) => {
    setUserAnswer(e.target.value)
  };

 const checkAnswer = () => {
   if(userAnswer === "juniper sword"){
      alert("yay")
   }else{
     alert("done")
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
          <p>which on is the wizard</p>
          {/* user selection */}
          <form onSubmit={checkAnswer}>
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
