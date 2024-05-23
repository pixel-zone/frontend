import { Grid } from '@mui/material';
import Image from 'next/image';

import QuantumLotteryIcon from '@/presentation/assets/neko-v2.webp';

import { QuantumLotteryStyles } from './styles';
import { Header } from './components/Header/Header';
import { Details } from './components/Details/Details';

export const QuantumLottery: React.FC = () => {
  return (
    <QuantumLotteryStyles.Container>
      <Header />
      <Details />
    </QuantumLotteryStyles.Container>
  );
};
