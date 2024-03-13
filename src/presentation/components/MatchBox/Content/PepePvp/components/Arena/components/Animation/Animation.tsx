import { useEffect, useState } from 'react';

import {
  ninjaAttacking,
  ninjaFighting,
  ninjaOpponent,
  ninjaWinner,
} from '../../utils/ninjas';

import { AnimationStyles } from './styles';

interface IAnimation {
  creator: number;
  opponent: number;
  winner: 'creator' | 'opponent';
}

export const Animation: React.FC<IAnimation> = ({
  creator,
  opponent,
  winner,
}) => {
  const [play, setPlay] = useState<'paused' | 'play'>('paused');

  useEffect(() => {
    setTimeout(() => {
      setPlay('play');
    }, 1000);
  }, []);

  return (
    <AnimationStyles.Container
      $winner={winner === 'creator' ? 'creator' : 'opponent'}
      $play={play}
    >
      {winner === 'creator' ? (
        <>
          {/* {ninjaAttacking[creator as keyof typeof ninjaAttacking]}
          {ninjaFighting[creator as keyof typeof ninjaFighting]}
          {ninjaOpponent[opponent as keyof typeof ninjaOpponent]} */}
          {ninjaWinner[creator as keyof typeof ninjaWinner]}
        </>
      ) : (
        <>
          {/* {ninjaAttacking[opponent as keyof typeof ninjaAttacking]}
          {ninjaFighting[opponent as keyof typeof ninjaFighting]}
          {ninjaOpponent[creator as keyof typeof ninjaOpponent]} */}
          {ninjaWinner[opponent as keyof typeof ninjaWinner]}
        </>
      )}
    </AnimationStyles.Container>
  );
};
