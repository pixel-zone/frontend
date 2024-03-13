import useSWRMutation from 'swr/mutation';
import { BigNumberInBase, INJ_DENOM } from '@injectivelabs/utils';
import {
  MsgExecuteContractCompat,
  fromBase64,
  toBase64,
} from '@injectivelabs/sdk-ts';
import useSWR from 'swr';

import { useToast } from '../useToast';
import { chainGrpcWasmApi } from '@/configs/wallet/injective/services';
import { msgBroadcastClient } from '@/configs/wallet/injective/msgBroadcastClient';

import { useAccountState } from '../../states/account';
import { CONTRACT_ADDRESS_PVP } from '../../utils/constants';
import { IBattles } from '../../entities/PvPBattles';
import { usePvPBattlesState } from '../../states/pvpBattles';
import { useModal } from '../useModal';
import { useRouter } from 'next/router';
import { IUserInformations } from '../../entities/UserInformations';
import { getTransationsPvp } from '@/core/services/transations';
import { ITransation } from '@/core/entities/Transation';
import { format } from './utils/format';

export const usePvpBattles = () => {
  const { account } = useAccountState();
  const { toast } = useToast();
  const { closeModal } = useModal();

  const { query } = useRouter();

  const referral = query?.referral;

  const { pvpBattles, setPvpBattles } = usePvPBattlesState();

  const oldContract = 'inj17vwku3kaxq3ansas3a7xyqsc7arhhkdnssfttv';

  const matchOpens = pvpBattles.filter(({ finished }) => !finished)?.length;

  const createPvpBattle = async (
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
    try {
      const { amount, side } = arg;

      const newAccount = account;

      const msg = MsgExecuteContractCompat.fromJSON({
        contractAddress: CONTRACT_ADDRESS_PVP!,
        sender: newAccount,
        exec: {
          action: 'create_pvp_battle',
          msg: { denom: 'inj', creator_ninja: side, referral: referral || '' },
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

      closeModal();

      await getPvpBattles();

      toast({ title: 'Game created successfully!', type: 'success' });
    } catch (e) {
      toast({ title: 'Error on trying to create the game', type: 'error' });
      return;
    }
  };

  const fightPvpBattles = async (
    url = '',
    {
      arg,
    }: {
      arg: {
        id: number;
        amount: number;
        side: number;
      };
    },
  ) => {
    try {
      const newAccount = account;

      const { amount, id, side } = arg;

      const msg = MsgExecuteContractCompat.fromJSON({
        contractAddress: CONTRACT_ADDRESS_PVP!,
        sender: newAccount,
        exec: {
          action: 'fight_pvp_battle',
          msg: { id, opponent_ninja: side, referral: referral || '' },
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

      closeModal();

      await Promise.all([await getPvpBattles(), await getUserInfos()]);

      toast({ title: 'You have fought successfully!', type: 'success' });
    } catch (e) {
      toast({ title: 'Error on trying to fight', type: 'error' });
      return;
    }
  };

  const getPvpBattles = async () => {
    try {
      const response = (await chainGrpcWasmApi.fetchSmartContractState(
        CONTRACT_ADDRESS_PVP!,
        toBase64({ list_all_pvp_battle: {} }),
      )) as unknown as { data: string };

      const result = fromBase64(response.data)?.list_pvp_battle as IBattles[];

      const events: { data: ITransation[] } = await getTransationsPvp();
      const eventsData = format({ data: events?.data }) as any[];

      setPvpBattles([...result, ...eventsData]);

      return result;
    } catch (e) {
      return;
    }
  };

  const withDraw = async () => {
    try {
      const msg = MsgExecuteContractCompat.fromJSON({
        contractAddress: CONTRACT_ADDRESS_PVP!,
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

      return null;
    } catch (e) {
      return toast({ title: 'Error to try widthdraw.', type: 'error' });
    }
  };

  const userInfos = async () => {
    try {
      const response = (await chainGrpcWasmApi.fetchSmartContractState(
        CONTRACT_ADDRESS_PVP!,
        toBase64({ get_user_informations: { address: account } }),
      )) as unknown as { data: string };

      const result = fromBase64(response.data) as IUserInformations;

      return result?.user_informations;
    } catch (e) {
      return;
    }
  };

  const fightPvpBattlesOld = async (
    url = '',
    {
      arg,
    }: {
      arg: {
        id: number;
        amount: number;
        side: number;
      };
    },
  ) => {
    try {
      const newAccount = account;

      const { amount, id, side } = arg;

      const msg = MsgExecuteContractCompat.fromJSON({
        contractAddress: oldContract!,
        sender: newAccount,
        exec: {
          action: 'fight_pvp_battle',
          msg: { id, opponent_ninja: side, referral: referral || '' },
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

      closeModal();

      await Promise.all([await getUserInfosOld()]);

      toast({ title: 'You have fought successfully!', type: 'success' });
    } catch (e) {
      toast({ title: 'Error on trying to fight', type: 'error' });
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

      return null;
    } catch (e) {
      return toast({ title: 'Error to try widthdraw.', type: 'error' });
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

  const cancelPvpBattle = async (
    url = '',
    { arg }: { arg: { id: number } },
  ) => {
    try {
      const { id } = arg;

      const msg = MsgExecuteContractCompat.fromJSON({
        contractAddress: CONTRACT_ADDRESS_PVP!,
        sender: account,
        exec: {
          action: 'cancel_pvp_battle',
          msg: {
            id,
          },
        },
      });

      await msgBroadcastClient.broadcast({
        msgs: msg,
        injectiveAddress: account,
      });
    } catch (e) {
      return;
    }
  };

  const { data: userOld, mutate: getUserInfosOld } = useSWR(
    'pvp-battles-user-info-old',
    userInfosOld,
  );

  const withdrawBalanceOld =
    Number(
      userOld?.available_withdraw?.find(({ denom }) => denom === 'inj')
        ?.amount || 0,
    ) /
    10 ** 18;

  const { data: user, mutate: getUserInfos } = useSWR(
    'pvp-battles-user-info',
    userInfos,
  );

  useSWR('pvp-battles', getPvpBattles, {
    refreshInterval: 5000,
  });

  const { trigger, isMutating } = useSWRMutation(
    'create-pvp-battle',
    createPvpBattle,
  );

  const { trigger: triggerFight, isMutating: loading } = useSWRMutation(
    'fight-pvp-battle',
    fightPvpBattles,
  );

  const { trigger: triggerCancel, isMutating: loadingCancel } = useSWRMutation(
    'cancel-pvp-battle',
    cancelPvpBattle,
  );

  const withdrawBalance =
    Number(
      user?.available_withdraw?.find(({ denom }) => denom === 'inj')?.amount ||
        0,
    ) /
    10 ** 18;

  return {
    createPvpBattle: trigger,
    loadingCreating: isMutating,
    pvpBattles,
    fightPvpBattles: triggerFight,
    fightLoading: loading,
    matchOpens,
    withDraw,
    user,
    withdrawBalance,
    withDrawOld,
    withdrawBalanceOld,
    cancelPvpBattle: triggerCancel,
    loadingCancel,
  };
};
