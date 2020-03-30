import React from 'react';
import { shallow } from 'enzyme';
import Work from './Work';

describe('Work component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Work />);
    expect(wrapper).toMatchSnapshot();
  });
});
