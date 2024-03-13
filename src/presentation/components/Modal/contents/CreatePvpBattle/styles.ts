import Image from 'next/image';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 38rem;
  background-color: ${({ theme }) => theme.colors.primary['04']};
  border-radius: 0.5rem;
  padding: 1.5625rem;
  position: relative;

  button {
    width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary['01']};
  padding-bottom: 0.5rem;
  height: 3rem;

  svg {
    width: 0.9375rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.neutral['01']};
  }

  h4 {
    color: ${({ theme }) => theme.colors.neutral['01']};
    font-size: 1.2rem;
    text-transform: uppercase;
  }
`;

const Content = styled.div<{ $isWarningVisible?: boolean }>`
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    div {
      display: flex;
      flex-direction: column;

      small {
        font-size: 0.8rem;
        font-weight: 300;
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

      > span {
        color: red;
        font-size: 0.8rem;
        visibility: ${({ $isWarningVisible }) =>
          $isWarningVisible ? 'visible' : 'hidden'};
        margin: 0.5rem 0 -0.5rem 0;
      }

      label {
        color: ${({ theme }) => theme.colors.neutral['01']};
        margin-bottom: 1rem;
        font-weight: 600;
        font-size: 1rem;
        display: block;
      }

      div {
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5rem 0;
      }
    }

    button {
      margin-top: 1.2rem;
    }
  }
`;

const ImageNinja = styled(Image)<{ $selected: boolean; $disabled: boolean }>`
  width: 110px;
  height: 110px;
  object-fit: contain;
  opacity: ${({ $selected }) => ($selected ? '1' : '0.5')};
  cursor: pointer;
  display: ${({ $disabled }) => ($disabled ? 'none' : 'block')};
`;

export const CreatePvpBattleStyles = {
  Container,
  Header,
  Content,
  ImageNinja,
};
