import { ChangeEvent, useState } from 'react';
import Image from 'next/image';

import { validateTickets } from '@/core/utils/validateTickets';
import { Close } from '@/presentation/assets/close';
import { Button } from '@/presentation/components';
import { useModal } from '@/core/hooks/useModal';
import lottery from '@/presentation/assets/tickets-float.png';
import { BuyQuantumLotteryStyles } from './styles';

export const BuyQuantumLottery: React.FC = () => {
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
    <BuyQuantumLotteryStyles.Container>
      <BuyQuantumLotteryStyles.Header>
        <h4>Coloque a qtd de tickets</h4>
        <div onClick={() => closeModal()}>
          <Close />
        </div>
      </BuyQuantumLotteryStyles.Header>
      <BuyQuantumLotteryStyles.Option>
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
      </BuyQuantumLotteryStyles.Option>
      <BuyQuantumLotteryStyles.ButtonsContainer>
        <input
          type="number"
          placeholder="Quantidade"
          onChange={e => setInputAmount(validateTickets(e))}
          value={inputAmount}
        />
        <Button.Default>Comprar</Button.Default>
      </BuyQuantumLotteryStyles.ButtonsContainer>
    </BuyQuantumLotteryStyles.Container>
  );
};
