export const formatAddress = ({ address }: { address: string }) => {
  if (!address) {
    return '-';
  }

  const format = `${address?.slice(0, 4)}...${address?.slice(-4)}`;

  return format;
};
