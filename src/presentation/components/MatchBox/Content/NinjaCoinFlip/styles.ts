import styled from '@emotion/styled';

const Info = styled.div`
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

const Slot = styled.div`
  width: 20rem;
  height: 14rem;
  background-color: ${({ theme }) => theme.colors.primary['01']};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.neutral['01']};
    opacity: 0.5;
  }
`;

export const NinjaCoinFlipStyles = {
  Info,
  Slot,
};
