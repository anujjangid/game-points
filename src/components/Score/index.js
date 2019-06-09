import React, { useContext } from 'react';
import HeaderBar from '../HeaderBar';
import { PlayerTitle, ItemHeading, ItemQty, ItemScore } from '../../Constants';
import Footer from './Footer';
import { CounterContext } from '../../reducer';
import { TabelHead, List, Trigger, ScoreBlock } from './styles';
import { Column } from '../../styles';

const Score = props => {
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
              <List key={state.items[key].price + state.items[key].game}>
                <Column span="4">{state.items[key].game}</Column>
                <Column span="4">{state.items[key].count}</Column>
                <Column span="4">{state.items[key].price}</Column>
              </List>
            );
          })}
        <Footer />
        <Trigger onClick={() => dispatch({ type: 'reset' })}>Clear</Trigger>
      </ScoreBlock>
    </Column>
  );
};

export default Score;
