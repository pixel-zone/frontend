import { useState } from 'react';
import useSWR from 'swr';
import {
  MsgExecuteContractCompat,
  fromBase64,
  toBase64,
} from '@injectivelabs/sdk-ts';
import { BigNumberInBase, INJ_DENOM } from '@injectivelabs/utils';
import { useRouter } from 'next/router';

import { msgBroadcastClient } from '@/configs/wallet/injective/msgBroadcastClient';
import { chainGrpcWasmApi } from '@/configs/wallet/injective/services';

import { useAccountState } from '../states/account';
import { CONTRACT_ADDRESS_NEKO_LOTTERY } from '../utils/constants';
import { useToast } from './useToast';
import { INekoLottery } from '../entities/NekoLottery';
import { useNekoLotteryState } from '../states/nekoLottery';
import { useModal } from './useModal';

export const useNekoLottery = () => {
  const { account } = useAccountState();
  const { lottery, setLottery } = useNekoLotteryState();
  const { toast } = useToast();
  const { closeModal } = useModal();

  const { query } = useRouter();

  const referral = query?.referral;

  const [loadingBuy, setLoadingBuy] = useState(false);

  const howManyTickets = lottery?.participants
    ?.filter(lottery => lottery.user === account)
    ?.reduce(
      (tickets, ticket) => tickets + Number(ticket.tickets_purchased),
      0,
    );

  const create = async () => {
    try {
      const newAccount = account;

      const msg = MsgExecuteContractCompat.fromJSON({
        contractAddress: CONTRACT_ADDRESS_NEKO_LOTTERY!,
        sender: newAccount,
        exec: {
          action: 'create_neko_lottery',
          msg: {
            ticket: String(0.1 * 10 ** 18),
            percentage_reward: '90',
            denom: 'inj',
            number_of_winners: 3,
            percentage_rewards_to_winner: ['50', '30', '20'],
            limit_of_tickets: '1000',
            percentage_to_referral: '1',
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

  const draw = async () => {
    try {
      await fetch('/api/neko-lottery/draw');
    } catch (e) {
      return;
    }
  };

  const buyTicket = async ({ amountTickets }: { amountTickets: number }) => {
    setLoadingBuy(true);
    try {

      const lottery = await getNekoLottery();
      const lotteryData = lottery?.[lottery?.length - 1];

      const msg = MsgExecuteContractCompat.fromJSON({
        contractAddress: CONTRACT_ADDRESS_NEKO_LOTTERY!,
        sender: account,
        exec: {
          action: 'buy_ticket_neko_lottery',
          msg: {
            id: lotteryData.id,
            referral: referral || '',
            qtd_of_tickets: String(amountTickets),
          },
        },
        funds: {
          denom: INJ_DENOM,
          amount: new BigNumberInBase(
            (Number(lotteryData.ticket) * amountTickets) / 10 ** 18,
          )
            .toWei()
            .toFixed(),
        },
      });

      await msgBroadcastClient.broadcast({
        msgs: msg,
        injectiveAddress: account,
        gas: {
          gas: 20000000,
        },
      });

      await getNekoLottery();

      toast({ title: 'Tickets bought successfully!', type: 'success' });
      setLoadingBuy(false);
      closeModal();
    } catch (e) {
      toast({ title: 'Error on trying to buy the ticket!', type: 'error' });
      setLoadingBuy(false);
      return;
    }
  };

  const getNekoLottery = async () => {
    try {
      const response = (await chainGrpcWasmApi.fetchSmartContractState(
        CONTRACT_ADDRESS_NEKO_LOTTERY!,
        toBase64({ list_all_neko_lottery: {}}),
      )) as unknown as { data: string };

      const result = fromBase64(response.data)
        ?.list_neko_lottery as INekoLottery[];

      setLottery(result?.[result?.length - 1]);

      return result;
    } catch (e) {
      return [];
    }
  };

  const getLastWinners = async (): Promise<{ 
    winner1: string;
    winner2: string;
    winner3: string;
   }> => {
    try {
      const response = (await chainGrpcWasmApi.fetchSmartContractState(
        CONTRACT_ADDRESS_NEKO_LOTTERY!,
        toBase64({ list_neko_lottery: { finished: true } }),
      )) as unknown as { data: string };

      const result = fromBase64(response.data)
        ?.list_neko_lottery as INekoLottery[];

      const lastMatch = result[result.length];

      return {
        winner1: lastMatch?.participants?.[lastMatch?.winners?.[0]]?.user,
        winner2: lastMatch?.participants?.[lastMatch?.winners?.[1]]?.user,
        winner3: lastMatch?.participants?.[lastMatch?.winners?.[2]]?.user,
      };
    } catch (e) {
      return {
        winner1: '',
        winner2: '',
        winner3: ''
      };
    }
  };

  const { data } = useSWR('last-winners', getLastWinners);
  useSWR('neko-lottery', getNekoLottery);

  return {
    create,
    buyTicket,
    lottery,
    howManyTickets,
    lastWinners: data,
    draw,
    loadingBuy,
  };
};
