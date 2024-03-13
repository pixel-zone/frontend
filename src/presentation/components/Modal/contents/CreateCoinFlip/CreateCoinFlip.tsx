import { useState } from 'react';

import ninjaCoin from '@/presentation/assets/ninja-coin.png';
import ninjaCoinTails from '@/presentation/assets/ninja-tails.png';

import { useModal } from '@/core/hooks/useModal';
import { Button } from '@/presentation/components';
import { useMemecoinFlip } from '@/core/hooks/useMemecoinFlip/useMemecoinFlip';
import { Close } from '@/presentation/assets/wallet/close';
import { handleInputChange } from '@/core/utils/formats';
import { CreateCoinFlipStyles } from './styles';
import { useTranslation } from 'react-i18next';

export const CreateCoinFlip: React.FC = () => {
  const { t } = useTranslation();

  const { closeModal } = useModal();

  const { createMemecoinFlip, loadingCreate } = useMemecoinFlip();

  const [coin, setCoin] = useState<'heads' | 'tails' | ''>('');
  const [amount, setAmount] = useState('');

  const newAmount = Number(amount);

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
          <label>
            {t('Ticket')}: <small>(Min 0.001 Pixel Points)</small>
          </label>
          <input
            placeholder="0.1"
            onChange={e => {
              handleInputChange({
                event: e,
                setAmount: setAmount,
              });
            }}
          />
          <span>{t('The minimum amount is')} 0.001 Pixel Points</span>
        </div>
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
          disabled={coin === '' || loadingCreate || !newAmount}
          onClick={() =>
            createMemecoinFlip({
              amount: newAmount,
              side: coin === 'heads' ? 0 : 1,
            })
          }
          type="button"
        >
          {loadingCreate ? `${t('Criando')}...` : t('Criar')}
        </Button.Default>
      </form>
    </CreateCoinFlipStyles.Container>
  );
};
