import styled from '@emotion/styled';
import { Grid } from '@mui/material';

import hightlight from '@/presentation/assets/highlight.png';

const Content = styled(Grid)`
  position: relative;
  height: 24rem;
  width: 100%;
  background: linear-gradient(115deg, #273909, #ddfe02);
  background-size: cover;

  padding: 5rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid #676711;

  > div {
    position: absolute;
    right: 150px;

    @media (max-width: 600px) {
      display: flex;
      position: relative;
      right: unset;
      margin-bottom: 20rem;
    }
  }

  h5 {
    width: 25.75rem;
    font-weight: 700;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.neutral['01']};
  }

  p {
    width: 25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.neutral['01']};
  }

  @media (max-width: 600px) {
    height: 100dvh;
    background-position: cover;
    padding: 19rem 1rem 1rem;
    justify-content: flex-end;

    h5 {
      width: 100%;
    }

    p {
      width: 100%;
    }
  }
`;

const HomeText = styled.div`
  > h5 {
    max-width: 43.75rem;
    font-weight: 700;
    width: 100%;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.neutral['01']};

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
`;

const AdContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > img {
    width: 120%;
    max-width: 600px;
    object-fit: scale-down;

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  @media (max-width: 600px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const HighLighStyles = {
  Content,
  HomeText,
  AdContainer,
};
