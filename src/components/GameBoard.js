import React from 'react';
import Players from './Players';
import Score from './Score';

const GameBoard = () => {
  return (
    <React.Fragment>
      {/* player block section  */}
      <Players />
      {/* score section */}
      <Score />
    </React.Fragment>
  );
};

export default GameBoard;
