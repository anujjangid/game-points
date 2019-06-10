import React from 'react';
import { create } from 'react-test-renderer';
import Score from '../index';

describe('Test suite for Score Component', () => {
  // create a UI snapshot to indentify UI changes or design regressions

  it('render correctly', () => {
    const component = create(<Score />);
    expect(component.toJSON()).toMatchSnapshot();
    const rootInstance = component.root;
    // check heading
    const Heading = rootInstance.findByType('h4');
    expect(Heading.props.children).toBe('PLAYERS ITEMS');
  });
});
