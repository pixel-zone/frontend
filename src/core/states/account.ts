import { atom, useRecoilState } from 'recoil';

const accountAtom = atom({
  key: 'account',
  default: '',
});

export const useAccountState = () => {
  const [account, setAccount] = useRecoilState(accountAtom);

  return { account, setAccount };
};
