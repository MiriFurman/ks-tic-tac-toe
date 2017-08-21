import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import Board from './Board';

describe('Board', () => {
  let wrapper;

  afterEach(() => wrapper.detach());

  it('should have "X" and "O" clicked interchangeably', () => {
    wrapper = mount(
      <Board/>, {attachTo: document.createElement('div')}
    );
    wrapper.find('[data-hook="board-cell"]').at(0).simulate('click');
    expect(wrapper.find('[data-hook="board-cell"]').at(0).text()).to.equal('X');
    wrapper.find('[data-hook="board-cell"]').at(1).simulate('click');
    expect(wrapper.find('[data-hook="board-cell"]').at(1).text()).to.equal('O');
  });
});