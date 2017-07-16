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
    // console.log(wrapper.find('Link[to = "/signin"]'))
    expect(wrapper.contains('Sign in') || wrapper.contains('Sign In') ).to.be.true;
    expect(wrapper.contains('Sign up') || wrapper.contains('Sign Up')).to.be.true;
    
    // expect(wrapper.contains('Sign in')).to.be.true;
  });

  it('should not render signup and signin links when authenticated', () => {
    const wrapper = shallow(<Header />);
    wrapper.setProps({ authenticated: true });
    // console.log(wrapper.find('Link[to = "/signin"]'))
    expect(wrapper.contains('Sign in') || wrapper.contains('Sign In')).to.be.false;
    expect(wrapper.contains('Sign up') || wrapper.contains('Sign Up')).to.be.false;

    // expect(wrapper.contains('Sign in')).to.be.true;
  });
});

