import React from 'react';
import { shallow } from 'enzyme';
import Colors from './Colors';

describe('Colors component', () => {
  it('renders the colors component', () => {
    const colorsArray = [
      { name: 'blue', hex: '#0000FF' },
      { name: 'hotpink', hex: '#FF69B4' }
    ];
    const wrapper = shallow(<Colors colors={ colorsArray } />);
    expect(wrapper).toMatchSnapshot();
  });
});
