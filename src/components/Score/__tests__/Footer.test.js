import React from 'react';
import { create } from 'react-test-renderer';
import Footer from '../Footer';

const props = {
  data: { price: 10, game: 'A', count: 1 }
};
describe('Test suite for Score Component', () => {
  // create a UI snapshot to indentify UI changes or design regressions

  it('render correctly', () => {
    const component = create(<Footer {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
    const rootInstance = component.root;
    // check heading
    const FooterItems = rootInstance.findByType('footer');
    expect(FooterItems.props.children).toHaveLength(2);
  });
});
