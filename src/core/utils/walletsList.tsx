import Image from 'next/image';

import metaMaskIcon from '@/presentation/assets/wallet/metamask.svg';
import keplrIcon from '@/presentation/assets/wallet/keplr.svg';
import trustIcon from '@/presentation/assets/wallet/trust.svg';

import { keplr, metamask } from './wallets';

export const wallets = [
  {
    icon: <Image src={metaMaskIcon} alt="metamask" width={50} height={50} />,
    name: 'MetaMask',
    description: 'Connect using browser wallet',
    label: !metamask(),
  },
  {
    icon: <Image src={keplrIcon} alt="keplr" width={50} height={50} />,
    name: 'Keplr',
    description: 'Connect using browser wallet',
    label: !keplr(),
  },
  {
    icon: <Image src={trustIcon} alt="trust wallet" width={50} height={50} />,
    name: 'TrustWallet',
    description: 'Connect using browser wallet',
    label: !keplr(),
  },
];
