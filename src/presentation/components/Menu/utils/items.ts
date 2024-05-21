import tournament from '@/presentation/assets/katanas.png';
import coinIcon from '@/presentation/assets/coin-icon.png';
import lottery from '@/presentation/assets/lottery.png';
import leaderboard from '@/presentation/assets/leaderboard.png';

export const menuItems = [
  {
    label: 'Cyber Coin Flip',
    logo: coinIcon,
    path: '/cyber-flip',
    disabled: false,
  },
  {
    label: 'Binary Draw',
    logo: tournament,
    path: '/binary-draw',
    disabled: false,
  },

  {
    label: 'Quantum Lottery',
    logo: lottery,
    path: '/quantum-lottery',
    disabled: false,
  },
  {
    label: 'Leaderboard',
    logo: leaderboard,
    path: '/leaderboard',
  },
  {
    label: 'Skins Store',
    logo: leaderboard,
    path: '/skins-store',
  },
  {
    label: 'My Skins',
    logo: leaderboard,
    path: '/my-skins',
  },
];
