import { atom, useRecoilState } from 'recoil';

const menuState = atom({
  key: 'menu',
  default: true,
});

export const useMenu = () => {
  const [menu, setMenu] = useRecoilState(menuState);

  return { menu, setMenu: () => setMenu(!menu) };
};
