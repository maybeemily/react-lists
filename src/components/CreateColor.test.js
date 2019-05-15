import React from 'react';
import { shallow } from 'enzyme';
import CreateColor from './CreateColor';

describe('Create Color test', () => {
  it('renders Create Color', () => {
    const wrapper = shallow(<CreateColor />);
    expect(wrapper).toMatchSnapshot();
  });
});
