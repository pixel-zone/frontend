import { atom, useRecoilState } from 'recoil';
import { IMemecoinFlip } from '../entities/MemecoinFlip';

const memecoinFlipState = atom({
  key: 'memecoin-flip',
  default: [] as IMemecoinFlip[],
});

export const useMemecoinFlipState = () => {
  const [memecoins, setMemecoins] = useRecoilState(memecoinFlipState);

  return { memecoins, setMemecoins };
};
