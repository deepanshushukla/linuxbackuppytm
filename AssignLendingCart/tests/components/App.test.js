import React from 'react';
import { shallow } from 'enzyme';
import App from '../../app/components/App';
import configData from '../config/configData';

describe('App Component', () => {
  let wrapper;
  let {rulesFunctions} =configData;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });
});