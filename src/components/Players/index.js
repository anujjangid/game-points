import React from 'react';

import HeaderBar from '../HeaderBar';
import Blocks from '../Blocks';
import { Points, KahootTitle } from '../../Constants';

import { Column } from '../../styles';

const Players = () => {
  return (
    <Column span="8">
      {/* Header bar */}
      <HeaderBar title={KahootTitle} />
      {/* player blocks coming from constants */}
      <Blocks data={Points} />
    </Column>
  );
};

export default Players;
