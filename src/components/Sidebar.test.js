import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './Sidebar';

describe('Sidebar component', () => {
  it('renders a sidebar', () => {
    const wrapper = shallow(<Sidebar><p>test paragraph</p></Sidebar>);
    expect(wrapper).toMatchSnapshot();
  });
});
