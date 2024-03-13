/* eslint-disable react/no-unescaped-entities */
import { Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { TournamentsIcon } from '@/presentation/assets/explanations/tournaments';
import { VerifiablyIcon } from '@/presentation/assets/explanations/verifiably';
import { WinToEarnIcon } from '@/presentation/assets/explanations/win-to-earn';

import { ExplantionsStyles } from './styles';

export const Explanations: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container maxWidth="xl">
      <ExplantionsStyles.Container>
        <Grid container spacing="1rem">
          <Grid md={4} item>
            <ExplantionsStyles.Content>
              <h4>
                <VerifiablyIcon />
                {t('Verifiability')}{' '}
              </h4>
              <p>{t('Verifiability-Text')}</p>
            </ExplantionsStyles.Content>
          </Grid>
          <Grid md={4} item>
            <ExplantionsStyles.Content>
              <h4>
                <WinToEarnIcon />
                {t('Win-To-Earn')}
              </h4>
              <p>{t('Win-To-Earn-Text')}</p>
            </ExplantionsStyles.Content>
          </Grid>
          <Grid md={4} item>
            <ExplantionsStyles.Content>
              <h4>
                <TournamentsIcon />
                {t('Tournaments')}
              </h4>
              <p>{t('Tournaments-Text')}</p>
            </ExplantionsStyles.Content>
          </Grid>
        </Grid>
      </ExplantionsStyles.Container>
    </Container>
  );
};
