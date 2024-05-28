import { useTranslation } from 'react-i18next';
import { CircularProgress } from '@mui/material';

import { ninjasSlot } from './utils/ninjas';

import { Button } from '@/presentation/components';
import { Box } from '@/presentation/components/Box/Box';
import { Animation } from './components/Animation/Animation';
import { getEthereumAddress } from '@injectivelabs/sdk-ts';
import { MatchBoxStyles } from '@/presentation/components/MatchBox/styles';
import { useModal } from '@/core/hooks/useModal';
import { usePlay } from '@/core/hooks/usePlay';
import { useAccountState } from '@/core/states/account';
import ninjaHeads from '@/presentation/assets/ninja-heads.png';
import { ArenaStyles } from './styles';
import Image from 'next/image';
interface IArena {
  match: any;
}

export const Arena: React.FC<IArena> = ({ match }) => {
  const { t } = useTranslation();

  const { openModal } = useModal();
  const { account } = useAccountState();

  const { count, status } = usePlay({ match });

  if (status === 'finished') {
    return null;
  }

  console.log('arena', match);

  return (
    <Box
      width="20rem"
      $hasGradient={true}
      padding="3rem 1rem 1rem 1rem"
      key={match?.id}
    >
      {status === 'playing' ? (
        <Animation
          creator={match?.creator_ninja}
          opponent={match?.opponent_ninja}
          winner={
            match?.winner_ninja === match?.creator_ninja
              ? 'creator'
              : 'opponent'
          }
        />
      ) : null}
      <MatchBoxStyles.Content>
        {match?.opponent && !match?.finished && (
          <ArenaStyles.Loading>
            <CircularProgress />
          </ArenaStyles.Loading>
        )}
        <MatchBoxStyles.SidesPvpContainer fighting={status === 'playing'}>
          <ArenaStyles.Header>
            <p>Prêmio: 50 Pixel Points</p>
          </ArenaStyles.Header>
          <MatchBoxStyles.SidePvp>
            <Image id="winner" src={ninjaHeads} alt="ninja pink" width={50} />
          </MatchBoxStyles.SidePvp>{' '}
          <small>
            {count <= 3 && match?.finished
              ? String(count).padStart(2, '0')
              : 'Vs'}
          </small>
          <MatchBoxStyles.SidePvp>
            {!match?.opponent ? (
              <Button.Default
                type="button"
                onClick={() =>
                  openModal({
                    name: 'createPvpBattle',
                    props: {
                      id: match?.id,
                      opponent: true,
                      creator: match?.creator_ninja,
                      ticket: Number(match?.ticket) / 10 ** 18,
                    },
                  })
                }
              >
                Entrar
              </Button.Default>
            ) : (
              <>
                <Image
                  id="winner"
                  src={ninjaHeads}
                  alt="ninja pink"
                  width={50}
                />
              </>
            )}
          </MatchBoxStyles.SidePvp>
        </MatchBoxStyles.SidesPvpContainer>
      </MatchBoxStyles.Content>
    </Box>
  );
};
