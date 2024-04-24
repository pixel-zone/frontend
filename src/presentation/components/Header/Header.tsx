import { Grid } from '@mui/material';
import { Link } from '@/presentation/components';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { Button } from '@/presentation/components/Button/Button';
import Logo from '@/presentation/assets/pixelzone.png';
import arrowDown from '@/presentation/assets/arrow-down.png';
import menuIcon from '@/presentation/assets/menu.webp';
import { Profile } from '@/presentation/assets/profile';
import { useMenu } from '@/core/states/menu';
import blueX from '@/presentation/assets/blue-x.png';
import { useAccountState } from '@/core/states/account';
import { HeaderStyles } from './styles';

export const Header: React.FC = () => {
  const { t } = useTranslation();

  const { setMenu, menu } = useMenu();
  const { account, setAccount } = useAccountState();
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
                width={200}
                height={200}
                quality={100}
                src={Logo}
                alt="logo"
              />
            </Link>
            {account.user_type_id === 2 && (
              <p style={{ color: 'red' }}>{`<Admin Mode />`}</p>
            )}
            {account.user_type_id === 4 && (
              <p style={{ color: 'green' }}>{`<Sponsor Mode />`}</p>
            )}
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
              </>
            ) : account.isLogged ? (
              <>
                <Button.Default
                  style={{
                    width: 'fit-content',
                    padding: '0.5rem 2rem',
                    whiteSpace: 'nowrap',
                  }}
                >{`Bem vindo(a) ${account.username}`}</Button.Default>

                <Link href="/conta">
                  <Button.Default
                    style={{ width: '12rem', padding: '0.5rem 2rem' }}
                  >
                    Minha Conta
                  </Button.Default>
                </Link>
                <Button.Outlined
                  onClick={prev =>
                    setAccount({
                      ...prev,
                      id: 0,
                      isLogged: false,
                      username: '',
                      email: '',
                      points: 0,
                      items: 0,
                      user_type_id: 1,
                    })
                  }
                >
                  Logout
                </Button.Outlined>
              </>
            ) : (
              <>
                <Link href="/cadastrar">
                  <Button.Default>{t('Criar conta')}</Button.Default>
                </Link>
                <Link href="/login">
                  <Button.Outlined>login</Button.Outlined>
                </Link>
              </>
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
