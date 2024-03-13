import {
  IndexerGrpcExplorerApi,
  MsgExecuteContractCompat,
  fromBase64,
  toBase64,
} from '@injectivelabs/sdk-ts';
import { BigNumberInBase, INJ_DENOM } from '@injectivelabs/utils';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

import { IMemecoinFlip } from '../../entities/MemecoinFlip';
import { msgBroadcastClient } from '@/configs/wallet/injective/msgBroadcastClient';
import { chainGrpcWasmApi } from '@/configs/wallet/injective/services';

import { useAccountState } from '../../states/account';
import { useToast } from '../useToast';

import { CONTRACT_ADDRESS_MEME_COIN_FLIP } from '../../utils/constants';
import { useMemecoinFlipState } from '../../states/memecoinFlip';
import { useModal } from '../useModal';
import { useRouter } from 'next/router';
import { IUserInformations } from '../../entities/UserInformations';
import { ITransation } from '@/core/entities/Transation';
import { getTransationsMemecoinFlip } from '@/core/services/transations';
import { format } from './utils/format';

export const useMemecoinFlip = () => {
  const { memecoins, setMemecoins } = useMemecoinFlipState();
  const { account } = useAccountState();
  const { toast } = useToast();
  const { closeModal } = useModal();

  const { query } = useRouter();

  const referral = query?.referral;

  const oldContract = 'inj1g2y9j7473je68zgd4zp8pfmdz97n6qwajvjrja';

  const matchOpens = memecoins.filter(({ finished }) => !finished)?.length;

  const createMemecoinFlip = async (
    url = '',
    {
      arg,
    }: {
      arg: {
        amount: number;
        side: number;
      };
    },
  ) => {
    const { amount, side } = arg;

    try {
      const newAccount = account;

      const msg = MsgExecuteContractCompat.fromJSON({
        contractAddress: CONTRACT_ADDRESS_MEME_COIN_FLIP!,
        sender: newAccount,
        exec: {
          action: 'create_meme_coin_flip',
          msg: { denom: 'inj', creator_side: side, referral: referral || '' },
        },
        funds: {
          denom: INJ_DENOM,
          amount: new BigNumberInBase(amount).toWei().toFixed(),
        },
      });

      await msgBroadcastClient.broadcast({
        msgs: msg,
        injectiveAddress: account,
      });

      await getMemecoinFlip();

      closeModal();

      toast({
        title: 'Game created successfully!',
        type: 'success',
        delay: 5000,
      });

      return;
    } catch (e) {
      toast({ title: 'Error on trying to create the game', type: 'error' });
      return;
    }
  };

  const userInfos = async () => {
    try {
      const response = (await chainGrpcWasmApi.fetchSmartContractState(
        CONTRACT_ADDRESS_MEME_COIN_FLIP!,
        toBase64({ get_user_informations: { address: account } }),
      )) as unknown as { data: string };

      const result = fromBase64(response.data) as IUserInformations;

      return result?.user_informations;
    } catch (e) {
      return;
    }
  };

  const fightPvpBattles = async ({
    id,
    amount,
  }: {
    id: number;
    amount: number;
  }) => {
    try {
      const newAccount = account;

      const msg = MsgExecuteContractCompat.fromJSON({
        contractAddress: CONTRACT_ADDRESS_MEME_COIN_FLIP!,
        sender: newAccount,
        exec: {
          action: 'fight_meme_coin_flip',
          msg: { id, referral: referral || '' },
        },
        funds: {
          denom: INJ_DENOM,
          amount: new BigNumberInBase(amount).toWei().toFixed(),
        },
      });

      await msgBroadcastClient.broadcast({
        msgs: msg,
        injectiveAddress: account,
      });

      await Promise.all([await getMemecoinFlip(), await getUserInfos()]);

      toast({ title: 'You have played successfully!', type: 'success' });
    } catch (e) {
      toast({ title: 'Error on trying to play', type: 'error' });
      return;
    }
  };

  const getMemecoinFlip = async () => {
    try {
      const response = (await chainGrpcWasmApi.fetchSmartContractState(
        CONTRACT_ADDRESS_MEME_COIN_FLIP!,
        toBase64({ list_meme_coin_flip: { finished: false } }),
      )) as unknown as { data: string };

      const result = fromBase64(response.data)
        ?.list_meme_coin_flip as IMemecoinFlip[];

      const events: { data: ITransation[] } = await getTransationsMemecoinFlip();
      const eventsData = format({ data: events?.data }) as any[];

      setMemecoins([...result, ...eventsData]);

      return result;
    } catch (e) {
      return;
    }
  };

  const withDrawOld = async () => {
    try {
      const msg = MsgExecuteContractCompat.fromJSON({
        contractAddress: oldContract!,
        sender: account,
        exec: {
          action: 'withdraw_rewards',
          msg: { denom: 'inj' },
        },
      });

      await msgBroadcastClient.broadcast({
        msgs: msg,
        injectiveAddress: account,
      });

      return;
    } catch (e) {
      return toast({ title: 'Error to try widthdraw.', type: 'error' });
    }
  };

  const fightPvpBattlesOld = async ({
    id,
    amount,
  }: {
    id: number;
    amount: number;
  }) => {
    try {
      const newAccount = account;

      const msg = MsgExecuteContractCompat.fromJSON({
        contractAddress: oldContract!,
        sender: newAccount,
        exec: {
          action: 'fight_meme_coin_flip',
          msg: { id, referral: referral || '' },
        },
        funds: {
          denom: INJ_DENOM,
          amount: new BigNumberInBase(amount).toWei().toFixed(),
        },
      });

      await msgBroadcastClient.broadcast({
        msgs: msg,
        injectiveAddress: account,
      });

      await Promise.all([await getUserInfosOld()]);

      toast({ title: 'You have played successfully!', type: 'success' });
    } catch (e) {
      toast({ title: 'Error on trying to play', type: 'error' });
      return;
    }
  };

  const userInfosOld = async () => {
    try {
      const response = (await chainGrpcWasmApi.fetchSmartContractState(
        oldContract!,
        toBase64({ get_user_informations: { address: account } }),
      )) as unknown as { data: string };

      const result = fromBase64(response.data) as IUserInformations;

      return result?.user_informations;
    } catch (e) {
      return;
    }
  };

  const { data: userOld, mutate: getUserInfosOld } = useSWR(
    'memecoin-flip-users-old',
    userInfosOld,
  );

  const withdrawBalanceOld =
    Number(
      userOld?.available_withdraw?.find(({ denom }) => denom === 'inj')
        ?.amount || 0,
    ) /
    10 ** 18;

  const withDraw = async () => {
    try {
      const msg = MsgExecuteContractCompat.fromJSON({
        contractAddress: CONTRACT_ADDRESS_MEME_COIN_FLIP!,
        sender: account,
        exec: {
          action: 'withdraw_rewards',
          msg: { denom: 'inj' },
        },
      });

      await msgBroadcastClient.broadcast({
        msgs: msg,
        injectiveAddress: account,
      });

      return;
    } catch (e) {
      return toast({ title: 'Error to try widthdraw.', type: 'error' });
    }
  };

  const cancelMemecoinFlip = async (url = '', { arg }: { arg: { id: number } }) => {
    try {
      const { id } = arg;

      const msg = MsgExecuteContractCompat.fromJSON({
        contractAddress: CONTRACT_ADDRESS_MEME_COIN_FLIP!,
        sender: account,
        exec: {
          action: 'cancel_meme_coin_flip',
          msg: {
            id,
          },
        },
      });

      await msgBroadcastClient.broadcast({
        msgs: msg,
        injectiveAddress: account,
      });
    } catch(e) {
      return;
    }
  }

  useSWR('memecoin-flip', getMemecoinFlip, {
    refreshInterval: 10000,
  });

  const { data: user, mutate: getUserInfos } = useSWR(
    'memecoin-flip-users',
    userInfos,
  );

  const { trigger, isMutating } = useSWRMutation(
    'create-memecoin',
    createMemecoinFlip,
  );

  const { trigger: cancel, isMutating: loadingCancel } = useSWRMutation(
    'cancel-memecoin',
    cancelMemecoinFlip,
  );

  const withdrawBalance =
    Number(
      user?.available_withdraw?.find(({ denom }) => denom === 'inj')?.amount ||
        0,
    ) /
    10 ** 18;

  return {
    createMemecoinFlip: trigger,
    loadingCreate: isMutating,
    memecoins,
    fightPvpBattles,
    matchOpens,
    withDraw,
    withDrawOld,
    withdrawBalance,
    withdrawBalanceOld,
    cancelMemecoinFlip: cancel,
    loadingCancel
  };
};
