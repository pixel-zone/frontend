import Image from 'next/image';

import turkeyIcon from '@/presentation/assets/turkey-us.png';
import usIcon from '@/presentation/assets/us-lang.png';
import ptIcon from '@/presentation/assets/pt-lang.png';

export const languages = [
  {
    lang: 'en',
    img: <Image src={usIcon} alt="united states" />,
  },
  {
    lang: 'pt',
    img: <Image src={ptIcon} alt="portugues" />,
  },
];
