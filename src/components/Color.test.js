import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color component', () => {
  it('renders a color', () => {
    const testColor = { name: 'hotpink', hex: '#FF69B4', rgb: '(255,105,180)' };
    const wrapper = shallow(<Color name={testColor.name} hex={testColor.hex} rgb={testColor.rgb} />);
    expect(wrapper).toMatchSnapshot();
  });
});
