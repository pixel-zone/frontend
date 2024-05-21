import { useRouter } from 'next/router';
import Image from 'next/image';
import { Trans, useTranslation } from 'react-i18next';

import { languages } from './utils/languages';

import { useMenu } from '@/core/states/menu';
import { menuItems } from './utils/items';

import { ILanguages } from '@/core/states/languages';

import { Button, Link } from '@/presentation/components';
import { useModal } from '@/core/hooks/useModal';
import ninjaPoints from '@/presentation/assets/ninja-points.webp';

import { MenuStyles } from './styles';

export const Menu: React.FC = () => {
  const { t } = useTranslation();

  const router = useRouter();
  const { menu, setMenu } = useMenu();

  const { openModal } = useModal();

  return (
    <MenuStyles.Container close={menu}>
      <MenuStyles.Content>
        <MenuStyles.Connect>
          {false ? (
            <>
              <MenuStyles.Account>
                <button>{t('Sair')}</button>
              </MenuStyles.Account>
            </>
          ) : (
            <Link href="/login">
              <Button.Default id="connect" style={{ width: '10rem' }}>
                <Trans>{t('Login')}</Trans>
              </Button.Default>
            </Link>
          )}
        </MenuStyles.Connect>
        {menuItems.map(item =>
          !item.disabled ? (
            <Link key={item.label} href={item.path}>
              <MenuStyles.Item
                key={item.label}
                $isDisabled={item.disabled}
                $isSelected={router.pathname === item.path}
                onClick={() => setMenu()}
              >
                <div>
                  <Image src={item.logo} width={20} alt="sidebar image" />
                  <p>{t(item.label)}</p>
                </div>
              </MenuStyles.Item>
            </Link>
          ) : (
            <MenuStyles.Item $isDisabled={item.disabled} key={item.label}>
              <div>
                <Image src={item.logo} width={25} alt="sidebar image" />
                <p>{item.label}</p>
              </div>
              <span></span>
            </MenuStyles.Item>
          ),
        )}
      </MenuStyles.Content>
    </MenuStyles.Container>
  );
};
