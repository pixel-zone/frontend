import Image from 'next/image';

import dwn from '@/presentation/assets/dwn.png';
import nlcIcon from '@/presentation/assets/nlc-icon.png';
import injLogo from '@/presentation/assets/inj-logo.png';

export const coinsList = [
  {
    icon: <Image src={injLogo} alt="INJ" width={20} height={20} />,
    name: 'INJ',
    denom: 'inj',
  },
  {
    icon: (
      <Image
        src={nlcIcon}
        alt="NinjaLabs Coin"
        width={25}
        height={25}
        style={{ objectFit: 'scale-down' }}
      />
    ),
    name: 'NLC',
    denom: 'nlc',
  },
  {
    icon: <Image src={dwn} alt="Ninja" width={25} height={25} />,
    name: 'NINJA',
    denom: 'ninja',
  },
];
