import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color component', () => {
  it('renders a color', () => {
    const wrapper = shallow(<Color name="blue" hex="#0000FF"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
