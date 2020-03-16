import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

describe('About component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<About />);
    expect(wrapper).toMatchSnapshot();
  });
});
