import { useTranslation } from 'react-i18next';

import { Button } from '@/presentation/components/Button/Button';
import { Arena } from './components/Arena/Arena';
import { ArenaStyles } from './components/Arena/styles';
import { slots } from './components/Arena/utils/slots';

import { useModal } from '@/core/hooks/useModal';

import { MatchBoxStyles } from '../../styles';
import { Grid } from '@mui/material';

export const BinaryDraw: React.FC = () => {
  const { t } = useTranslation();

  const { openModal } = useModal();

  return (
    <>
      <MatchBoxStyles.Title>
        <Grid
          xs={12}
          sx={{
            display: 'flex',
            alignItems: { xs: 'center' },
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <h4>{t('Binary Draw')}</h4>

          <p>{`(${t('Partidas Abertas')}: ${0})`}</p>
        </Grid>
        <Grid
          xs={12}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1rem 0',
          }}
        >
          <Button.Default
            type="button"
            onClick={() => openModal({ name: 'createPvpBattle' })}
          >
            {t('Criar Partida')}
          </Button.Default>

          {/* <span>|</span> */}
          {/* <Button.Default
            disabled={!withdrawBalanceOld}
            type="button"
            onClick={() => withDrawOld()}
          >
            {t('Resgatar (old) ')}: {withdrawBalanceOld?.toFixed(2)} INJ
          </Button.Default>{' '}
          <span>|</span> */}
        </Grid>
      </MatchBoxStyles.Title>

      <MatchBoxStyles.PvPMatchesContainer>
        return (
        <ArenaStyles.Slot>
          <p>Esperando por partida...</p>
        </ArenaStyles.Slot>
        );
      </MatchBoxStyles.PvPMatchesContainer>
    </>
  );
};
