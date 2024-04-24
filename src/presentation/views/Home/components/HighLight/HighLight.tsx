/* eslint-disable react/no-unescaped-entities */
import { Grid, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import boy from '@/presentation/assets/boy.png';
import { HighLighStyles } from './styles';
import { useAdsState } from '@/core/states/ads';
import { useEffect, useState } from 'react';
import { useAds } from '@/core/hooks/useAds';

export const HighLight: React.FC = () => {
  const { t } = useTranslation();
  const { retrieveVerifiedAds } = useAds();
  const [homeAds, setHomeAds] = useState([]);

  const getHomeAds = async () => {
    const response = await retrieveVerifiedAds({
      id_usuario: 4,
      verificados: true,
    });

    console.log('response', response);
    if (response.length > 0) {
      setHomeAds(response[0].ad);
    } else {
      console.log('No ads retrieved');
    }
  };

  useEffect(() => {
    getHomeAds();
  }, []);
  return (
    <Container maxWidth="xl">
      <Grid container height="auto">
        <HighLighStyles.Content
          item
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
        >
          <h5>
            {' '}
            Bem vindo ao PixelZone
            <br /> <br />A sua plataforma de jogos PvP <br /> feita para se
            divertir com amigos.
          </h5>
          {homeAds !== undefined ? (
            <Image
              src={`data:image/jpeg;base64,${homeAds}`}
              width={200}
              height={200}
              style={{
                width: '120%',
                height: '120%',
                objectFit: 'scale-down',
              }}
            />
          ) : (
            <div>
              <Image
                src={boy}
                alt="boy"
                width={350}
                style={{ marginRight: '-9rem' }}
              />
            </div>
          )}
        </HighLighStyles.Content>
      </Grid>
    </Container>
  );
};
