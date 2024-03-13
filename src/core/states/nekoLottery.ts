import { atom, useRecoilState } from 'recoil';

import { INekoLottery } from '../entities/NekoLottery';

const nekoLotteryState = atom({
  key: 'neko-lottery',
  default: {} as INekoLottery,
});

export const useNekoLotteryState = () => {
  const [lottery, setLottery] = useRecoilState(nekoLotteryState);

  return { lottery, setLottery };
};
