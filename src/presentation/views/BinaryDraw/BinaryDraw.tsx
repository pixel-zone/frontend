import Image from 'next/image';

import { BinaryDraw } from '@/presentation/components/MatchBox/Content/BinaryDraw/BinaryDraw';

import pepeIcon from '@/presentation/assets/pepe-v2.webp';

import { BinaryDrawStyles } from './styles';

export const BinaryDrawView: React.FC = () => {
  return (
    <BinaryDrawStyles.Container>
      {/* <BinaryDrawStyles.Title>
        <Image src={pepeIcon} alt="Frog logo" height={75} />
        <p>Pepe Pvp</p>
      </BinaryDrawStyles.Title> */}

      <BinaryDraw />
    </BinaryDrawStyles.Container>
  );
};
