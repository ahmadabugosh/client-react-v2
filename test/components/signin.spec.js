import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import { Signin } from '../../src/components/auth/signin';

describe('<Signin />', () => {
  it('renders a form to the screen', () => {
    const fakeSubmitHandler = sinon.spy();
    const wrapper = shallow(<Signin handleSubmit={fakeSubmitHandler} />);
    expect(wrapper.find('form').exists()).to.be.true;
  });
});
