import React from 'react';

import { create } from 'react-test-renderer';

import HeaderBar from '../index';

describe('Test suite for HeaderBar Component', () => {
  // create a UI snapshot to indentify UI changes or design regressions
  it('render correctly', () => {
    const component = create(<HeaderBar />);
    expect(component.toJSON()).toMatchSnapshot();
    const rootInstance = component.root;

    const Heading = rootInstance.findByType('h4');
    expect(Heading.props.children).toBe('Test');
  });
});
