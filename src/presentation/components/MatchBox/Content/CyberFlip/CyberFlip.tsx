import { useTranslation } from 'react-i18next';

import { Button } from '@/presentation/components';
import { Arena } from './components/Arena';

import { slots } from './components/utils/slots';

import { useModal } from '@/core/hooks/useModal';

import { MatchBoxStyles } from '../../styles';
import { CyberFlipStyles } from './styles';
import { Grid } from '@mui/material';
import { usePvpMatch } from '@/core/hooks/usePvpMatch';
import { use, useEffect, useState } from 'react';

export const CyberFlipPvp: React.FC = () => {
  const { t } = useTranslation();
  const [matches, setMatches] = useState<any[]>();
  const { openModal } = useModal();
  const { getOpenMatches, drawMatch } = usePvpMatch();

  useEffect(() => {
    const fetchMatches = async () => {
      const matchesOpen = await getOpenMatches();
      setMatches(matchesOpen?.jogos || []);
    };

    fetchMatches();
  }, [matches]);

  return (
    <>
      <CyberFlipStyles.Info>
        <Grid
          xs={12}
          sx={{
            display: 'flex',
            alignItems: { xs: 'center' },
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <h4>{t('Cyber Coin Flip')}</h4>
          <p>{`(${t('Partidas Abertas')}: ${matches?.length || 0})`}</p>
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
      </CyberFlipStyles.Info>

      <MatchBoxStyles.PvPMatchesContainer>
        {matches !== undefined &&
          matches?.length > 0 &&
          Array.isArray(matches) &&
          matches?.map((match, index) => <Arena match={match} key={index} />)}
        {slots.slice(matches?.length || 0).map((_, index) => {
          return (
            <CyberFlipStyles.Slot key={index}>
              <p>Esperando por partida...</p>
            </CyberFlipStyles.Slot>
          );
        })}
      </MatchBoxStyles.PvPMatchesContainer>
    </>
  );
};
