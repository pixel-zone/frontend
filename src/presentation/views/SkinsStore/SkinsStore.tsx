import { SkinsStoreStyles } from './SkinsStore.styles';
import { Grid } from '@mui/material';
import Image from 'next/image';
import headCoin from '@/presentation/assets/ninja-coin.png';
import { Button } from '@/presentation/components';

import { cyberCoinFlipSkins, binaryDrawSkins } from './utils/items';

export const SkinsStore: React.FC = () => {
  return (
    <Grid container maxWidth={800} margin="0 auto" padding="0 1rem 1rem 0">
      <Grid
        item
        md={12}
        xs={12}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          paddingTop: '3rem',
        }}
      >
        <SkinsStoreStyles.Title>Cyber Coin Flip Skins</SkinsStoreStyles.Title>;
      </Grid>
      <Grid item md={12} xs={12}>
        <SkinsStoreStyles.SkinsContainer>
          {cyberCoinFlipSkins.map(skin => (
            <SkinsStoreStyles.Skin>
              <Image
                src={skin.image}
                width={80}
                height={80}
                alt="coin flip skin"
              />
              <div>
                <span>Preço:</span>
                <p>{skin.price} Pixel Points</p>
              </div>
              {/* {skin.isPurchased ? (
                <Button.Outlined disabled>Adquirida</Button.Outlined>
              ) : ( */}
              {false ? (
                <Button.Outlined disabled>Adquirida</Button.Outlined>
              ) : (
                <Button.Default>Comprar</Button.Default>
              )}
            </SkinsStoreStyles.Skin>
          ))}
        </SkinsStoreStyles.SkinsContainer>
      </Grid>
      <Grid
        item
        md={12}
        xs={12}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          paddingTop: '3rem',
        }}
      >
        <SkinsStoreStyles.Title>Binary Draw skins</SkinsStoreStyles.Title>;
      </Grid>
      <Grid item md={12} xs={12}>
        <SkinsStoreStyles.SkinsContainer>
          {binaryDrawSkins.map(skin => (
            <SkinsStoreStyles.Skin>
              <Image
                src={skin.image}
                width={70}
                height={80}
                alt="coin flip skin"
              />
              <div>
                <span>Preço:</span>
                <p>{skin.price} Pixel Points</p>
              </div>
              <Button.Default>Comprar</Button.Default>
            </SkinsStoreStyles.Skin>
          ))}
        </SkinsStoreStyles.SkinsContainer>
      </Grid>
    </Grid>
  );
};
