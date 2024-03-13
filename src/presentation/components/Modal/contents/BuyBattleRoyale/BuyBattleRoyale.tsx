import { useState } from 'react';
import Image from 'next/image';

import { Close } from '@/presentation/assets/wallet/close';
import { Button } from '@/presentation/components';
import { useModal } from '@/core/hooks/useModal';
import chadsBlack from '@/presentation/assets/chadpepe-blue.png';
import chadsBlue from '@/presentation/assets/chadpepe-black.png';
import { useChadsBattle } from '@/core/hooks/useChadsBattle';

import { BuyBattleRoyaleStyles } from './styles';
import { validateTickets } from '@/core/utils/validateTickets';

interface BuyBattleRoyaleProps {
  id: number;
  pool_id: 0 | 1;
}

export const BuyBattleRoyale: React.FC<BuyBattleRoyaleProps> = ({
  id,
  pool_id,
}) => {
  const { joinChadsBattle, loading } = useChadsBattle();

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
    <BuyBattleRoyaleStyles.Container>
      <BuyBattleRoyaleStyles.Header>
        <h4>Enter </h4>
        <div onClick={() => closeModal()}>
          <Close />
        </div>
      </BuyBattleRoyaleStyles.Header>
      <BuyBattleRoyaleStyles.Option>
        <Image
          id="sideLeft"
          src={pool_id === 0 ? chadsBlack : chadsBlue}
          alt="ticket"
          width={200}
        />
        <span>
          Total cost: <p>{(amount * 0.1).toFixed(2)} Pixel Points</p>
        </span>
      </BuyBattleRoyaleStyles.Option>
      <BuyBattleRoyaleStyles.ButtonsContainer>
        <input
          type="number"
          placeholder="Amount"
          onChange={e => setInputAmount(validateTickets(e))}
          value={inputAmount}
        />
        <Button.Default
          onClick={() =>
            joinChadsBattle({ amountTickets: amount, poolId: pool_id, id })
          }
        >
          {loading ? 'Buying...' : handleButtonText(amount)}
        </Button.Default>
      </BuyBattleRoyaleStyles.ButtonsContainer>
    </BuyBattleRoyaleStyles.Container>
  );
};
