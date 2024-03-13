import styled from '@emotion/styled';

const Container = styled.section`
  width: 100%;
  height: 31.25rem;
  min-height: 18rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  h4 {
    color: ${({ theme }) => theme.colors.primary['03']};
    font-size: 2rem;
    margin-bottom: 5rem;
  }
`;

const Step = styled.div`
  width: 100%;
  min-height: 18rem;
  background-color: ${({ theme }) => theme.colors.primary['04']};
  padding: 1rem;
  border-radius: 0.5rem;

  small {
    background-color: ${({ theme }) => theme.colors.primary['02']};
    color: ${({ theme }) => theme.colors.neutral['01']};
    padding: 0.5rem;
    text-align: right;
  }

  h5 {
    font-size: 1.6rem;
    width: 100%;
    text-align: center;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.neutral['01']};
  }

  p {
    width: 100%;
    text-align: center;
    margin-top: 2rem;
    color: ${({ theme }) => theme.colors.neutral['01']};
  }
`;

export const HowToPlayStyles = {
  Container,
  Step,
};
