import { atom, useRecoilState } from 'recoil';

export type ILanguages = 'en' | 'pt';

const languagesState = atom({
  key: 'languages',
  default: 'en' as ILanguages,
});

export const useLanguages = () => {
  const [language, setLanguage] = useRecoilState(languagesState);

  return { language, setLanguage };
};
