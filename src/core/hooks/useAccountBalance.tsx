import { ChainGrpcBankApi } from '@injectivelabs/sdk-ts';
import { getNetworkEndpoints, Network } from '@injectivelabs/networks';
import useSWR from 'swr';

import { useAccountState } from '../states/account';
import { useEffect } from 'react';

const endpoints = getNetworkEndpoints(Network.Testnet);
const chainGrpcBankApi = new ChainGrpcBankApi(endpoints.grpc);

export const useAccountBalance = () => {
  const { account } = useAccountState();

  const getBalance = async () => {
    try {
      const balances = await chainGrpcBankApi.fetchBalances(account);

      return (
        Number(
          balances?.balances.find(balance => balance?.denom === 'inj')?.amount,
        ) /
        10 ** 18
      );
    } catch (e) {
      return 0;
    }
  };

  const { data, mutate } = useSWR('account-balance', getBalance);

  useEffect(() => {
    if (account) {
      mutate();
    }
  }, [account, mutate]);

  return {
    balance: data?.toFixed(2),
  };
};
