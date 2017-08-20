import {expect} from 'chai';
import axios from 'axios';
import {beforeAndAfter, app} from '../environment';
import {baseURL} from '../test-common';
import {wixAxiosInstanceConfig} from 'wix-axios-config';

const axiosInstance = wixAxiosInstanceConfig(axios, {
  baseURL,
  adapter: require('axios/lib/adapters/http'),
});

describe('When rendering', () => {
  beforeAndAfter();

  it('should save calcs', async () => {
    const url = app.getUrl('/api/calcs');
    await axiosInstance.post(url, {calc: '5'});
    const response = await axiosInstance.get(url);

    expect(response.data).to.eql(['5']);
  });
});
