import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: fit-content;
  background: rgb(32, 36, 49);
  background: ${({ theme }) => theme.colors.primary['04']};
  border: 1px solid #676711;
  border-radius: 0.5rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  h4 {
    color: ${({ theme }) => theme.colors.neutral['01']};
    margin-bottom: 0.9375rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${({ theme }) => theme.colors.primary['03']};
    }
  }

  p {
    color: ${({ theme }) => theme.colors.neutral['01']};
    opacity: 0.6;
    font-weight: 400;
    font-size: 0.875rem;
  }
`;

export const ExplantionsStyles = {
  Container,
  Content,
};
