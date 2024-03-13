import axios from 'axios';

const request = axios.create({ baseURL: 'https://api.coingecko.com/api/v3' });

export const getPrice = async () =>
  await request('/simple/price?ids=injective-protocol&vs_currencies=usd')?.then(
    data => data.data,
  );
