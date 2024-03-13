export const metamask = () => {
  if (typeof window !== 'undefined') {
    return window?.ethereum;
  }

  return null;
};

export const keplr = () => {
  if (typeof window !== 'undefined') {
    return (window as any)?.keplr;
  }

  return null;
};
