import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.125rem 0;

  svg {
    width: 12.5rem;
    height: 12.5rem;
    margin-bottom: 20px;
  }

  h4 {
    color: ${({ theme }) => theme.colors.neutral['01']};
    font-size: 2.375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 1.25rem;
  }

  p {
    color: ${({ theme }) => theme.colors.neutral['01']};
    margin-bottom: 5rem;
  }
`;

export const NotFoundStyles = {
  Container,
};
