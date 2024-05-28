/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { Box } from '@/presentation/components/Box/Box';
import { Button } from '@/presentation/components/Button/Button';

import { useAccountState } from '@/core/states/account';
import { coin } from './utils/coin';

import ninjaCoin from '@/presentation/assets/ninja-coin.png';
import ninjaCoinTails from '@/presentation/assets/ninja-tails.png';

import { usePlay } from '@/core/hooks/usePlay';

import { MatchBoxStyles } from '../../../styles';

import { ArenaStyles } from './styles';
import { CircularProgress } from '@mui/material';
import ninjaHeads from '@/presentation/assets/ninja-coin.png';
import ninjaTails from '@/presentation/assets/ninja-tails.png';
import { usePvpMatch } from '@/core/hooks/usePvpMatch';

interface IArena {
  match: any;
}

export const Arena: React.FC<IArena> = ({ match }) => {
  const { status, count } = usePlay({ match });

  if (status === 'finished') {
    return null;
  }
  // const { account } = useAccountState();

  const { joinMatch } = usePvpMatch();

  return (
    <>
      {match !== undefined ? (
        <Box
          width="20rem"
          $hasGradient={true}
          padding="3rem 1rem 1rem 1rem"
          key={match?.id}
        >
          {status === 'playing' ? (
            <ArenaStyles.Flip
              win={match?.winning_side === 0 ? 'heads' : 'tails'}
            >
              <Image src={ninjaCoin} alt="coin heads" id="heads" />
              <Image src={ninjaCoinTails} alt="coin tails" id="tails" />
            </ArenaStyles.Flip>
          ) : null}
          <MatchBoxStyles.Content>
            {/* {match.opponent && !match?.finished && (
          <ArenaStyles.Loading>
            <CircularProgress />
          </ArenaStyles.Loading>
        )} */}
            <MatchBoxStyles.SidesPvpContainer fighting={status === 'playing'}>
              <ArenaStyles.Header>
                <p>Prêmio: 50 Pixel Points</p>
              </ArenaStyles.Header>
              <MatchBoxStyles.SidePvp>
                <ArenaStyles.ImageCoin
                  // src={coin?.[match?.creator_side as keyof typeof coin]}
                  src={ninjaHeads}
                  alt="pepe"
                />
                <div>
                  {Array.isArray(match?.usuariosDtos) &&
                    match.usuariosDtos[0]?.username}
                </div>
              </MatchBoxStyles.SidePvp>
              <small>
                {count <= 3 && match?.finished
                  ? String(count).padStart(2, '0')
                  : 'Vs'}
              </small>
              <MatchBoxStyles.SidePvp>
                {!match?.opponent ? (
                  <Button.Outlined
                    type="button"
                    onClick={() => joinMatch({ userId: 7, matchId: match.id })}
                  >
                    Entrar
                  </Button.Outlined>
                ) : (
                  <>
                    <ArenaStyles.ImageCoin
                      src={
                        coin?.[
                          (match?.creator_side === 0
                            ? 1
                            : 0) as keyof typeof coin
                        ]
                      }
                      alt="pepe"
                    />
                    <div>{match.usuariosDtos[1].username}</div>
                  </>
                )}
              </MatchBoxStyles.SidePvp>
            </MatchBoxStyles.SidesPvpContainer>
          </MatchBoxStyles.Content>
        </Box>
      ) : (
        <> </>
      )}
    </>
  );
};
