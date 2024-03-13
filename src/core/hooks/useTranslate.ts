import i18n from '../../configs/i18n/i18n';

import { ILanguages, useLanguages } from '../states/languages';

export const useTranslate = () => {
  const { setLanguage, language } = useLanguages();

  return {
    setLanguage: (lang: ILanguages) => {
      setLanguage(lang);
      i18n.changeLanguage(lang);
    },
    language,
  };
};
