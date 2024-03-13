import Image from 'next/image';
import styled from '@emotion/styled';

const Container = styled.div<{ $isWarningVisible?: boolean }>`
  width: 30rem;
  background-color: ${({ theme }) => theme.colors.primary['04']};
  border-radius: 0.5rem;
  padding: 1.5625rem;
  position: relative;

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    small {
      font-size: 0.8rem;
      font-weight: 300;
    }

    label {
      color: ${({ theme }) => theme.colors.neutral['01']};
      margin-bottom: 0.5rem;
      font-weight: 600;
      font-size: 1rem;
      display: block;
    }

    input {
      width: 100%;
      height: 2.5rem;
      border-radius: 0.5rem;
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.primary['03']};
      padding: 0 0.5rem;
      color: ${({ theme }) => theme.colors.neutral['01']};
    }

    span {
      color: red;
      font-size: 0.8rem;
      visibility: ${({ $isWarningVisible }) =>
        $isWarningVisible ? 'visible' : 'hidden'};
      margin: 0.5rem 0 -0.5rem 0;
    }

    button {
      width: 100%;
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary['01']};
  padding-bottom: 0.5rem;

  svg {
    width: 0.9375rem;
    cursor: pointer;
  }

  h4 {
    color: ${({ theme }) => theme.colors.neutral['01']};
    font-size: 1.2rem;
    text-transform: uppercase;
  }
`;

const Coin = styled(Image)<{ $selected: boolean }>`
  width: 9rem;
  height: 9rem;
  object-fit: scale-down;
  filter: ${({ $selected }) => ($selected ? 'grayscale(0)' : 'grayscale(1)')};
  cursor: pointer;
  transition: all 0.1s ease-in-out;
`;

const Coins = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 10rem;

    small {
      color: ${({ theme }) => theme.colors.neutral['01']};
    }
  }
`;

export const CreateCoinFlipStyles = { Container, Coin, Header, Coins };
