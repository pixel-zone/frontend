import frogCoin from '@/presentation/assets/frog-icon.webp';
import neko from '@/presentation/assets/nekoicon.webp';
import discord from '@/presentation/assets/rounded.webp';
import jokenpo from '@/presentation/assets/jo-ken-po.webp';
import chess from '@/presentation/assets/chess-v2.webp';
import twitter from '@/presentation/assets/twitter.webp';
import telegram from '@/presentation/assets/telegram.webp';
import tournament from '@/presentation/assets/katanas.png';
import docs from '@/presentation/assets/sketchbook.png';
import website from '@/presentation/assets/website.png';
import bingo from '@/presentation/assets/bingo-v2.webp';
import profile from '@/presentation/assets/profile.webp';
import coinIcon from '@/presentation/assets/coin-icon.png';
import connectfourIcon from '@/presentation/assets/connectfour.webp';
import chadPepe from '@/presentation/assets/chad-pepe.webp';
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

  // {
  //   label: 'Chads Draw',
  //   logo: chadPepe,
  //   path: '/chads-draw',
  //   disabled: false,
  // },
  // {
  //   label: 'Connect four',
  //   logo: connectfourIcon,
  //   path: '/connect-four',
  //   disabled: true,
  // },
  // {
  //   label: 'Chess',
  //   logo: chess,
  //   path: '/chess',
  //   disabled: true,
  // },
  // {
  //   label: 'Battleship',
  //   logo: jokenpo,
  //   path: '/battleship',
  //   disabled: true,
  // },
  // {
  //   label: 'Bingo',
  //   logo: bingo,
  //   path: '/bingo',
  //   disabled: true,
  // },

  // {
  //   label: 'Tournaments',
  //   logo: tournament,
  //   path: '/tournaments',
  //   disabled: true,
  // },
  {
    label: 'Leaderboard',
    logo: leaderboard,
    path: '/leaderboard',
    disabled: true,
  },
  // {
  //   label: 'Account',
  //   logo: profile,
  //   path: '/account',

  //   disabled: false,
  //   margin: '1.25rem 0 0.5rem 0',
  // },
];
