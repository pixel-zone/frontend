import { useEffect, useState } from 'react';
import { BigNumberInBase, INJ_DENOM } from '@injectivelabs/utils';
import {
  MsgExecuteContractCompat,
  fromBase64,
  toBase64,
} from '@injectivelabs/sdk-ts';
import useSWR from 'swr';
import { useToast } from './useToast';
import { chainGrpcWasmApi } from '@/configs/wallet/injective/services';
import { msgBroadcastClient } from '@/configs/wallet/injective/msgBroadcastClient';

import { useAccountState } from '../states/account';
import { CONTRACT_ADDRESS } from '../utils/constants';

export const useWithdraw = () => {
  const { account } = useAccountState();
  const { toast } = useToast();

  const withdrawAsset = async () => {
    try {
      const newAccount = account;

      const msg = MsgExecuteContractCompat.fromJSON({
        contractAddress: CONTRACT_ADDRESS!,
        sender: newAccount,
        exec: {
          action: 'withdraw_rewards',
          msg: { denom: 'inj' },
        },
      });

      await msgBroadcastClient.broadcast({
        msgs: msg,
        injectiveAddress: account,
      });

      await getAvailableWithdraw();

      toast({ title: 'You have withdrawn successfully!', type: 'success' });
    } catch (e) {
      toast({ title: 'Error on withdraw', type: 'error' });
      return;
    }
  };

  const getAvailableWithdraw = async () =>
    // {
    //   coinDenom,
    // }: {
    //   coinDenom?: string;
    // }
    {
      const newAccount = account;

      try {
        const response = (await chainGrpcWasmApi.fetchSmartContractState(
          CONTRACT_ADDRESS!,
          toBase64({
            get_available_withdraw: { address: newAccount, denom: 'inj' },
          }),
        )) as unknown as { data: string };

        const result = (
          Number(fromBase64(response.data).available_withdraw.amount) /
          10 ** 18
        ).toFixed(3);

        return result;
      } catch (e) {
        return;
      }
    };

  const { data: availableWithdraw, mutate: mutateAvailableWithdraw } = useSWR(
    'availableWithdraw',
    getAvailableWithdraw,
  );

  useEffect(() => {
    if (account) {
      mutateAvailableWithdraw();
    }
  }, [account]);

  return { getAvailableWithdraw, data: availableWithdraw, withdrawAsset };
};
