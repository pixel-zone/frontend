import styled from '@emotion/styled';

const Content = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4rem 1.25rem;

  h4 {
    color: ${({ theme }) => theme.colors.neutral['01']};
    font-weight: 700;
    font-size: 2rem;
    text-align: center;
    margin: 2rem;
  }

  p {
    color: ${({ theme }) => theme.colors.neutral['01']};
    font-size: 1.2rem;

    span {
      color: ${({ theme }) => theme.colors.primary['03']};
      font-size: 1.6rem;
      font-weight: 600;
    }
  }
`;

const Details = styled.div`
  max-width: 40rem;
  width: 100%;
  height: 19.6rem;
  border-radius: 0.3125rem;
  background: rgb(32, 36, 49);
  background: ${({ theme }) => theme.colors.primary['04']};
  border: 1px solid #676711;
  margin-top: 2.5rem;
`;

const DetailsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary['01']};
  height: 3.75rem;
  padding: 0 0.9375rem;
  background-color: ${({ theme }) => theme.colors.primary['04']};
  border-top-right-radius: 0.3125rem;
  border-top-left-radius: 0.3125rem;

  p {
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
  }
`;

const DetailsContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.875rem 0.9375rem;

  div {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.neutral['01']};

    p {
      font-size: 1rem;
      font-weight: 600;
      margin-right: 0.625rem;
    }

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.primary['03']};
    }
  }
`;

const DetailsFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.primary['01']};
  height: 3.75rem;
  padding: 0 0.9375rem;
  background-color: ${({ theme }) => theme.colors.primary['04']};
  border-bottom-right-radius: 0.3125rem;
  border-bottom-left-radius: 0.3125rem;

  p {
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
  }

  div {
    display: flex;
    align-items: center;
  }
`;

const DetailsButton = styled.div`
  width: 100%;

  button {
    font-weight: 600;
    border: 0;
    background-color: transparent;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.neutral['01']};
    cursor: pointer;
  }
`;

const BuyTicketButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const DetailsStyles = {
  Content,
  Details,
  DetailsFooter,
  DetailsContent,
  DetailsHeader,
  DetailsButton,
  BuyTicketButton,
};
