import React from 'react';
import PropTypes from 'prop-types';

import { Column } from '../../styles';
import { List } from './styles';

const WineerBlock = props => {
  const {
    data: { price, game, count }
  } = props;

  return (
    <React.Fragment>
      <List key={price + game}>
        <Column span="4">{game}</Column>
        <Column span="4">{count}</Column>
        <Column span="4">{price}</Column>
      </List>
    </React.Fragment>
  );
};

export default WineerBlock;

WineerBlock.propTypes = {
  data: PropTypes.shape({
    bonus: PropTypes.number,
    count: PropTypes.number.isRequired,
    game: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })
};
