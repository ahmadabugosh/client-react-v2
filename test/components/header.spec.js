import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { Header } from '../../src/components/header';

describe('<Header />', () => {
  it('renders to the screen', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).to.be.true;
  });

  it('renders signup and signin links when not authenticated', () => {
    const wrapper = shallow(<Header />);
    wrapper.setProps({ authenticated: false });
    expect(wrapper.find('Link[to="/signin"]')).to.be.true;
    // expect(wrapper.contains('Sign in')).to.be.true;
  });
});

