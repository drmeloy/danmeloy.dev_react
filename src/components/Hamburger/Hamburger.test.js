import React from 'react';
import { shallow } from 'enzyme';
import Hamburger from './Hamburger';

describe('Hamburger component', () => {
  it('matches snapshop', () => {
    const wrapper = shallow(<Hamburger />);
    expect(wrapper).toMatchSnapshot();
  });
});
