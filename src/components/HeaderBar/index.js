import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  color: white;
  background: #8acdd2;
  box-sizing: border-box;
  h4 {
    @media only screen and (min-width: 768px) {
      font-size: 24px;
    }
    font-size: 14px;
    font-weight: 400;
    padding: 20px;
    text-transform: uppercase;
  }
`;

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
