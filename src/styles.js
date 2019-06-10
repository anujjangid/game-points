import styled, { createGlobalStyle } from 'styled-components';

export const BG = styled.div`
  background: #d3d4da;
  padding: 20px;
  height: 100vh;
  box-sizing: border-box;
  @media only screen and (min-width: 768px) {
  }
`;

export const Row = styled.div`
  background: #fff;
  display: flex;
  flex-direction: row;
  height: 100%;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }

  &::after {
    content: '';
    clear: both;
    display: table;
  }
`;

// custom column grid system
export const Column = styled.div`
  float: left;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: ${props => (props.span ? (props.span / 12) * 100 : '8.33')}%;
  }
`;

// global reset style
export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    line-height:20px
  }
`;
