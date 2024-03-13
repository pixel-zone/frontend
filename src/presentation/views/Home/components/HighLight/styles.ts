import styled from '@emotion/styled';
import { Grid } from '@mui/material';

import hightlight from '@/presentation/assets/highlight.png';
import hightlightMobile from '@/presentation/assets/highlight-mobile.png';

const Content = styled(Grid)`
  position: relative;
  height: 24rem;
  width: 100%;
  background: linear-gradient(115deg, #273909, #ddfe02);
  background-size: cover;
  background-repeat: no-repeat;
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
  }

  h5 {
    width: 43.75rem;
    font-weight: 700;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.neutral['01']};
  }

  p {
    width: 25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.neutral['01']};
  }

  @media (max-width: 600px) {
    height: 100dvh;
    background-image: url(${hightlightMobile.src});
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

export const HighLighStyles = {
  Content,
};
