import 'babel-polyfill';
import {expect} from 'chai';
import {beforeAndAfter, app} from './../environment';

describe('React application', () => {

  beforeAndAfter();

  it('should start a new game', async () => {
    const player1 = 'Shilo';
    const player2 = 'Omri';
    await browser.get(app.getUrl('/'));
    await $('[data-hook="player1-input"]').sendKeys(player1);
    await $('[data-hook="player2-input"]').sendKeys(player2);
    await $('[data-hook="start-game"]').click();
    expect(await $('[data-hook="player1"]').getText()).to.equal(player1);
    expect(await $('[data-hook="player2"]').getText()).to.equal(player2);
  });

  it('should show "X" after clicking on first cell', async () => {
    const player1 = 'Shilo';
    const player2 = 'Omri';
    await browser.get(app.getUrl('/'));
    await $('[data-hook="player1-input"]').sendKeys(player1);
    await $('[data-hook="player2-input"]').sendKeys(player2);
    expect(await $$('[data-hook="board-cell"]').get(0).getText()).to.equal('');
    await $('[data-hook="start-game"]').click();
    await $$('[data-hook="board-cell"]').get(0).click();
    expect(await $$('[data-hook="board-cell"]').get(0).getText()).to.equal('X');
  });
});
