import { border, borderBottom } from '@mui/system';
import styled from '@emotion/styled';

interface IMenuItemProps {
  $isDisabled?: boolean;
  $isSelected?: boolean;
  $margin?: string;
}

const Container = styled.div<{ close: boolean }>`
  position: relative;
  width: 287px;
  min-width: 15rem;
  height: calc(100vh - 5rem);
  background: #111105;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 965px) {
    display: ${({ close }) => (close ? 'none' : 'flex')};
    position: absolute;
    z-index: 50;
    width: 100%;
    overflow-y: auto;
    padding-bottom: 3rem;
    background-color: ${({ theme }) => theme.colors.primary['01']};
  }
`;

const Connect = styled.div`
  display: none;
  height: 5rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: 10px;
  z-index: 10;
  /* overflow-y: auto; */

  @media (max-width: 965px) {
    display: flex;
    gap: 1rem 0;
    flex-direction: column;
  }

  &::before {
    content: '';
    z-index: -1;
    display: block;
    position: absolute;
    inset: 0;
    top: -10px;
    width: 250px;
    left: -32px;
    padding: 0.15rem 0 0 0;
    background: linear-gradient(
      270deg,
      ${({ theme }) => theme.colors.primary['02']} 0%,
      ${({ theme }) => theme.colors.primary['01']} 50%,
      ${({ theme }) => theme.colors.primary['02']} 100%
    );
    -webkit-mask: ${({
      theme,
    }) => `linear-gradient( ${theme.colors.neutral['01']} 0 0) content-box,
      linear-gradient(${theme.colors.neutral['01']} 0 0)`};
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  #connect {
    width: 80%;
  }
`;

const Account = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 0.5rem;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.colors.neutral['01']};
  background-color: ${({ theme }) => theme.colors.primary['01']};
  border-radius: 0.5rem;
  width: 100%;
  height: 2rem;

  button {
    color: ${({ theme }) => theme.colors.neutral['01']};
    text-decoration: underline;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

const Content = styled.div`
  width: 100%;

  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.35rem 0;

  @media (max-width: 965px) {
    justify-content: unset;
    overflow-y: auto;
  }
`;

const Item = styled.div<IMenuItemProps>`
  position: relative;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.neutral['01']};
  border: ${({ $isSelected, theme }) =>
    $isSelected ? ` 1px solid #676711` : 'transparent'};
  font-size: 0.85rem;
  min-width: 10rem;
  background: ${({ $isSelected, theme }) =>
    $isSelected
      ? `
  #292909;
      `
      : 'none'};
  z-index: 11;
  height: 2.75rem;
  font-weight: 700;
  opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 1)};
  margin: ${({ $margin }) => $margin || 'unset'};
  margin-bottom: 1rem;

  cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background: ${({ $isDisabled }) => (!$isDisabled ? `  #292909` : 'none')};
    backdrop-filter: blur(10px);
    border: 1px solid #676711;
  }

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.75rem;
    gap: 0 0.5rem;
  }
`;

const SocialMedia = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 50px;
  left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialMediaItem = styled.div<IMenuItemProps>`
  position: relative;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.neutral['01']};
  font-size: 0.875rem;
  background: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.primary['01'] : 'none'};
  z-index: 11;
  opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 1)};
  cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background: linear-gradient(
      115deg,
      rgba(7, 140, 255, 0.5),
      rgba(0, 242, 254, 0.8)
    );
    backdrop-filter: blur(10px);
  }

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.75rem;
    gap: 0 0.5rem;
  }
`;

export const MenuStyles = {
  Container,
  Content,
  Item,
  SocialMediaItem,
  SocialMedia,
  Connect,
  Account,
};
