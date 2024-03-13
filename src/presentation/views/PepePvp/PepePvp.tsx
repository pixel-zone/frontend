import Image from 'next/image';

import { PepePvp } from '@/presentation/components/MatchBox/Content/PepePvp/PepePvp';

import pepeIcon from '@/presentation/assets/pepe-v2.webp';

import { PepePvpStyles } from './styles';

export const PepePvpView: React.FC = () => {
  return (
    <PepePvpStyles.Container>
      {/* <PepePvpStyles.Title>
        <Image src={pepeIcon} alt="Frog logo" height={75} />
        <p>Pepe Pvp</p>
      </PepePvpStyles.Title> */}

      <PepePvp />
    </PepePvpStyles.Container>
  );
};
