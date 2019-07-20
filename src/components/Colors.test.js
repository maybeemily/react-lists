import React from 'react';
import { shallow } from 'enzyme';
import Colors from './Colors';

describe('Colors component', () => {
  it('renders Colors', () => {
    const testColors = [
      { name: 'olive', hex: '#808000', rgb: '(0, 0, 128)' },
      { name: 'olivedrab', hex: '#6B8E23', rgb: '(128, 128, 0)' },
      { name: 'orange', hex: '#FFA500', rgb: '(107, 142, 35)' }
    ];
    const wrapper = shallow(<Colors colors={testColors} />);
    expect(wrapper).toMatchSnapshot();
  });
});
