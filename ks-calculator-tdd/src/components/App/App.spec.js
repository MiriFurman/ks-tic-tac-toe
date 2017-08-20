import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import App from './App';

let wrapper;
const changeText = text => wrapper.find('[data-hook="inputVal"]')
      .simulate('change', {target: {value: text}});
const minus = () => wrapper.find('[data-hook="minus"]').simulate('click');
const render = x => mount(
  x,
  {attachTo: document.createElement('div')}
);
const equal = () => wrapper.find('[data-hook="equal"]').simulate('click');
const getInputVal = () => wrapper.find('[data-hook="inputVal"]').get(0).value;

describe('App', () => {

  afterEach(() => wrapper.detach());

  it('should calculate "minus"', () => {
    wrapper = render(<App/>);
    changeText('5');
    minus();
    changeText('3');
    equal();
    expect(getInputVal()).to.equal('2');
  });
});
