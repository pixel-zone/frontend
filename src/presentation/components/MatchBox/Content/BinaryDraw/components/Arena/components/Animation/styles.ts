import styled from '@emotion/styled';
import { keyframes } from '@emotion/css';

const creatorFight = keyframes`
  from {
    transform: translatex(-6.25rem);      
  }
  to {
    transform: translatex(0);
    visibility: hidden;
    opacity: 0;        
  }
`;

const creatorAttack = keyframes`
  from { 
    transform: rotateY(170deg) translatex(0);
    visibility: hidden;
    opacity: 0;
  }
  to {
    transform: rotateY(170deg) translatex(-4.375rem);
    visibility: visible;
    opacity: 1;
  }
`;

const opponentFight = keyframes`
    from {
      transform: rotateY(170deg) translatex(-6.25rem);
    }
    to {
      transform: rotateY(170deg) translatex(-0.625rem);
      visibility: hidden;
      opacity: 0;      
    }
`;

const opponentAttack = keyframes`
  from {
    transform: translatex(12.5rem);
    visibility: hidden;
    opacity: 0;
  }
  to {
    transform: translatex(8.75rem);
    visibility: visible;
    opacity: 1;
  }
`;

const winner = keyframes`
  from {
    visibility: hidden;
    opacity: 0;
  }
  to {
    visibility: visible;
    opacity: 1;
  }
`;

const hidden = `
  visibility: hidden !important;
  opacity: 0 !important;
`;

const Container = styled.div<{
  $winner: 'creator' | 'opponent';
  $play: 'paused' | 'play';
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  #attacking {
    width: 7.5rem;
    height: 7.5rem;
    animation: ${({ $winner }) =>
        $winner === 'creator' ? creatorAttack : opponentAttack}
      0.5s linear forwards;
    position: absolute;
    margin-top: 1.875rem;
    left: 0;
    transition: all 0.5s;

    ${({ $play }) => ($play === 'play' ? hidden : null)};
  }

  #fighting {
    animation: ${({ $winner }) =>
        $winner === 'creator' ? creatorFight : opponentFight}
      0.6s ease-in forwards;
    transition: all 0.5s;

    ${({ $play }) => ($play === 'play' ? hidden : null)};
  }

  #opponent {
    transform: ${({ $winner }) =>
      $winner === 'creator' ? 'rotateY(170deg)' : null};
    position: absolute;
    left: ${({ $winner }) => ($winner === 'creator' ? '11.25rem' : 0)};
    transition: all 0.5s;

    ${({ $play }) => ($play === 'play' ? hidden : null)};
  }

  #winner {
    position: absolute;
    animation: ${winner} 2.5s ease-out forwards;
    animation-play-state: ${({ $play }) => $play};
  }

  img {
    width: 9rem;
    height: 9rem;
    object-fit: contain;
  }
`;

export const AnimationStyles = {
  Container,
};
