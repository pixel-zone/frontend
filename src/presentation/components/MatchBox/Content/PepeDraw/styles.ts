import styled from '@emotion/styled';

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary['03']};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  padding: 0 2rem;
  flex-wrap: wrap;

  > span {
    display: flex;
    align-items: center;

    button {
      background-color: ${({ theme }) => theme.colors.primary['03']};
    }
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 1rem;

    > p {
      font-size: 1rem;
      font-weight: 300;
      color: ${({ theme }) => theme.colors.neutral['01']};
    }
    > span {
      text-align: center;
      border-radius: 0.5rem;
      background: ${({ theme }) => theme.colors.primary['01']};
      width: 4rem;
      padding: 0.5rem;
      min-width: 2.5rem;
      white-space: nowrap;
    }
  }
`;

const YourTickets = styled.small`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primary['01']};
  color: ${({ theme }) => theme.colors.neutral['01']};
  right: 0.5rem;
  top: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

export const PepeDrawStyles = {
  Title,
  YourTickets,
};
