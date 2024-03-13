import { Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useGeneralAnalytics } from '@/core/hooks/useGeneralAnalytics';
import { usePrice } from '@/core/hooks/usePrice';
import { InfosStyles } from './styles';

export const Infos: React.FC = () => {
  const { t } = useTranslation();
  const { data } = useGeneralAnalytics();
  const { price } = usePrice();
  const volumeInInj = (process.env.NEXT_PUBLIC_TVL_MOCK ?? 0).toLocaleString(
    'en-US',
    {},
  );
  const volumeInUsd =
    price !== undefined
      ? (Number(process.env.NEXT_PUBLIC_TVL_MOCK) * price).toLocaleString(
          'en-US',
          { style: 'currency', currency: 'USD' },
        )
      : 'Loading...';

  return (
    <Container maxWidth="xl">
      <InfosStyles.Container>
        <Grid container height="100%">
          <Grid item md={6} xs={12}>
            <InfosStyles.Content>
              <InfosStyles.Title>{t('Batalhas PvP')}</InfosStyles.Title>
              <InfosStyles.Description>
                {data?.total_finished_games || '-'}
              </InfosStyles.Description>
            </InfosStyles.Content>
          </Grid>
          <Grid item md={6} xs={12}>
            <InfosStyles.Content>
              <InfosStyles.Title>{t('Tickets Comprados')}</InfosStyles.Title>
              <InfosStyles.Description>
                {data?.total_users || '-'}
              </InfosStyles.Description>
            </InfosStyles.Content>
          </Grid>
        </Grid>
      </InfosStyles.Container>
    </Container>
  );
};
