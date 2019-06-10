import React from 'react';
import { create } from 'react-test-renderer';
import WineerBlock from '../WineerBlock';

const props = {
  data: { price: 10, game: 'A', count: 1 }
};
describe('Test suite for Score Component', () => {
  // create a UI snapshot to indentify UI changes or design regressions

  it('render correctly', () => {
    const component = create(<WineerBlock {...props} />);
    // check if the componenet match with snapshot
    expect(component.toJSON()).toMatchSnapshot();
  });
});
