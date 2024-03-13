import { atom, useRecoilState } from 'recoil';

const AuthAtom = atom({
  key: 'auth',
  default: false,
});

export const useAuthState = () => {
  const [auth, setAuth] = useRecoilState(AuthAtom);

  return { auth, setAuth };
};
