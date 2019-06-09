import styled from 'styled-components';

export const TabelHead = styled.div`
  background: grey;
  display: flex;
  color: #fff;
  text-transform: uppercase;
  div {
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
  }
`;

export const List = styled.div`
  background: #b8d8bc;
  display: flex;
  color: #333;
  text-transform: uppercase;
  border-bottom: 1px solid #333;
  margin-bottom: 10px;
  border-top: 1px solid #333;
  div {
    padding: 12px;
    box-sizing: border-box;
    text-align: center;
    font-size: 22px;
  }
`;

export const ScoreFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: auto;
`;

export const ScoreItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 24px;
`;

export const Trigger = styled.button`
  font-size: 18px;
  cursor: pointer;
  border: none;
  padding: 10px;
  display: flex;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 100%;
  justify-content: center;
  transition: all 0.3s;
  background: #cb4e4e;
  color: #fff;
  box-shadow: 0 6px #ab3c3c;
  border-radius: 5px;
  margin: 10px 0 20px 0;
  &:hover {
    box-shadow: 0 4px #ab3c3c;
    top: 2px;
  }
`;

export const ScoreBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
`;
