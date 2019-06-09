import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 10px;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  padding: 20px;
  border: 5px solid #ab3c3c;
  background: #f8f9e1;
  box-sizing: border-box;
  border-radius: 10px;
  color: #ab3c3c;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.5s ease;
  @media only screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
  &:hover {
    font-size: 48px;
    border-color: black;
    color: #000;
  }
`;
