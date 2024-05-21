import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/css';

import background from '@/presentation/assets/lottery-bg.png';

const ticketEffect = keyframes`
    50% {
        transform: rotate(10deg);
    }
    100% {
        transform: rotate(0deg);
    }
`;

const sideLeftEffect = keyframes`
    50% {
        transform: translatey(10px);
    }
    100% {
        transform: translatey(0px);
    }
`;

const sideRightEffect = keyframes`
    50% {
        transform: translatey(-10px);
    }
    100% {
        transform: translatey(0px);
    }
`;

const Container = styled(Grid)`
  position: relative !important;
  overflow: hidden;
  width: 100%;
  height: 30rem;
  background-color: ${({ theme }) => theme.colors.primary['04']};
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid;
  border-right: 1px solid;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 50%,
    rgba(17, 17, 5, 0.25)
  );

  &::before {
    content: '';
    position: absolute;
    background-image: url(${background.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    filter: brightness(0.15);
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

const infosLottery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  z-index: 12;

  h4 {
    color: ${({ theme }) => theme.colors.primary['03']};
    font-weight: 700;
    font-size: 3.75rem;
    position: relative;
    z-index: 10;
    white-space: nowrap;
  }

  p {
    color: ${({ theme }) => theme.colors.neutral['01']};
    font-size: 2.5rem;
    white-space: nowrap;
    font-weight: 700;
    z-index: 12;
  }
`;

const Background = styled.div`
  width: 100%;
  display: flex;
`;

export const HeaderStyles = {
  Container,
  infosLottery,
  Background,
};
