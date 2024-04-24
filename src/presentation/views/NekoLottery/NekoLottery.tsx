import { Grid } from '@mui/material';
import Image from 'next/image';

import nekoLotteryIcon from '@/presentation/assets/neko-v2.webp';

import { NekoLotteryStyles } from './styles';
import { Header } from './components/Header/Header';
import { Details } from './components/Details/Details';
import { HowToPlay } from './components/HowToPlay/HowToPlay';

export const NekoLottery: React.FC = () => {
  return (
    <NekoLotteryStyles.Container>
      <Header />
      <Details />
    </NekoLotteryStyles.Container>
  );
};
