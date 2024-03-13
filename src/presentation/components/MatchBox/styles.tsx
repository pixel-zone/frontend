import styled from '@emotion/styled';

interface IMatchBoxProps {
  $$isSelected?: boolean;
  $margin?: string;
  win?: boolean;
}

const Title = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 0 2rem;

  span {
    color: ${({ theme }) => theme.colors.neutral['01']};
    margin: 0 0.5rem;
  }

  h4 {
    color: ${({ theme }) => theme.colors.primary['03']};
    font-size: 1.5rem;
    margin-right: 1rem;
  }

  button {
    background-color: ${({ theme }) => theme.colors.primary['03']};
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.neutral['01']};
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;

const SidesBattleContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 5rem;
  flex-wrap: wrap;
  @media (max-width: 680px) {
    display: block;
  }

  > div {
    @media (max-width: 680px) {
      &:first-child {
        margin-bottom: 5rem;
      }
    }
  }

  > span {
    position: absolute;
    left: 47%;
    top: 50%;
    color: ${({ theme }) => theme.colors.primary['03']};
    font-weight: 700;
    font-size: 2rem;

    @media (max-width: 680px) {
      top: 52%;
    }
  }

  > small {
    position: absolute;
    left: 45%;
    top: 75px;
    color: ${({ theme }) => theme.colors.primary['03']};
    font-weight: 700;
    font-size: 1.5rem;
  }

  > p {
    position: absolute;
    left: 0px;
    top: -30px;
    color: ${({ theme }) => theme.colors.primary['03']};
    font-weight: 500;
    font-size: 0.75rem;
  }
`;

const SidesPvpContainer = styled.div<{ fighting?: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  transition: all 1s ease-in-out;

  ${({ fighting }) =>
    fighting
      ? `
  :not(#gif) {
    filter: blur(4px);
  }`
      : null}

  > span {
    position: absolute;
    left: 47%;
    top: 50%;
    color: ${({ theme }) => theme.colors.primary['03']};
    font-weight: 700;
    font-size: 2rem;
  }

  > small {
    position: absolute;
    left: 45%;
    top: 75px;
    color: ${({ theme }) => theme.colors.primary['03']};
    font-weight: 700;
    font-size: 1.5rem;
  }

  > p {
    position: absolute;
    left: 0px;
    top: -30px;
    color: ${({ theme }) => theme.colors.primary['03']};
    font-weight: 500;
    font-size: 0.75rem;
  }
`;

const SidePvp = styled.div<IMatchBoxProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: ${({ theme, $$isSelected }) =>
    $$isSelected ? theme.colors.neutral['green'] : theme.colors.primary['04']};
  height: 9.75rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.neutral['01']};
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  width: 7rem;

  > button {
    width: 6.5rem;
    height: 2rem;
    margin-bottom: -1.5rem;
  }

  > div {
    width: fit-content;
    padding: 0.25rem 0.5rem;
    background: ${({ theme }) => theme.colors.primary['01']};
    margin: ${({ $margin }) => $margin || 'unset'};
    border-radius: 0.5rem;
  }
`;

const SideBattleRoyale = styled.div<IMatchBoxProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme, $$isSelected }) =>
    $$isSelected ? theme.colors.neutral['green'] : theme.colors.primary['04']};
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
  }

  > p {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.neutral['01']};
    margin: -2.5rem 0 0.5rem 0;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: ${({ theme }) => theme.colors.primary['01']};
    padding: 0.75rem 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    gap: 0 0.5rem;

    > span {
      font-size: 0.625rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.neutral['01']};
    }
  }
`;
const PvPMatchesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding-bottom: 4rem;
  transition: all 1s ease-in-out;
`;

const BattleRoyaleMatchesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding-bottom: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary['01']};
  padding: 2rem 1rem 2.25rem 1rem;
  border-radius: 0.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 5rem;
  margin-bottom: 0.25rem;

  > p {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    color: ${({ theme }) => theme.colors.neutral['01']};
  }

  small {
    font-size: 1rem;
    font-weight: 300;
    margin-left: 1rem;
  }
`;

export const MatchBoxStyles = {
  Content,
  Title,
  PvPMatchesContainer,
  BattleRoyaleMatchesContainer,
  SidesBattleContainer,
  SidesPvpContainer,
  SidePvp,
  SideBattleRoyale,
  ButtonContainer,
};
