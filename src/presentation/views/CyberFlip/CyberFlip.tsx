import Image from 'next/image';

import ninjaCoinWhite from '@/presentation/assets/ninja-coin-v2.webp';
import { CyberFlipPvp } from '@/presentation/components/MatchBox/Content/CyberFlip/CyberFlip';

import { CyberFlipStyles } from './styles';

export const CyberFlip: React.FC = () => {
  return (
    <CyberFlipStyles.Container>
      <CyberFlipPvp />
    </CyberFlipStyles.Container>
  );
};
