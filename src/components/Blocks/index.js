import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CounterContext } from '../../reducer';
import { Wrapper, Block } from './styles';

const Blocks = props => {
  const { dispatch } = useContext(CounterContext);
  const { data } = props;

  return (
    <Wrapper>
      {data.map((item, index) => {
        return (
          <Block key={index} onClick={() => dispatch({ type: item.game })}>
            {item.game}
          </Block>
        );
      })}
    </Wrapper>
  );
};

export default Blocks;

Blocks.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      bonus: PropTypes.number,
      bonusNumber: PropTypes.number,
      game: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    })
  )
};
