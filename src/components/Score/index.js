import React, { useContext } from 'react';

import HeaderBar from '../HeaderBar';
import {
  PlayerTitle,
  ItemHeading,
  ItemQty,
  ItemScore,
  StartNewGame
} from '../../Constants';
import Footer from './Footer';
import WineerBlock from './WineerBlock';
import { CounterContext } from '../../reducer';
import { TabelHead, Trigger, ScoreBlock } from './styles';
import { Column } from '../../styles';
import { NewGame } from '../../Constants';

const Score = () => {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <Column span="4">
      <ScoreBlock>
        <HeaderBar title={PlayerTitle} />
        <TabelHead>
          <Column span="4">{ItemHeading}</Column>
          <Column span="4">{ItemQty}</Column>
          <Column span="4">{ItemScore}</Column>
        </TabelHead>

        {state &&
          state.items &&
          Object.keys(state.items).map(function(key) {
            return (
              // add new winner block if not present or update the previous one
              <WineerBlock
                key={state.items[key].price + state.items[key].game}
                data={state.items[key]}
              />
            );
          })}
        <Footer />
        <Trigger onClick={() => dispatch({ type: StartNewGame })}>
          {NewGame}
        </Trigger>
      </ScoreBlock>
    </Column>
  );
};

export default Score;
