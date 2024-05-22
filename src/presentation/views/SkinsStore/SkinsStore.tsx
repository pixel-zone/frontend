import { SkinsStoreStyles } from './SkinsStore.styles';
import { Grid } from '@mui/material';
import Image from 'next/image';
import headCoin from '@/presentation/assets/ninja-coin.png';
import tailsCoin from '@/presentation/assets/ninja-tails.png';
import { Button } from '@/presentation/components';

export const SkinsStore: React.FC = () => {
  return (
    <Grid container maxWidth={800} margin="0 auto" padding="0 1rem">
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
          <SkinsStoreStyles.Skin>
            <Image src={headCoin} width={80} height={80} alt="skin" />
            <div>
              <span>Preço:</span>
              <p>500 Pixel Points</p>
            </div>
            <Button.Default>Comprar</Button.Default>
          </SkinsStoreStyles.Skin>
          <SkinsStoreStyles.Skin>
            <Image src={headCoin} width={80} height={80} alt="skin" />
            <div>
              <span>Preço:</span>
              <p>500 Pixel Points</p>
            </div>
            <Button.Default>Comprar</Button.Default>
          </SkinsStoreStyles.Skin>
          <SkinsStoreStyles.Skin>
            <Image src={headCoin} width={80} height={80} alt="skin" />
            <div>
              <span>Preço: </span>
              <p>500 Pixel Points</p>
            </div>
            <Button.Default>Comprar</Button.Default>
          </SkinsStoreStyles.Skin>
          <SkinsStoreStyles.Skin>
            <Image src={headCoin} width={80} height={80} alt="skin" />
            <div>
              <span>Preço:</span>
              <p>500 Pixel Points</p>
            </div>
            <Button.Default>Comprar</Button.Default>
          </SkinsStoreStyles.Skin>
          <SkinsStoreStyles.Skin>
            <Image src={headCoin} width={80} height={80} alt="skin" />
            <div>
              <span>Preço:</span>
              <p>500 Pixel Points</p>
            </div>
            <Button.Default>Comprar</Button.Default>
          </SkinsStoreStyles.Skin>
          <SkinsStoreStyles.Skin>
            <Image src={headCoin} width={80} height={80} alt="skin" />
            <div>
              <span>Preço: </span>
              <p>500 Pixel Points</p>
            </div>
            <Button.Default>Comprar</Button.Default>
          </SkinsStoreStyles.Skin>
        </SkinsStoreStyles.SkinsContainer>
      </Grid>
    </Grid>
  );
};
