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

import { formatAddress } from '@/core/utils/formats';
import { getEthereumAddress } from '@injectivelabs/sdk-ts';
import { IMemecoinFlip } from '@/core/entities/MemecoinFlip';

import { MatchBoxStyles } from '../../../styles';

import { ArenaStyles } from './styles';
import { CircularProgress } from '@mui/material';

interface IArena {
  match: IMemecoinFlip;
}

export const Arena: React.FC<IArena> = ({ match }) => {
  const { t } = useTranslation();

  const { account } = useAccountState();

  const { status, count } = usePlay({ match });

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
        <ArenaStyles.Flip win={match?.winning_side === 0 ? 'heads' : 'tails'}>
          <Image src={ninjaCoin} alt="coin heads" id="heads" />
          <Image src={ninjaCoinTails} alt="coin tails" id="tails" />
        </ArenaStyles.Flip>
      ) : null}
      <MatchBoxStyles.Content>
        {match.opponent && !match?.finished && (
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
            <ArenaStyles.ImageCoin
              src={coin?.[match?.creator_side as keyof typeof coin]}
              alt="pepe"
            />
            <div></div>
          </MatchBoxStyles.SidePvp>
          <small>
            {count <= 3 && match?.finished
              ? String(count).padStart(2, '0')
              : 'Vs'}
          </small>
          <MatchBoxStyles.SidePvp>
            {!match?.opponent ? (
              <Button.Outlined type="button">Entrar na Partida</Button.Outlined>
            ) : (
              <>
                <ArenaStyles.ImageCoin
                  src={
                    coin?.[
                      (match?.creator_side === 0 ? 1 : 0) as keyof typeof coin
                    ]
                  }
                  alt="pepe"
                />
                <div></div>
              </>
            )}
          </MatchBoxStyles.SidePvp>
        </MatchBoxStyles.SidesPvpContainer>
      </MatchBoxStyles.Content>
    </Box>
  );
};
