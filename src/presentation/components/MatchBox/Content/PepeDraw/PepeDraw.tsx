import { useEffect, useState } from 'react';
import Image from 'next/image';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

import chadBluePepe from '@/presentation/assets/chadpepe-blue.png';
import chadBlackPepe from '@/presentation/assets/chadpepe-black.png';
import { Button } from '@/presentation/components';
import { VerifiablyIcon } from '@/presentation/assets/explanations/verifiably';

import { useChadsBattle } from '@/core/hooks/useChadsBattle';
import { useModal } from '@/core/hooks/useModal';

import { MatchBoxStyles } from '../../styles';
import { PepeDrawStyles } from './styles';

export const PepeBattleRoyale: React.FC = () => {
  const { t } = useTranslation();
  const { openModal } = useModal();

  const { battle, ticketsA, ticketsB, yourTicketsA, yourTicketsB } =
    useChadsBattle();

  const [selectedSide, setSelectedSide] = useState<number>();

  const handleSideSelection = (side: number) => {
    setSelectedSide(side);
  };

  const [currentTime, setCurrentTime] = useState<any>(moment());

  const targetTime = moment(process.env.NEXT_PUBLIC_PEPE_DRAW_TIME || '');
  const date = moment(targetTime.diff(currentTime));

  useEffect(() => {
    const interval = setInterval(() => {
      return setCurrentTime(moment());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const notAllowBuy =
    date?.hours() <= 0 && date?.minutes() <= 0 && date?.days() <= 0;

  return (
    <>
      <PepeDrawStyles.Title>
        {t('Chads Battle Royale')}{' '}
        <div>
          <p> {t('Draws in')}: </p>
          <span>
            {String(date?.hours())?.padStart(2, '0') === 'NaN'
              ? 0
              : String(date?.hours())?.padStart(2, '0')}
            h
          </span>
          <span>
            {String(date?.minutes())?.padStart(2, '0') === 'NaN'
              ? 0
              : String(date?.minutes())?.padStart(2, '0')}
            m
          </span>
          <span>
            {String(date?.seconds())?.padStart(2, '0') === 'NaN'
              ? 0
              : String(date?.seconds())?.padStart(2, '0')}
            s
          </span>
        </div>
      </PepeDrawStyles.Title>
      <MatchBoxStyles.BattleRoyaleMatchesContainer>
        <MatchBoxStyles.Content>
          <MatchBoxStyles.ButtonContainer>
            <p>
              {t('Choose your side')}{' '}
              <small>
                {t('Ticket')}: (
                {(Number(battle?.ticket) / 10 ** 18)?.toFixed(2)}) Pixel Points
              </small>
            </p>
            <Button.Outlined
              type="button"
              onClick={() =>
                !notAllowBuy
                  ? openModal({
                      name: 'buyBattleRoyale',
                      props: {
                        id: battle?.id,
                        pool_id: selectedSide!,
                      },
                    })
                  : null
              }
              disabled={selectedSide === undefined}
            >
              <VerifiablyIcon /> {t('Join')}
            </Button.Outlined>
          </MatchBoxStyles.ButtonContainer>
          <MatchBoxStyles.SidesBattleContainer>
            <MatchBoxStyles.SideBattleRoyale
              $$isSelected={selectedSide === 0}
              onClick={() => handleSideSelection(0)}
            >
              <PepeDrawStyles.YourTickets>
                Your tickets: {yourTicketsA}
              </PepeDrawStyles.YourTickets>
              <Image
                src={chadBluePepe}
                alt="chad pepe"
                width={250}
                height={280}
              />
              <p>{t('Chad Black Pepe')} </p>
              <div>
                {' '}
                <span>
                  {t('Tickets')}: {ticketsA}
                </span>
                <span>
                  {t('Current Prize')}:{' '}
                  {(Number(battle?.amount_pool_a) / 10 ** 18)?.toFixed(2)}
                </span>{' '}
                <span>
                  {t('Rewards per ticket')}:{' '}
                  {(
                    (Number(battle?.amount_pool_a) +
                      Number(battle?.amount_pool_b)) /
                      10 ** 18 /
                      battle?.participants_pool_a?.reduce(
                        (total, participant) =>
                          total + Number(participant.tickets_purchased),
                        0,
                      ) || 0
                  )?.toFixed(2)}
                </span>
              </div>
            </MatchBoxStyles.SideBattleRoyale>{' '}
            <span>Vs</span>
            <MatchBoxStyles.SideBattleRoyale
              $$isSelected={selectedSide === 1}
              onClick={() => handleSideSelection(1)}
            >
              <PepeDrawStyles.YourTickets>
                Your tickets: {yourTicketsB}
              </PepeDrawStyles.YourTickets>
              <Image
                src={chadBlackPepe}
                alt="chad pepe"
                width={250}
                height={280}
              />
              <p>{t('Chad Blue Pepe')}</p>
              <div>
                {' '}
                <span>
                  {t('Tickets')}: {ticketsB}
                </span>
                <span>
                  {t('Current Prize')}:{' '}
                  {(Number(battle?.amount_pool_b) / 10 ** 18)?.toFixed(2)}
                </span>{' '}
                <span>
                  {t('Rewards per ticket')}:{' '}
                  {(
                    (Number(battle?.amount_pool_b) +
                      Number(battle?.amount_pool_a)) /
                      10 ** 18 /
                      battle?.participants_pool_b?.reduce(
                        (total, participant) =>
                          total + Number(participant.tickets_purchased),
                        0,
                      ) || 0
                  )?.toFixed(2)}
                </span>
              </div>
            </MatchBoxStyles.SideBattleRoyale>
          </MatchBoxStyles.SidesBattleContainer>
        </MatchBoxStyles.Content>
      </MatchBoxStyles.BattleRoyaleMatchesContainer>
    </>
  );
};
