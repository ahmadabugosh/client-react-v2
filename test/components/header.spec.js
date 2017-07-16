import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { Header } from '../../src/components/header';

describe('<Header />', () => {
  it('renders to the screen', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).to.be.true;
  });
});

