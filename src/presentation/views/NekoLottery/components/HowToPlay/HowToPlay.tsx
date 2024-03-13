import { useTranslation, Trans } from 'react-i18next';
import { Container, Grid } from '@mui/material';

import { HowToPlayStyles } from './styles';

export const HowToPlay: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <HowToPlayStyles.Container>
        <h4>{t('How to Play')}</h4>
        <Grid container spacing="1rem">
          <Grid item md={4} xs={12}>
            <HowToPlayStyles.Step>
              <small>{t('Step')} 1</small>
              <h5>{t('Buy Tickets')}</h5>
              <p>
                <Trans>Buy Tickets Text</Trans>
              </p>
            </HowToPlayStyles.Step>
          </Grid>
          <Grid item md={4} xs={12}>
            <HowToPlayStyles.Step>
              <small>{t('Step')} 2</small>
              <h5>{t('Wait for the Draw')}</h5>
              <p>
                <Trans>Wait for the Draw Text</Trans>
              </p>
            </HowToPlayStyles.Step>
          </Grid>
          <Grid item md={4} xs={12}>
            <HowToPlayStyles.Step>
              <small>{t('Step')} 3</small>
              <h5>{t('Check for Prizes')}</h5>
              <p>{t('Check for Prizes Text')}</p>
            </HowToPlayStyles.Step>
          </Grid>
        </Grid>
      </HowToPlayStyles.Container>
    </Container>
  );
};
