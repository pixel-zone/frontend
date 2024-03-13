import styled from '@emotion/styled';

const Box = styled.div<{ $height?: string; margin?: string }>`
  width: 100%;
  height: ${({ $height }) => $height || 'fit-content'};
  margin: ${({ margin }) => margin};
  background-color: ${({ theme }) => theme.colors.primary['04']};
  border: 1px solid #676711;
  padding: 1.5rem 1.5rem 2rem 1.5rem;

  > h1 {
    color: ${({ theme }) => theme.colors.primary['03']};
    font-size: 1.45rem;
    font-weight: 700;
  }
`;

const Referral = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    color: ${({ theme }) => theme.colors.primary['03']};
    font-size: 1.35rem;
    font-weight: 700;
  }

  div {
    > p {
      font-size: 0.715rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.neutral['01']};
      margin-top: 0.5rem;
      margin-bottom: -0.5rem;
    }
    .copyText {
      position: absolute;
      background-color: ${({ theme }) => theme.colors.primary['03']};
      width: 13rem;
      white-space: nowrap;
      border-radius: 0.2rem;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    div {
      position: relative;
      display: flex;
      align-items: center;
      margin-top: 2rem;

      input {
        width: 100%;
        height: 2.5rem;
        border-radius: 0.5rem;
        border: 0;
        padding: 0 5.5rem 0 0.5rem;
        color: ${({ theme }) => theme.colors.neutral['01']};
        background: ${({ theme }) => theme.colors.primary['02']};
      }

      button {
        position: absolute;
        right: 0;
        width: 5rem;
        height: 2.5rem;
      }
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem 2rem;
`;

const Title = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin: -0.25rem 0 0 0;
  color: ${({ theme }) => theme.colors.neutral['01']};
  margin-left: -1rem;
  height: 4rem;

  @media (max-width: 965px) {
    justify-content: center;
  }

  > img {
    margin-right: -0.5rem;
  }
`;

const BalancesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 80%;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const Balances = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.primary['03']};
  height: 100%;
  font-weight: 700;
  gap: 1rem;

  @media (max-width: 965px) {
    width: 100%;
    align-items: center;
  }

  > h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.primary['03']};
    font-size: 1.35rem;
    font-weight: 700;

    > div {
      position: relative;
      transition: all 0.2s ease-in-out;

      &:hover {
        > small {
          display: block;
        }
      }

      > img {
        cursor: pointer;
        margin-bottom: -0.1rem;
      }
    }
  }

  > span {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
    font-size: 1.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.neutral['01']};

    > small {
      font-size: 0.75rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.neutral['green']};
      text-align: left;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    align-items: flex-start;
    font-size: 1.35rem;
    > span {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0 0.5rem;
      font-size: 1rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.neutral['01']};

      &:nth-child(2) {
        opacity: 0.5;
        cursor: not-allowed;
      }

      &:nth-child(3) {
        opacity: 0.5;
        cursor: not-allowed;
        > img {
          border-radius: 50%;
        }
      }
    }

    > small {
      font-size: 0.75rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.neutral['01']};
      text-align: left;
    }

    > button {
      margin-top: 0.5rem;
    }
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const PlayerStats = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4rem;
  color: ${({ theme }) => theme.colors.primary['03']};
  font-size: 1.35rem;
  font-weight: 700;
  flex-wrap: wrap;
  @media (max-width: 965px) {
    gap: 3rem 0;
    justify-content: center;
  }

  > div {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    flex-wrap: wrap;
    @media (max-width: 965px) {
      align-items: center;
    }

    > div {
      @media (max-width: 965px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      > button {
        margin-top: 1.5rem;
      }
    }
  }
`;

const PointsTasksContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  width: calc(100% - 25rem);

  > div {
    position: relative;
    transition: all 0.2s ease-in-out;

    > p {
      > img {
        cursor: pointer;
        margin-bottom: -0.075rem;
      }

      &:hover {
        > small {
          display: block;
        }
      }
    }
  }

  @media (max-width: 965px) {
    width: 100%;
    align-items: center;
  }
`;

const PointsTasks = styled.div`
  max-height: 17rem;
  width: 100%;
  overflow-y: scroll;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    width: 100%;
  }
`;

const AdminContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0 5rem;
  flex-wrap: wrap;

  > div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem 0.5rem;
    color: ${({ theme }) => theme.colors.neutral['01']};
    margin-top: 2rem;
    background: ${({ theme }) => theme.colors.primary['04']};
    padding: 1rem;
    border-radius: 0.25rem;
    flex-wrap: wrap;

    > h2 {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      font-size: 1.35rem;
      font-weight: 700;
    }

    > span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }
  }

  > p {
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.neutral['01']};
  }
`;

const BalancesOverview = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  flex-direction: column;

  > h1 {
    color: ${({ theme }) => theme.colors.primary['03']};
    font-size: 1.45rem;
    font-weight: 700;
  }
`;
export const AccountStyles = {
  Box,
  Container,
  Title,
  PlayerStats,
  PointsTasksContainer,
  PointsTasks,
  AdminContainer,
  Balances,
  BalancesContainer,
  BalancesOverview,
  StatsContainer,
  Referral,
};
