import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: 12rem;
  background: rgb(32, 36, 49);
  background: ${({ theme }) => theme.colors.primary['04']};
  border: 1px solid #676711;
  border-radius: 0.5rem;

  @media (max-width: 965px) {
    height: 22rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem 0;
  height: 100%;
`;

const Title = styled.h5`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.neutral['01']};
`;

const Description = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary['03']};

  > span {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.neutral['01']};
  }
`;

export const InfosStyles = {
  Container,
  Content,
  Title,
  Description,
};
