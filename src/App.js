import React from 'react';
import { BG, Row, GlobalStyle } from './styles';

import GameBoard from './components/GameBoard';

import { CounterProvider } from './reducer';

function App() {
  return (
    <BG>
      <Row>
        <CounterProvider>
          <GameBoard />
        </CounterProvider>
        <GlobalStyle />
      </Row>
    </BG>
  );
}

export default App;
