import { useEffect, useState } from 'react';
import { BigNumberInBase, INJ_DENOM } from '@injectivelabs/utils';
import {
  MsgExecuteContractCompat,
  fromBase64,
  toBase64,
} from '@injectivelabs/sdk-ts';

import { useToast } from './useToast';

import { chainGrpcWasmApi } from '@/configs/wallet/injective/services';
import { msgBroadcastClient } from '@/configs/wallet/injective/msgBroadcastClient';

import { useAccountState } from '../states/account';
import { CONTRACT_ADDRESS_BATTLE_ROYALE } from '../utils/constants';
import { useRouter } from 'next/router';
import { useModal } from './useModal';
import { IBattleRoyale } from '../entities/BattleRoyale';

export const useChadsBattle = () => {
  const { account } = useAccountState();
  const { toast } = useToast();
  const { query } = useRouter();
  const { closeModal } = useModal();

  const referral = query?.referral;

  const [battle, setBattle] = useState<IBattleRoyale>({} as IBattleRoyale);
  const [loadingBuy, setLoadingBuy] = useState(false);

  const createChadsBattle = async () => {
    try {
      const newAccount = account;

      const msg = MsgExecuteContractCompat.fromJSON({
        contractAddress: CONTRACT_ADDRESS_BATTLE_ROYALE!,
        sender: newAccount,
        msg: {
          create_pepe_draw: {
            ticket: String(0.1 * 10 ** 18),
            percentage_reward: '90',
            denom: 'inj',
            limit_of_tickets: '9999999',
            percentage_to_referral: '1',
          },
        },
      });

      await msgBroadcastClient.broadcast({
        msgs: msg,
        injectiveAddress: newAccount,
      });
    } catch (e) {
      return;
    }
  };

  const joinChadsBattle = async ({
    id,
    poolId,
    amountTickets,
  }: {
    id: number;
    poolId: number;
    amountTickets: number;
  }) => {
    setLoadingBuy(true);
    try {
      const newAccount = account;

      const chadsBattleData = await getChadsBattle();

      const msg = MsgExecuteContractCompat.fromJSON({
        contractAddress: CONTRACT_ADDRESS_BATTLE_ROYALE!,
        sender: newAccount,
        exec: {
          action: 'buy_ticket_pepe_draw',
          msg: {
            id,
            pool_id: String(poolId),
            qtd_of_tickets: String(amountTickets),
            referral: referral || '',
          },
        },
        funds: {
          denom: INJ_DENOM,
          amount: new BigNumberInBase(
            (Number(chadsBattleData?.ticket) * amountTickets) / 10 ** 18,
          )
            .toWei()
            .toFixed(),
        },
      });

      await msgBroadcastClient.broadcast({
        msgs: msg,
        injectiveAddress: newAccount,
        gas: {
          gas: 3000000,
        },
      });

      getChadsBattle();

      toast({ title: 'You have joined successfully!' });
      setLoadingBuy(false);
      closeModal();
    } catch (e) {
      setLoadingBuy(false);
      return;
    }
  };

  const getChadsBattle = async () => {
    try {
      const response = (await chainGrpcWasmApi.fetchSmartContractState(
        CONTRACT_ADDRESS_BATTLE_ROYALE!,
        toBase64({ list_pepe_draw: { finished: false } }),
      )) as unknown as { data: string };

      const result = fromBase64(response.data)
        ?.list_pepe_draw?.[0] as IBattleRoyale;

      setBattle(result);

      return result;
    } catch (e) {
      return;
    }
  };

  useEffect(() => {
    getChadsBattle();
  }, []);

  const ticketsA = battle?.participants_pool_a?.reduce(
    (tickets, ticket) => tickets + Number(ticket.tickets_purchased),
    0,
  );
  const yourTicketsA = battle?.participants_pool_a
    ?.filter(pool => pool.user === account)
    ?.reduce(
      (tickets, ticket) => tickets + Number(ticket.tickets_purchased),
      0,
    );

  const ticketsB = battle?.participants_pool_b?.reduce(
    (tickets, ticket) => tickets + Number(ticket.tickets_purchased),
    0,
  );
  const yourTicketsB = battle?.participants_pool_b
    ?.filter(pool => pool.user === account)
    ?.reduce(
      (tickets, ticket) => tickets + Number(ticket.tickets_purchased),
      0,
    );

  return {
    createChadsBattle,
    joinChadsBattle,
    battle,
    loading: loadingBuy,
    ticketsA,
    yourTicketsA,
    ticketsB,
    yourTicketsB,
  };
};
