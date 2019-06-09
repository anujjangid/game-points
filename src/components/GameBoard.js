import React from 'react';
import Players from './Players';
import Score from './Score';

const GameBoard = () => {
  return (
    <React.Fragment>
      <Players />
      <Score />
    </React.Fragment>
  );
};

export default GameBoard;
