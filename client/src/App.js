import React from "react";
import "./styles/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {Jumbotron, Button} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <h1 className="title">Dungeon King</h1>
      {/*  */}
      <div className="container">
      <Jumbotron>
        <h1 className="intro-head">Escape the Dungeon</h1>
        <p>
          This is a simple hero game, you are Tavious a 
        </p>
        <p>
          <Button variant="primary">Start</Button>
        </p>
      </Jumbotron>

      </div>
    </div>
  );
}

export default App;
