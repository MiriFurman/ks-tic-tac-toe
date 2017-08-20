import 'babel-polyfill';
import {expect} from 'chai';
import {beforeAndAfter, app} from './../environment';

const navigate = (url = '/') => browser.get(app.getUrl(url));
const enterText = val => $('[data-hook="inputVal"]').clear().sendKeys(val);
const plus = () => $('.plus').click();
const equal = () => $('.equal').click();
const getInputValue = () => $('[data-hook="inputVal"]').getAttribute('value');

describe('React application', () => {

  beforeAndAfter();

  it('should add two numbers', async () => {
    await navigate();
    await enterText('2');
    await plus();
    await enterText('2');
    await equal();
    expect(await getInputValue()).to.equal('4');
  });
});
