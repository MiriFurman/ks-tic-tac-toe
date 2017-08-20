import 'babel-polyfill';
import {expect} from 'chai';
import {ExpectedConditions} from 'protractor';
import {beforeAndAfter, app} from './../environment';

const navigate = (url = '/') => browser.get(app.getUrl(url));
const enterText = val => $('[data-hook="inputVal"]').clear().sendKeys(val);
const plus = () => $('[data-hook="plus"]').click();
const equal = () => $('[data-hook="equal"]').click();
const getInputValue = () => $('[data-hook="inputVal"]').getAttribute('value');
const save = () => $('[data-hook="save"]').click();

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

  it('should save value', async () => {
    await navigate();
    await enterText('2');
    await plus();
    await enterText('2');
    await equal();
    await save();
    await navigate();
    await browser.wait(ExpectedConditions.presenceOf($('[data-hook=savedValue]')));
    expect(await $$('[data-hook=savedValue]').map(el => el.getText())).to.eql(['4']);
  });
});
