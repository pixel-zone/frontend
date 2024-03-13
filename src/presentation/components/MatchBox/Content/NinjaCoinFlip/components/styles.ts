import { Box } from '@/presentation/components/Box/Box';
import Image from 'next/image';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/css';

const headsWin = keyframes`
  from { 
    transform: rotateY(0) 
  }
  to { 
    transform: rotateY(1800deg) 
  }
`;

const headsLose = keyframes`
  from { 
    transform: rotateY(0) 
  }
  to { 
    transform: rotateY(1980deg) 
  }
`;

const tailsWin = keyframes`
  from { 
    transform: rotateY(0) 
  }
  to { 
    transform: rotateY(1800deg)
  }
`;

const tailsLose = keyframes`
  from { 
    transform: rotateY(0) 
  }
  to { 
    transform: rotateY(1980deg)
  }
`;

const Flip = styled.div<{ win: 'heads' | 'tails' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  img {
    position: absolute;
    width: 8rem;
    height: 8rem;
    object-fit: contain;
    transition: transform 1s ease-in;
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }

  #heads {
    animation: ${({ win }) => (win === 'heads' ? headsWin : headsLose)} 2.5s
      ease-out forwards;
    ${({ win }) => (win === 'heads' ? 'transform: rotateY(180deg)' : null)};
  }

  #tails {
    animation: ${({ win }) => (win === 'tails' ? tailsWin : tailsLose)} 2.5s
      ease-out forwards;
    ${({ win }) => (win === 'tails' ? 'transform: rotateY(180deg)' : null)};
  }
`;

const ImageCoin = styled(Image)`
  width: 6.25rem;
  height: 6.25rem;
  object-fit: contain;
`;

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  background-color: rgba(17, 17, 5, 0.8);

  svg {
    circle {
      stroke: ${({ theme }) => theme.colors.primary['03']};
    }
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: -35px;

  p {
    color: ${({ theme }) => theme.colors.primary['03']};
    font-weight: 500;
    font-size: 0.75rem;
  }

  button {
    width: 90px;
    height: 25px;
  }
`;

export const ArenaStyles = {
  Flip,
  ImageCoin,
  Loading,
  Header
};
