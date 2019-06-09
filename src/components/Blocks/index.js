import React, { useContext } from 'react';
import { CounterContext } from '../../reducer';
import { Wrapper, Block } from './styles';

const Blocks = props => {
  const { dispatch } = useContext(CounterContext);
  const { data } = props;

  return (
    <Wrapper>
      {data.map(item => {
        return (
          <Block key={item.name} onClick={() => dispatch({ type: item.game })}>
            {item.game}
          </Block>
        );
      })}
    </Wrapper>
  );
};

export default Blocks;
