import useSWR from 'swr';
import { fromBase64, toBase64 } from '@injectivelabs/sdk-ts';

import { chainGrpcWasmApi } from '@/configs/wallet/injective/services';
import { IGeneralAnalytics } from '../entities/GeneralAnalytics';

import { CONTRACT_ADDRESS } from '../utils/constants';

export const useGeneralAnalytics = () => {
  const getGeneralAnalytics = async () => {
    try {
      const response = (await chainGrpcWasmApi.fetchSmartContractState(
        CONTRACT_ADDRESS!,
        toBase64({ get_general_analytics: {} }),
      )) as unknown as { data: string };

      const result = fromBase64(response.data) as IGeneralAnalytics;

      return result;
    } catch (e) {
      return;
    }
  };

  const { data } = useSWR('general-analytics', getGeneralAnalytics);

  return { data };
};
