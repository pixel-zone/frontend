import useSWR from 'swr';

import { getPrice } from '../services/coingecko';

export const usePrice = () => {
  const getPriceINJ = async () => {
    try {
      const price = await getPrice();

      return (price?.['injective-protocol']?.usd || 0) as number;
    } catch (e) {
      return;
    }
  };

  const { data: price } = useSWR('price-inj', getPriceINJ);

  return { price };
};
