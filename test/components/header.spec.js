import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { MemoryRouter } from 'react-router';

import { Header } from '../../src/components/header';

describe('<Header />', () => {
  it('renders to the screen', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(wrapper.exists()).to.be.true;
  });

  describe('When not authenticated', () => {
    it('renders signin link', () => {
      const route = '/signin';
      const wrapper = mount(
        <MemoryRouter>
          <Header authenticated={false} />
        </MemoryRouter>
      );
      expect(wrapper.find(`a[href="${route}"]`)).to.have.lengthOf(1);
    });

    it('renders signup link', () => {
      const route = '/signup';
      const wrapper = mount(
        <MemoryRouter>
          <Header authenticated={false} />
        </MemoryRouter>
      );
      expect(wrapper.find(`a[href="${route}"]`)).to.have.lengthOf(1);
    });

    it('should not render volunteer link', () => {
      const route = '/volunteer';
      const wrapper = mount(
        <MemoryRouter>
          <Header authenticated={false} />
        </MemoryRouter>
      );
      expect(wrapper.find(`a[href="${route}"]`)).to.have.lengthOf(0);
    });

    it('should not render my impact link', () => {
      const route = '/my-impact';
      const wrapper = mount(
        <MemoryRouter>
          <Header authenticated={false} />
        </MemoryRouter>
      );
      expect(wrapper.find(`a[href="${route}"]`)).to.have.lengthOf(0);
    });

    it('should not render signout link', () => {
      const route = '/signout';
      const wrapper = mount(
        <MemoryRouter>
          <Header authenticated={false} />
        </MemoryRouter>
      );
      expect(wrapper.find(`a[href="${route}"]`)).to.have.lengthOf(0);
    });
  });

  describe('When authenticated', () => {
    it('renders volunteer link', () => {
      const route = '/volunteer';
      const wrapper = mount(
        <MemoryRouter>
          <Header authenticated={true} />
        </MemoryRouter>
      );
      expect(wrapper.find(`a[href="${route}"]`)).to.have.lengthOf(1);
    });

    it('renders my impact link', () => {
      const route = '/my-impact';
      const wrapper = mount(
        <MemoryRouter>
          <Header authenticated={true} />
        </MemoryRouter>
      );
      expect(wrapper.find(`a[href="${route}"]`)).to.have.lengthOf(1);
    });

    it('renders signout link', () => {
      const route = '/signout';
      const wrapper = mount(
        <MemoryRouter>
          <Header authenticated={true} />
        </MemoryRouter>
      );
      expect(wrapper.find(`a[href="${route}"]`)).to.have.lengthOf(1);
    });

    it('should not render signin link', () => {
      const route = '/signin';
      const wrapper = mount(
        <MemoryRouter>
          <Header authenticated={true} />
        </MemoryRouter>
      );
      expect(wrapper.find(`a[href="${route}"]`)).to.have.lengthOf(0);
    });

    it('should not render signup link', () => {
      const route = '/signup';
      const wrapper = mount(
        <MemoryRouter>
          <Header authenticated={true} />
        </MemoryRouter>
      );
      expect(wrapper.find(`a[href="${route}"]`)).to.have.lengthOf(0);
    });
  });
});
