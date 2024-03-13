import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.colors.primary['02']};
  width: 100%;
`;

const PointsContainer = styled.div`
  height: 100%;
`;

const Points = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary['03']};
  color: ${({ theme }) => theme.colors.primary['01']};
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  padding: 0.5rem 0.25rem;
  height: 100%;
  width: 4.9rem;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.primary['01']};
    gap: 0.25rem;
  }

  > span {
    font-size: 1.2rem;
    font-weight: 700;
  }

  > p {
    font-weight: 600;
    font-size: 0.7rem;
    text-align: center;
  }
`;

const DescriptionContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 1rem;
  width: 19rem;
`;

const ButtonContainer = styled.div`
  > a {
    > button {
      width: 5rem;
      text-transform: uppercase;
    }
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.25rem;

  > div {
    font-size: 0.875rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.neutral['01']};
  }
`;

export const TaskStyles = {
  Container,
  PointsContainer,
  Points,
  DescriptionContainer,
  Description,
  ButtonContainer,
};
