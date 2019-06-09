import React from 'react';
import HeaderBar from '../HeaderBar';
import Blocks from '../Blocks';
import { Points, KahootTitle } from '../../Constants';

import { Column } from '../../styles';

const Players = props => {
  return (
    <Column span="8">
      <HeaderBar title={KahootTitle} />
      <Blocks data={Points} />
    </Column>
  );
};

export default Players;
