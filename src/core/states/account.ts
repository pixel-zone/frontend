import { atom, useRecoilState } from 'recoil';

interface Account {
  id: number;
  username: string;
  email: string;
  points: number;
  user_type_id: number;
  items: number;
  isLogged: boolean;
}

const accountAtom = atom<Account>({
  key: 'account',
  default: {
    id: 0,
    username: '',
    email: '',
    points: 0,
    user_type_id: 1,
    items: 0,
    isLogged: false,
  },
});

export const useAccountState = () => {
  const [account, setAccount] = useRecoilState(accountAtom);

  return { account, setAccount };
};
