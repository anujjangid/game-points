import styled from 'styled-components';

export const Header = styled.header`
  color: white;
  background: #8acdd2;
  box-sizing: border-box;
  h4 {
    @media only screen and (min-width: 768px) {
      font-size: 24px;
    }
    font-size: 13px;
    font-weight: 400;
    padding: 20px;
    text-transform: uppercase;
  }
`;
