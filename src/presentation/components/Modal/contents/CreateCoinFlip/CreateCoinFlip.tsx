import { useState } from 'react';

import ninjaCoin from '@/presentation/assets/ninja-coin.png';
import ninjaCoinTails from '@/presentation/assets/ninja-tails.png';

import { useModal } from '@/core/hooks/useModal';
import { Button } from '@/presentation/components';
import { Close } from '@/presentation/assets/close';
import { CreateCoinFlipStyles } from './styles';
import { useTranslation } from 'react-i18next';
import { usePvpMatch } from '@/core/hooks/usePvpMatch';
import { useAccountState } from '@/core/states/account';

export const CreateCoinFlip: React.FC = () => {
  const { t } = useTranslation();

  const { closeModal } = useModal();

  const [coin, setCoin] = useState<'heads' | 'tails' | ''>('');
  const [amount, setAmount] = useState('');
  const { createMatch, getOpenMatches, joinMatch } = usePvpMatch();
  const newAmount = Number(amount);
  const { account } = useAccountState();

  return (
    <CreateCoinFlipStyles.Container
      $isWarningVisible={amount !== '' && newAmount < 0.1}
    >
      <CreateCoinFlipStyles.Header>
        <h4>{t('Criar Partida')}</h4>
        <div onClick={() => closeModal()}>
          <Close />
        </div>
      </CreateCoinFlipStyles.Header>
      <form>
        <div>
          <label>{t('Escolha um lado')}:</label>
          <CreateCoinFlipStyles.Coins>
            <div>
              <small>{t('Cara')}</small>
              <CreateCoinFlipStyles.Coin
                src={ninjaCoin}
                alt="heads coin"
                $selected={coin === 'heads'}
                onClick={() => setCoin('heads')}
              />
            </div>
            <div>
              <small>{t('Coroa')}</small>
              <CreateCoinFlipStyles.Coin
                src={ninjaCoinTails}
                alt="tails coin"
                $selected={coin === 'tails'}
                onClick={() => setCoin('tails')}
              />
            </div>
          </CreateCoinFlipStyles.Coins>
        </div>
        <Button.Default
          onClick={() => {
            createMatch({
              gameTypeId: 1,
              userId: account.id,
              choice: coin === 'heads' ? 0 : 1,
            });
          }}
          type="button"
        >
          Criar
        </Button.Default>
      </form>
    </CreateCoinFlipStyles.Container>
  );
};
