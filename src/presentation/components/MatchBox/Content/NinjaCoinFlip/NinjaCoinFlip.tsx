import { useTranslation } from 'react-i18next';

import { Button } from '@/presentation/components';
import { Arena } from './components/Arena';

import { slots } from './components/utils/slots';

import { useModal } from '@/core/hooks/useModal';

import { MatchBoxStyles } from '../../styles';
import { NinjaCoinFlipStyles } from './styles';
import { Grid } from '@mui/material';

export const NinjaCoinFlipPvp: React.FC = () => {
  const { t } = useTranslation();

  const { openModal } = useModal();

  return (
    <>
      <NinjaCoinFlipStyles.Info>
        <Grid
          xs={12}
          sx={{
            display: 'flex',
            alignItems: { xs: 'center' },
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <h4>{t('Cyber Coin Flip')}</h4>
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
            onClick={() => openModal({ name: 'createCoinFlip' })}
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
          </Button.Default> */}
          {/* <span>|</span> */}
        </Grid>
      </NinjaCoinFlipStyles.Info>

      <MatchBoxStyles.PvPMatchesContainer>
        {/* {memecoins?.map(match => (
          <Arena match={match} key={match?.id} />
        ))} */}
        {/* {slots.slice(matchOpens).map((_, index) => { */}
        return (
        <NinjaCoinFlipStyles.Slot key={2}>
          <p>Esperando por partida...</p>
        </NinjaCoinFlipStyles.Slot>
        );
        {/* })} */}
      </MatchBoxStyles.PvPMatchesContainer>
    </>
  );
};
