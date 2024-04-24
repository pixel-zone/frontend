import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Close } from '@/presentation/assets/wallet/close';
import ninjaBlue from '@/presentation/assets/pvp-battles/ninja-blue-slot.png';
import ninjaGreen from '@/presentation/assets/pvp-battles/ninja-green-slot.png';
import ninjaGray from '@/presentation/assets/pvp-battles/ninja-gray-slot.png';
import ninjaOrange from '@/presentation/assets/pvp-battles/ninja-yellow-slot.png';
import ninjaPink from '@/presentation/assets/pvp-battles/ninja-red-slot.png';

import { useModal } from '@/core/hooks/useModal';
import { Button } from '@/presentation/components';
import { handleInputChange } from '@/core/utils/formats';

import { CreatePvpBattleStyles } from './styles';

interface ICreatePvpBattle {
  opponent: boolean;
  id: number;
  ticket: number;
  creator: number;
}

export const CreatePvpBattle = ({
  opponent,
  id,
  ticket,
  creator,
}: ICreatePvpBattle) => {
  const { t } = useTranslation();

  const { closeModal } = useModal();

  const [selected, setSelected] = useState(0);
  const [amount, setAmount] = useState('');

  const newAmount = Number(amount);

  return (
    <CreatePvpBattleStyles.Container>
      <CreatePvpBattleStyles.Header>
        <h4>{opponent ? 'Entrar na Partida' : t('Criar Partida')}</h4>
        <div onClick={() => closeModal()}>
          <Close />
        </div>
      </CreatePvpBattleStyles.Header>
      <CreatePvpBattleStyles.Content
        $isWarningVisible={amount !== '' && newAmount < 0.1}
      >
        <form>
          <div>
            <label>
              {t('Ticket')}:{' '}
              {!opponent ? <small>(Min 0.001 Pixel Points</small> : null}
              <small>
                {opponent
                  ? `(${Number(ticket)?.toFixed(2)}) Pixel Points`
                  : null}
              </small>
            </label>
            {!opponent ? (
              <>
                <input
                  placeholder="0.1"
                  onChange={e => {
                    handleInputChange({
                      event: e,
                      setAmount: setAmount,
                    });
                  }}
                  value={amount}
                />
                <span>{t('The minimum amount is')} 0.001 Pixel Points</span>
              </>
            ) : null}
          </div>

          <div>
            <label>{t('Escolha um robô')}:</label>
            <div>
              <CreatePvpBattleStyles.ImageNinja
                src={ninjaBlue}
                alt="ninja blue"
                onClick={() => setSelected(1)}
                $selected={selected === 1}
                $disabled={creator === 1}
              />
              <CreatePvpBattleStyles.ImageNinja
                src={ninjaGreen}
                alt="ninja green"
                onClick={() => setSelected(2)}
                $selected={selected === 2}
                $disabled={creator === 2}
              />
              <CreatePvpBattleStyles.ImageNinja
                src={ninjaGray}
                alt="ninja gray"
                onClick={() => setSelected(3)}
                $selected={selected === 3}
                $disabled={creator === 3}
              />
              <CreatePvpBattleStyles.ImageNinja
                src={ninjaOrange}
                alt="ninja orange"
                onClick={() => setSelected(4)}
                $selected={selected === 4}
                $disabled={creator === 4}
              />
              <CreatePvpBattleStyles.ImageNinja
                src={ninjaPink}
                alt="ninja pink"
                onClick={() => setSelected(5)}
                $selected={selected === 5}
                $disabled={creator === 5}
              />
            </div>
          </div>
          <Button.Default
            disabled={selected === 0 || (!opponent && !newAmount)}
            type="button"
          >
            Criar
          </Button.Default>
        </form>
      </CreatePvpBattleStyles.Content>
    </CreatePvpBattleStyles.Container>
  );
};
