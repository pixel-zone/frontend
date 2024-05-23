import { StaticImageData } from 'next/image';

//coin flip images
import headCoin from '@/presentation/assets/ninja-coin.png';

//binary draw images
import ninjaGreen from '@/presentation/assets/pvp-battles/ninja-green-slot.png';
import ninjaYellow from '@/presentation/assets/pvp-battles/ninja-yellow-slot.png';
import ninjaGray from '@/presentation/assets/pvp-battles/ninja-gray-slot.png';

interface ICyberCoinFlipSkinProps {
  id: number;
  image: StaticImageData;
  price: number;
  isPurchased?: boolean;
}

interface IBinaryDrawSkinProps {
  id: number;
  image: StaticImageData;
  price: number;
}

export const cyberCoinFlipSkins: ICyberCoinFlipSkinProps[] = [
  {
    id: 1,
    image: headCoin,
    price: 500,
    isPurchased: true,
  },
  {
    id: 2,
    image: headCoin,
    price: 750,
    isPurchased: true,
  },
  {
    id: 3,
    image: headCoin,
    price: 1000,
  },
  {
    id: 4,
    image: headCoin,
    price: 1250,
  },
  {
    id: 5,
    image: headCoin,
    price: 1500,
  },
  {
    id: 6,
    image: headCoin,
    price: 2000,
  },
];

export const binaryDrawSkins: IBinaryDrawSkinProps[] = [
  {
    id: 1,
    image: ninjaGray,
    price: 500,
  },
  {
    id: 2,
    image: ninjaYellow,
    price: 750,
  },
  {
    id: 3,
    image: ninjaGreen,
    price: 1000,
  },
];
