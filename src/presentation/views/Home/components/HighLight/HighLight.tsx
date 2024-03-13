/* eslint-disable react/no-unescaped-entities */
import { Grid, Container } from '@mui/material';
import { Link } from '@/presentation/components';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import boy from '@/presentation/assets/boy.png';
import { Button } from '@/presentation/components';

import { HighLighStyles } from './styles';

export const HighLight: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl">
      <Grid container height="auto">
        <HighLighStyles.Content item>
          <h5>
            {' '}
            Bem vindo ao PixelZone
            <br /> <br />A sua plataforma de jogos PvP <br /> feita para se
            divertir com amigos.
          </h5>

          <div>
            <Image src={boy} alt="boy" width={350} />
          </div>
        </HighLighStyles.Content>
      </Grid>
    </Container>
  );
};
