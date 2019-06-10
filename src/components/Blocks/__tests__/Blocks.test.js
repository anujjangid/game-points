import React from 'react';
import { create } from 'react-test-renderer';
import { Points } from '../../../Constants';
import Blocks from '../index';

describe('Test suite for Blocks Component', () => {
  // create a UI snapshot to indentify UI changes or design regressions
  it('render correctly', () => {
    const component = create(<Blocks data={Points} />);
    expect(component.toJSON()).toMatchSnapshot();
    const rootInstance = component.root;
    const Block = rootInstance.findByType('section');
    expect(Block.props.children).toHaveLength(5);
  });
});
