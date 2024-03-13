/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { useEloCard } from './hooks/useEloCard';

import download from '@/presentation/assets/download.png';
import { usePoints } from '@/core/hooks/usePoints';
import { Tooltip } from '@/presentation/components/Tooltip/Tooltip';
import { EloCardStyles } from './styles';
import Image from 'next/image';
import tooltipIcon from '@/presentation/assets/tooltip-icon.png';
import { CircularProgress } from '@mui/material';

export const EloCard: React.FC = () => {
  const { t } = useTranslation();

  const eloCardRef = useRef(null);
  const { downloadCard, handleEloImage, eloName } = useEloCard();

  const { userCommunityData: communityPoints, userPlatformData: platformData } =
    usePoints();

  const platformPoints = platformData?.points || 0;

  const totalPoints = communityPoints + platformPoints;

  const getTotalPoints = () => {
    if (platformData !== undefined) {
      return totalPoints;
    } else {
      return (
        <CircularProgress
          sx={{
            color: '#00f2fe',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '40px',
            width: '80%',
            height: '80%',
          }}
        />
      );
    }
  };

  return (
    <div>
      <EloCardStyles.ContainerIcons>
        <div>
          <Image
            src={tooltipIcon}
            alt="tooltip icon"
            width={12}
            height={12}
            style={{ bottom: '-168px', left: '91px' }}
          />{' '}
          <Tooltip $width="8rem" $bottom="-310px" $left="-20px">
            {t('Tooltip Community')}
          </Tooltip>
        </div>
        {/* <div>
          <Image
            src={tooltipIcon}
            alt="tooltip icon"
            width={12}
            height={12}
            style={{ bottom: '-168px', left: '227px' }}
          />{' '}
          <Tooltip $width="8.5rem" $bottom="-270px" $right="95px">
            {t('Tooltip Liquidity Provider')}
          </Tooltip>
        </div> */}
        <div>
          <Image
            src={tooltipIcon}
            alt="tooltip icon"
            width={12}
            height={12}
            style={{ bottom: '-168px', left: '175px' }}
          />{' '}
          <Tooltip $width="8rem" $bottom="-270px" $right="10px">
            {t('Tooltip Platform')}
          </Tooltip>
        </div>
        <EloCardStyles.DownloadCard>
          <img
            src={download.src}
            alt="elo"
            width={16}
            height={16}
            onClick={() => downloadCard(eloCardRef, 'Elo card')}
          />
        </EloCardStyles.DownloadCard>
      </EloCardStyles.ContainerIcons>
      <div ref={eloCardRef}>
        <EloCardStyles.Container>
          <EloCardStyles.Summary>
            <span>
              <h1>{t('Ninja Points')}</h1>
              <p>{getTotalPoints()}</p>
            </span>
            <span>
              <span>{t('Current Elo')}</span>
              <small>
                <img
                  src={handleEloImage(totalPoints)}
                  alt="elo"
                  width={52}
                  height={52}
                />
                {eloName(totalPoints)}
              </small>
            </span>
          </EloCardStyles.Summary>
          <EloCardStyles.Distribution>
            <div>
              <span>{t('Community')} </span> <p>{communityPoints}</p>
            </div>
            {/* <div>
              <span>{t('Liquidity Provider')} </span>
              <p>{0}</p>
            </div> */}
            <div>
              <span>{t('Platform')} </span>
              <p>{platformPoints}</p>
            </div>
          </EloCardStyles.Distribution>
        </EloCardStyles.Container>
      </div>
    </div>
  );
};
