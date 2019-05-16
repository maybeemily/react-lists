import React from 'react';
import { shallow } from 'enzyme';
import Photo from './Photo';

describe('Photo Component', () => {
  it('renders a photo', () => {
    const wrapper = shallow(<Photo photo="/path"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
