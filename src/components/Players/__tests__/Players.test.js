import React from 'react';
import { create } from 'react-test-renderer';

import Players from '../index';

const props = {
  data: []
};

describe('Test suite for Players Component', () => {
  // create a UI snapshot to indentify UI changes or design regressions
  it('render correctly', () => {
    const component = create(<Players data={props} />);
    expect(component.toJSON()).toMatchSnapshot();
    const rootInstance = component.root;
    // check heading
    const Heading = rootInstance.findByType('h4');
    expect(Heading.props.children).toBe('Kahoot! POINTS');
    // finding div length
    const Block = rootInstance.findByType('section');
    expect(Block.props.children).toHaveLength(5);
  });
});
