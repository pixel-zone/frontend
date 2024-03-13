import Image from 'next/image';

import ninjaCoinWhite from '@/presentation/assets/ninja-coin-v2.webp';
import { NinjaCoinFlipPvp } from '@/presentation/components/MatchBox/Content/NinjaCoinFlip/NinjaCoinFlip';

import { NinjaCoinFlipStyles } from './styles';

export const NinjaCoinFlip: React.FC = () => {
  return (
    <NinjaCoinFlipStyles.Container>
      <NinjaCoinFlipPvp />
    </NinjaCoinFlipStyles.Container>
  );
};
