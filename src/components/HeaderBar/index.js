import React from 'react';
import PropTypes from 'prop-types';

import { Header } from './styles';

const HeaderBar = ({ title }) => {
  return (
    <React.Fragment>
      <Header>
        <h4>{title}</h4>
      </Header>
    </React.Fragment>
  );
};

export default HeaderBar;

HeaderBar.propTypes = {
  title: PropTypes.string
};

HeaderBar.defaultProps = {
  title: 'Test'
};
