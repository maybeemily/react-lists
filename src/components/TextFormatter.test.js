import React from 'react';
import { shallow } from 'enzyme';
import TextFormatter from './TextFormatter';

describe('Textformatter', () => {
  it('renders text with text formatter', () => {
    const wrapper = shallow(<TextFormatter />);
    expect(wrapper).toMatchSnapshot();
  });
});
