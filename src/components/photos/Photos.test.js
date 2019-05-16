import React from 'react';
import { shallow } from 'enzyme';
import Photos from './Photos';

describe('Photos component', () => {
  it('renders the photo component', () => {
    const photoArray = [
      '/img.jpg',
      './img2.jpg',
      './img3.jpg'
    ];
    const wrapper = shallow(<Photos photoArray={photoArray} />);
    expect(wrapper).toMatchSnapshot();
  });
});
