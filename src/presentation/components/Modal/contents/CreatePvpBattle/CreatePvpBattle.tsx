import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Close } from '@/presentation/assets/close';
import ninjaBlue from '@/presentation/assets/pvp-battles/ninja-blue-slot.png';
import ninjaGreen from '@/presentation/assets/pvp-battles/ninja-green-slot.png';
import ninjaGray from '@/presentation/assets/pvp-battles/ninja-gray-slot.png';
import ninjaOrange from '@/presentation/assets/pvp-battles/ninja-yellow-slot.png';
import ninjaPink from '@/presentation/assets/pvp-battles/ninja-red-slot.png';

import { useModal } from '@/core/hooks/useModal';
import { Button } from '@/presentation/components';
import { handleInputChange } from '@/core/utils/formats';
import { usePvpMatch } from '@/core/hooks/usePvpMatch';
import { useAccountState } from '@/core/states/account';
import { CreatePvpBattleStyles } from './styles';

interface ICreatePvpBattle {
  opponent: boolean;
  id: number;
  creator: number;
}

export const CreatePvpBattle = ({
  opponent,
  id,
  creator,
}: ICreatePvpBattle) => {
  const { t } = useTranslation();

  const { closeModal } = useModal();
  const { createMatch, getOpenMatches, joinMatch } = usePvpMatch();
  const [selected, setSelected] = useState(0);
  const [amount, setAmount] = useState('');
  const { account } = useAccountState();
  return (
    <CreatePvpBattleStyles.Container>
      <CreatePvpBattleStyles.Header>
        <h4>{opponent ? 'Entrar' : t('Criar Partida')}</h4>
        <div onClick={() => closeModal()}>
          <Close />
        </div>
      </CreatePvpBattleStyles.Header>
      <CreatePvpBattleStyles.Content>
        <form>
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
                src={ninjaOrange}
                alt="ninja orange"
                onClick={() => setSelected(4)}
                $selected={selected === 4}
                $disabled={creator === 4}
              />
              {/* <CreatePvpBattleStyles.ImageNinja
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
                src={ninjaPink}
                alt="ninja pink"
                onClick={() => setSelected(5)}
                $selected={selected === 5}
                $disabled={creator === 5}
              /> */}
            </div>
          </div>
          <Button.Default
            // disabled={selected === 0 || (!opponent && !newAmount)}
            type="button"
            onClick={() =>
              createMatch({ gameTypeId: 5, userId: account.id, choice: 0 })
            }
          >
            Criar
          </Button.Default>
        </form>
      </CreatePvpBattleStyles.Content>
    </CreatePvpBattleStyles.Container>
  );
};
