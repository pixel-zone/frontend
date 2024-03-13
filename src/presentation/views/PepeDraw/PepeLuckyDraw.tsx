import Image from 'next/image';

import { PepeBattleRoyale } from '@/presentation/components/MatchBox/Content/PepeDraw/PepeDraw';

import pepeIcon from '@/presentation/assets/pepe-v2.webp';
import chadPepe from '@/presentation/assets/chad-pepe.webp';
import { PepeLuckyDrawStyles } from './styles';

export const PepeLuckyDraw: React.FC = () => {
  return (
    <PepeLuckyDrawStyles.Container>
      <PepeLuckyDrawStyles.Title>
        <Image src={chadPepe} alt="Frog logo" height={75} />
        <p>Chads Draw </p>
      </PepeLuckyDrawStyles.Title>
      <PepeBattleRoyale />
    </PepeLuckyDrawStyles.Container>
  );
};
