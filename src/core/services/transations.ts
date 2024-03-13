import axios from 'axios';
import { CONTRACT_ADDRESS_MEME_COIN_FLIP, CONTRACT_ADDRESS_PVP } from '../utils/constants';

const request = axios.create({ baseURL: 'https://testnet.sentry.exchange.grpc-web.injective.network/api/explorer/v1' });

export const getTransationsPvp = async () =>
  await request(`/contractTxs/${CONTRACT_ADDRESS_PVP}?skip=0&limit=20`)?.then(
    data => data.data,
  );

export const getTransationsMemecoinFlip = async () =>
  await request(`/contractTxs/${CONTRACT_ADDRESS_MEME_COIN_FLIP}?skip=0&limit=20`)?.then(
    data => data.data,
  );