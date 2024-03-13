import { atom, useRecoilState } from 'recoil';
import { IBattles } from '../entities/PvPBattles';

const pepeDrawPvPState = atom({
  key: 'pvp-battles',
  default: [] as IBattles[],
});

export const usePvPBattlesState = () => {
  const [pvpBattles, setPvpBattles] = useRecoilState(pepeDrawPvPState);

  return { pvpBattles, setPvpBattles };
};
