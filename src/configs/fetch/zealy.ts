import { ZEALY_API, ZEALY_KEY } from '@/core/utils/constants';
import axios from 'axios';

export const zealyApi = axios.create({
  baseURL: `${ZEALY_API}`,
  headers: {
    'X-Api-Key': ZEALY_KEY,
  },
});
