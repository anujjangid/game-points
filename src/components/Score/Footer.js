import React, { useContext } from 'react';

import { getBonus, getTotal } from '../../utils';
import { BonusText, TotalText } from '../../Constants';
import { CounterContext } from '../../reducer';
import { ScoreFooter, ScoreItem } from './styles';

const Footer = props => {
  const { state } = useContext(CounterContext);

  return (
    <ScoreFooter>
      <ScoreItem>
        <span>{BonusText}</span>
        <span>{(state && state.items && getBonus(state.items)) || 0}</span>
      </ScoreItem>
      <ScoreItem>
        <span>{TotalText}</span>
        <span>{(state && state.items && getTotal(state.items)) || 0}</span>
      </ScoreItem>
    </ScoreFooter>
  );
};

export default Footer;
