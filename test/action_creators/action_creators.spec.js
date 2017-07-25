import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import configureStore from 'redux-mock-store';

import { beginLoading, endLoading, signinUser } from '../../src/actions/index';
import { BEGIN_LOADING, END_LOADING } from '../../src/actions/types';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('Action Creators', () => {
  let initialState = {};
  let store = mockStore(initialState);
  beforeEach(() => {
    initialState = {};
    store = mockStore(initialState);
  });

  describe('beginLoading', () => {
    it('creates expected action object', () => {
      // const initialState = {}
      // const store = mockStore(initialState)
      store.dispatch(beginLoading());
      const actions = store.getActions();
      const expectedPayload = { type: BEGIN_LOADING };
      expect(actions).to.eql([expectedPayload]);
    });
  });

  describe('endLoading', () => {
    it('creates expected action object', () => {
      // const initialState = {}
      // const store = mockStore(initialState)
      store.dispatch(endLoading());
      const actions = store.getActions();
      const expectedPayload = { type: END_LOADING };
      expect(actions).to.eql([expectedPayload]);
    });
  });

  // TODO: learn how to mock call to server
  describe('signinUser', () => {
    store.dispatch(endLoading(signinUser));
  });
});
