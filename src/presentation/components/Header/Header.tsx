import { Grid } from '@mui/material';
import { Link } from '@/presentation/components';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { Button } from '@/presentation/components/Button/Button';
import Logo from '@/presentation/assets/cyberjam.png';
import arrowDown from '@/presentation/assets/arrow-down.png';
import menuIcon from '@/presentation/assets/menu.webp';
import { Profile } from '@/presentation/assets/profile';
import { useMenu } from '@/core/states/menu';
import blueX from '@/presentation/assets/blue-x.png';

import { HeaderStyles } from './styles';
import { useAccountBalance } from '@/core/hooks/useAccountBalance';

export const Header: React.FC = () => {
  const { t } = useTranslation();

  const { balance } = useAccountBalance();
  const { setMenu, menu } = useMenu();

  return (
    <>
      <HeaderStyles.Container>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          padding={{ md: '0 2rem', xs: '0 0.5rem 0 0' }}
        >
          <Grid
            md={6}
            item
            sx={{
              color: '#fff',
              fontWeight: '700',
              fontSize: '1.5rem',
              gap: '.5rem',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Link href="/">
              <Image
                width={35}
                height={45}
                quality={100}
                src={Logo}
                alt="Ninja Labs"
              />
            </Link>
            PixelZone
          </Grid>
          <Grid
            md={6}
            item
            display={{ md: 'flex', xs: 'none' }}
            justifyContent="flex-end"
            alignItems="center"
            gap="0 2rem"
          >
            {false ? (
              <>
                {/* <Link href="/account">
                  <HeaderStyles.Account>
                    <Image
                      src={ninjaPoints}
                      alt=" ninja points"
                      width={30}
                      height={30}
                    />{' '}
                    {getTotalPoints()}
                    <p> {t('Ninja Points')}</p>
                  </HeaderStyles.Account>
                </Link> */}

                <HeaderStyles.Account>
                  <p>Points Balances:</p> {balance} Pixel Points
                </HeaderStyles.Account>
                <HeaderStyles.Account>
                  <Profile />
                  Conta X
                  <span>
                    <Image
                      src={arrowDown}
                      alt="arrow down"
                      width={12}
                      height={6}
                    />
                  </span>
                  <div>
                    <Button.Outlined> {t('Sair')}</Button.Outlined>
                  </div>
                </HeaderStyles.Account>
              </>
            ) : (
              <Button.Default>{t('Criar conta')}</Button.Default>
            )}
          </Grid>
          <Grid
            md={6}
            item
            display={{ md: 'none', xs: 'block' }}
            justifyContent="flex-end"
            alignItems="center"
            marginRight=".5rem"
            gap="0 2rem"
          >
            <Image
              width={20}
              src={menu ? menuIcon : blueX}
              alt="menu"
              onClick={() => setMenu()}
            />
          </Grid>
        </Grid>
      </HeaderStyles.Container>
    </>
  );
};
