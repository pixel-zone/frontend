import { Container, Grid } from '@mui/material';
import Image from 'next/image';

import { HeaderStyles } from './styles';
import { useModal } from '@/core/hooks/useModal';

export const Header: React.FC = () => {
  const { openModal } = useModal();

  return (
    <HeaderStyles.Container container>
      <Container
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        maxWidth="lg"
      >
        <Grid item md={4} xs={12}>
          <HeaderStyles.infosLottery>
            <h4>{(Number(0) / 10 ** 18 || 0)?.toFixed(2)} Pixel Points</h4>
            <p>Em Prêmios</p>
          </HeaderStyles.infosLottery>
        </Grid>
      </Container>
    </HeaderStyles.Container>
  );
};
