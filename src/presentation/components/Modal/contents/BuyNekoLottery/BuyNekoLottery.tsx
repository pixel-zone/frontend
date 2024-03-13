import { ChangeEvent, useState } from 'react';
import Image from 'next/image';

import { validateTickets } from '@/core/utils/validateTickets';
import { Close } from '@/presentation/assets/wallet/close';
import { Button } from '@/presentation/components';
import { useModal } from '@/core/hooks/useModal';
import neko from '@/presentation/assets/nekoicon.webp';
import { useNekoLottery } from '@/core/hooks/useNekoLottery';
import lottery from '@/presentation/assets/tickets-float.png';
import { BuyNekoLotteryStyles } from './styles';

export const BuyNekoLottery: React.FC = () => {
  const { buyTicket, loadingBuy: loading } = useNekoLottery();

  const [inputAmount, setInputAmount] = useState<number | string>();
  const { closeModal } = useModal();

  const handleButtonText = (inputAmount: number) => {
    if (inputAmount) {
      return `Buy ${inputAmount} tickets`;
    } else {
      return 'Buy ticket';
    }
  };

  const amount = isNaN(Number(inputAmount)) ? 0 : Number(inputAmount);

  return (
    <BuyNekoLotteryStyles.Container>
      <BuyNekoLotteryStyles.Header>
        <h4>Coloque a qtd de tickets</h4>
        <div onClick={() => closeModal()}>
          <Close />
        </div>
      </BuyNekoLotteryStyles.Header>
      <BuyNekoLotteryStyles.Option>
        <Image
          id="sideLeft"
          src={lottery}
          alt="ticket"
          width={300}
          style={{ marginLeft: '-8rem' }}
        />
        <span>
          Custo total: <p>{(amount * 0.1).toFixed(2)} Pixel Points</p>
        </span>
      </BuyNekoLotteryStyles.Option>
      <BuyNekoLotteryStyles.ButtonsContainer>
        <input
          type="number"
          placeholder="Quantidade"
          onChange={e => setInputAmount(validateTickets(e))}
          value={inputAmount}
        />
        <Button.Default onClick={() => buyTicket({ amountTickets: amount })}>
          Comprar
        </Button.Default>
      </BuyNekoLotteryStyles.ButtonsContainer>
    </BuyNekoLotteryStyles.Container>
  );
};
