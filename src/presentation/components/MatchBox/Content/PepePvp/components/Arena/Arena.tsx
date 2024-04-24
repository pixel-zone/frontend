import { useTranslation } from 'react-i18next';
import { CircularProgress } from '@mui/material';

import { IBattles } from '@/core/entities/PvPBattles';
import { ninjasSlot } from './utils/ninjas';
import { formatAddress } from '@/core/utils/formats';

import { Button } from '@/presentation/components';
import { Box } from '@/presentation/components/Box/Box';
import { Animation } from './components/Animation/Animation';
import { getEthereumAddress } from '@injectivelabs/sdk-ts';
import { MatchBoxStyles } from '@/presentation/components/MatchBox/styles';
import { useModal } from '@/core/hooks/useModal';
import { usePlay } from '@/core/hooks/usePlay';
import { useAccountState } from '@/core/states/account';

import { ArenaStyles } from './styles';

interface IArena {
  match: IBattles;
}

export const Arena: React.FC<IArena> = ({ match }) => {
  const { t } = useTranslation();

  const { openModal } = useModal();
  const { account } = useAccountState();

  const { count, status } = usePlay({ match });

  if (status === 'finished') {
    return null;
  }

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
            <p>
              {t('Ticket')}: {(Number(match?.ticket) / 10 ** 18)?.toFixed(2)}{' '}
              Pixel Points
            </p>
          </ArenaStyles.Header>
          <MatchBoxStyles.SidePvp>
            {ninjasSlot[match?.creator_ninja as keyof typeof ninjasSlot]}
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
                Entrar na Partida
              </Button.Default>
            ) : (
              <>
                {ninjasSlot[match?.opponent_ninja as keyof typeof ninjasSlot]}
                <div>{formatAddress(getEthereumAddress(match?.opponent))}</div>
              </>
            )}
          </MatchBoxStyles.SidePvp>
        </MatchBoxStyles.SidesPvpContainer>
      </MatchBoxStyles.Content>
    </Box>
  );
};
