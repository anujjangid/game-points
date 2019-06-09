import React, { useContext } from 'react';
import { getBonus, getTotal } from '../../utils';
import { CounterContext } from '../../reducer';
import { ScoreFooter, ScoreItem } from './styles';

const Footer = props => {
  const { state } = useContext(CounterContext);

  return (
    <ScoreFooter>
      <ScoreItem>
        <span>Bonus</span>
        <span>{(state && state.items && getBonus(state.items)) || 0}</span>
      </ScoreItem>
      <ScoreItem>
        <span>Total</span>
        <span>{(state && state.items && getTotal(state.items)) || 0}</span>
      </ScoreItem>
    </ScoreFooter>
  );
};

export default Footer;
