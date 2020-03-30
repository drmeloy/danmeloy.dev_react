import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';

describe('Contact component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper).toMatchSnapshot();
  });
});
