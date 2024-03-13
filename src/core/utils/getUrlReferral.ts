export const getUrlReferral = () => {
  if (typeof window !== 'undefined') {
    return `${window?.location?.origin}`;
  }
};
