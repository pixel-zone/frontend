import { NextSeo } from 'next-seo';

import ninjaLabs from '@/presentation/assets/thumb.png';
import { useTranslation } from 'react-i18next';

export const SEO: React.FC = () => {
  const { t } = useTranslation();

  return (
    <NextSeo
      title="PixelZone"
      description={t('seo-description')}
      twitter={{
        cardType: 'summary',
        site: '0xninja_labs',
      }}
      canonical="https://pvp.ninjalabs.app"
      robotsProps={{ maxImagePreview: 'standard' }}
      openGraph={{
        type: 'website',
        url: 'https://pvp.ninjalabs.app',
        title: 'PixelZone',
        description: `${t('seo-description')}`,
        images: [
          {
            url: ninjaLabs.src,
            width: 1200,
            height: 600,
            alt: 'PvP Ninja Labs - Website',
          },
        ],
      }}
    />
  );
};
