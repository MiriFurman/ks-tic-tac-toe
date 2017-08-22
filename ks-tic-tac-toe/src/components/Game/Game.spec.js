import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import Game from './Game';

let wrapper;
const clickCellAt = index => wrapper.find('[data-hook="board-cell"]').at(index).simulate('click');
const render = el => mount(
  el, {attachTo: document.createElement('div')}
);
const getWinnerMessageText = () => wrapper.find('[data-hook="winner-message"]').text();

describe('Game', () => {

  afterEach(() => wrapper.detach());

  it('Player 2 should win the game', () => {
    const player1 = 'player1';
    const player2 = 'player2';

    wrapper = render(<Game onGameWon={() => {}} player1={player1} player2={player2}/>);
    clickCellAt(3);
    clickCellAt(0);
    clickCellAt(4);
    clickCellAt(1);
    clickCellAt(6);
    clickCellAt(2);
    expect(getWinnerMessageText()).to.equal(`${player2} won!`);
  });
});
