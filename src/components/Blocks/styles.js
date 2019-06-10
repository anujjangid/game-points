import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 20px 10px;
  flex-direction: column;

  align-items: center;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  padding: 20px;
  border: 5px solid #ab3c3c;
  background: #f8f9e1;
  box-sizing: border-box;
  border-radius: 10px;
  color: #ab3c3c;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.5s ease;
  margin-top: 20px;

  @media only screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
    margin-top: 0px;
    font-size: 24px;
  }
  &:hover {
    font-size: 28px;
    border-color: black;
    color: #000;
    @media only screen and (min-width: 768px) {
      font-size: 48px;
    }
  }
`;
