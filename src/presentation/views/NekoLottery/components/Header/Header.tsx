import { Container, Grid } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import ticketIcon from '@/presentation/assets/neko-lottery/ticket.png';
import sideLeft from '@/presentation/assets/neko-lottery/side-left.png';
import sideRight from '@/presentation/assets/neko-lottery/side-right.png';

import { HeaderStyles } from './styles';
import { useModal } from '@/core/hooks/useModal';

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const { openModal } = useModal();

  return (
    <HeaderStyles.Container container>
      <Container style={{ display: 'flex' }} maxWidth="lg">
        {/* <Grid
          item
          md={4}
          display={{ xs: 'none', md: 'flex' }}
          justifyContent="flex-end"
          alignItems="center"
          height="100%"
        >
          <Image
            id="sideLeft"
            src={sideLeft}
            alt="ticket"
            width={250}
            height={400}
            style={{ marginRight: '5rem' }}
          />
        </Grid> */}
        <Grid
          item
          md={4}
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          height="100%"
          gap="2.5rem"
        >
          <HeaderStyles.infosLottery>
            <h4>{(Number(0) / 10 ** 18 || 0)?.toFixed(2)} Pixel Points</h4>
            <p>{t('in prizes')}</p>
          </HeaderStyles.infosLottery>
          {/* <Image
            onClick={() =>
              openModal({
                name: 'buyNekoLottery',
              })
            }
            id="ticket"
            src={ticketIcon}
            alt="ticket"
            width={300}
          /> */}
        </Grid>
        {/* <Grid
          item
          md={4}
          justifyContent="flex-start"
          alignItems="center"
          height="100%"
          display={{ xs: 'none', md: 'flex' }}
        >
          <Image
            id="sideRight"
            src={sideRight}
            alt="ticket"
            width={350}
            height={400}
            objectFit="contain"
          />
        </Grid> */}
      </Container>
    </HeaderStyles.Container>
  );
};
