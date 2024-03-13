import ninjaCoinFlip from '@/presentation/assets/ninja-coin-flip-game.png';
import nekoGame from '@/presentation/assets/neko-game.png';
import pepeDraw from '@/presentation/assets/pepe-draw-game.png';
import connectFour from '@/presentation/assets/connect-four-game.png';
import chessGame from '@/presentation/assets/chess-game.png';
import jogame from '@/presentation/assets/jo-game.png';
import tournamentsGame from '@/presentation/assets/tournaments-game.png';
import bingoGame from '@/presentation/assets/bingo-game.png';
import coinsFloat from '@/presentation/assets/coins-float.png';
import ticketsFloat from '@/presentation/assets/tickets-float.png';

export const games = [
  {
    name: 'Cyber Coin Flip',
    blocked: false,
    link: '/cyber-flip',
    bgImage: coinsFloat,
  },
  {
    name: 'Quantum Lottery',
    blocked: false,
    link: '/quantum-lottery',
    bgImage: ticketsFloat,
  },
  {
    name: 'Binary Draw ',
    blocked: false,
    link: '/binary-draw',
    bgImage: '',
  },
  {
    name: 'Connect Four',
    blocked: true,
    link: '/connect-four',
    bgImage: '',
  },
  {
    name: 'Xadrez',
    blocked: true,
    link: '/',
    bgImage: '',
  },
];
