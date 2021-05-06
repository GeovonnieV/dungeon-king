import React from "react";

const GameOverStageOne = () => {
  return (
    <div>
      <h1 className="title">Game Over</h1>
      {/*  */}
      <div className="container">
        <Jumbotron className="intro-jumbo">
          <h1 className="intro-head">Escape the Dungeon</h1>
          <p>
            Fate was not on your side.
          </p>
          <p>
            <Link to="/">
              <Button variant="primary" className="start-btn">
                Try Again
              </Button>
            </Link>
          </p>
        </Jumbotron>
      </div>
    </div>
  );
};

export default GameOverStageOne;
