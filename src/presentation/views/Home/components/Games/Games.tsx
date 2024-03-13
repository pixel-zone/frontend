import { Link } from '@/presentation/components';
import { Container, Grid } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { games } from './utils/games';

import { Button } from '@/presentation/components';

import { GamesStyles } from './styles';

export const Games: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl">
      <GamesStyles.Container>
        <Grid
          container
          spacing="0.5rem"
          flexWrap="wrap"
          className="container-game"
        >
          {games.map(({ name, bgImage, blocked, link }, index) => {
            return (
              <Grid item md={6} xs={12} lg={index <= 1 ? 6 : 4} key={name}>
                <GamesStyles.Card $blocked={blocked}>
                  <p>{name}</p>
                  {blocked ? (
                    <Button.Default>{t('Coming soon')}</Button.Default>
                  ) : (
                    <Link href={link}>
                      <Button.Default>{t('Play')}</Button.Default>
                    </Link>
                  )}
                  <Image src={bgImage} alt="image game" />
                </GamesStyles.Card>
              </Grid>
            );
          })}
        </Grid>
      </GamesStyles.Container>
    </Container>
  );
};
