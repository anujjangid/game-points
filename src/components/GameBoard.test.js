import React from 'react';
import { shallow } from 'enzyme';

import GameBoard from './GameBoard';

describe('Test suite for GameBoard Component', () => {
  // create a UI snapshot to indentify UI changes or design regressions
  const component = shallow(<GameBoard />);
  it('render correctly text component', () => {
    expect(component).toMatchSnapshot();
  });
  it('should render one div', () => {
    expect(component.find('div')).toHaveLength(0);
  });
});
