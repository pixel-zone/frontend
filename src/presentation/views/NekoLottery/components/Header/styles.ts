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
  background-image: url(${background.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color: ${({ theme }) => theme.colors.primary['04']};
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid;
  border-right: 1px solid;

  #sideLeft {
    animation: 3s ease-in-out 0s infinite normal none running ${sideLeftEffect};
  }

  #sideRight {
    animation: 3s ease-in-out 0s infinite normal none running ${sideRightEffect};
  }

  #ticket {
    animation: ${ticketEffect} 2s linear infinite;
    transition: 0.5s all;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(3, 242, 254, 0) 45%,
      rgba(3, 1, 20, 1) 80%
    );
  }
`;   

const infosLottery = styled.div`
  text-align: center;
  z-index: 10;
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
