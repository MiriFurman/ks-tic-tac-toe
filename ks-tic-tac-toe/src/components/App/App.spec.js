import React from 'react';
import {expect} from 'chai';
import nock from 'nock';
import {mount} from 'enzyme';
import {baseURL} from '../../../test/test-common';
import App from './App';
import eventually from 'wix-eventually';

let wrapper;
const clickCellAt = index => wrapper.find('[data-hook="board-cell"]').at(index).simulate('click');
const render = el => mount(
  el, {attachTo: document.createElement('div')}
);

describe('App', () => {

  afterEach(() => wrapper.detach());

  afterEach(() => {
    if (!nock.isDone()) {
      throw new Error(`pending mocks: ${nock.pendingMocks()}`);
    }
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('should show leaderboard', () => {
    nock(baseURL).get('/api/leaderboard')
      .reply(() => [{name: 'Shilo', score: 1}]);
    wrapper = render(<App/>);
    return eventually(() =>
      expect(wrapper.find('[data-hook="leader-name"]').at(0).text()).to.equal('Shilo: 1'));
  });

  it('Player 2 should be saved to leaderboard', () => {
    const player1 = 'Shilo';
    const player2 = 'Omri';

    nock(baseURL).get('/api/leaderboard')
      .reply(() => [{name: 'Shilo', score: 1}]);

    nock(baseURL).post('/api/leaderboard', {winner: player2}).reply(200);

    wrapper = render(<App/>);

    nock(baseURL).get('/api/leaderboard')
      .reply(() => [{name: 'Shilo', score: 1}, {name: 'Omri', score: 1}]);

    wrapper.find('[data-hook="player1-input"]').simulate('change', {target: {value: player1}});
    wrapper.find('[data-hook="player2-input"]').simulate('change', {target: {value: player2}});
    wrapper.find('[data-hook="start-game"]').simulate('click');
    clickCellAt(3);
    clickCellAt(0);
    clickCellAt(4);
    clickCellAt(1);
    clickCellAt(6);
    clickCellAt(2);
    return eventually(() => {
      expect(wrapper.find('[data-hook="leader-name"]').at(0).text()).to.equal('Shilo: 1');
      expect(wrapper.find('[data-hook="leader-name"]').at(1).text()).to.equal('Omri: 1');
    });
  });
});
