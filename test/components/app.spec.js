import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../../src/components/app';

describe('<App />', () => {
  it('renders to the screen', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).to.be.true;
  });
});
