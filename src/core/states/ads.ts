import { atom, useRecoilState } from 'recoil';

export interface Ad {
  id: number;
  image: string;
  id_usuario?: number;
}
const verifiedAdAtom = atom<Ad[]>({
  key: 'adAtom',
  default: [
    {
      id: 0,
      image: '', // base64 encriptado
      id_usuario: 0,
    },
  ],
});

const notVerifiedAdAtom = atom<Ad[]>({
  key: 'adAtom',
  default: [
    {
      id: 0,
      image: '', // base64 encriptado
      id_usuario: 0,
    },
  ],
});

export const useAdsState = () => {
  const [verifiedAds, setVerifiedAds] = useRecoilState(verifiedAdAtom);
  const [notVerifiedAds, setNotVerifiedAds] = useRecoilState(notVerifiedAdAtom);

  return { verifiedAds, setVerifiedAds, notVerifiedAds, setNotVerifiedAds };
};
