import Image from 'next/image';
import { Link } from '@/presentation/components';
import { useTranslation } from 'react-i18next';

import podiumIcon from '@/presentation/assets/neko-lottery/podium.png';
import pepeBlue from '@/presentation/assets/neko-lottery/ninja-blue-lottery.webp';
import pepeGreen from '@/presentation/assets/neko-lottery/ninja-green-lottery.webp';
import pepeOrange from '@/presentation/assets/neko-lottery/ninja-orange-lottery.webp';

import { useNekoLottery } from '@/core/hooks/useNekoLottery';
import { formatAddress } from './utils/formatAddress';

import { FinishedRoundsStyles } from './styles';
import { useConfetti } from '@/core/hooks/useConfitti';

export const FinishedRounds: React.FC = () => {
  const { t } = useTranslation();

  useConfetti();

  const { lastWinners } = useNekoLottery();

  return (
    <>
      <FinishedRoundsStyles.Container>
        <FinishedRoundsStyles.Confitti id="confetti" />
        <h4>{t('Last winners')}:</h4>
        <div>
          <div>
            <Image src={pepeGreen} alt="1st" width={150} />
            {lastWinners?.winner1 ? (
              <Link
                href={`https://testnet.explorer.injective.network/account/${lastWinners?.winner1}`}
                target="_blank"
              >
                <p>{formatAddress({ address: lastWinners?.winner1 })}</p>
              </Link> 
            ) : null}
          </div>
          <div>
            <Image src={pepeBlue} alt="2st" width={150} />
            {lastWinners?.winner2 ? (
              <Link
                href={`https://testnet.explorer.injective.network/account/${lastWinners?.winner2}`}
                target="_blank"
              >
                <p>{formatAddress({ address: lastWinners?.winner2 })}</p>
              </Link> 
            ) : null}
          </div>
          <div>
            <Image src={pepeOrange} alt="3st" width={150} />
            {lastWinners?.winner3 ? (
              <Link
                href={`https://testnet.explorer.injective.network/account/${lastWinners?.winner3}`}
                target="_blank"
              >
                <p>{formatAddress({ address: lastWinners?.winner3 })}</p>
              </Link> 
            ) : null}
          </div>
          <Image src={podiumIcon} alt="podium" id="podium" />
        </div>
      </FinishedRoundsStyles.Container>
    </>
  );
};
