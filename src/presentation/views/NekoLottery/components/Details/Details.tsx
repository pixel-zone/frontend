import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

import { usePrice } from '@/core/hooks/usePrice';
import { useNekoLottery } from '@/core/hooks/useNekoLottery';
import { Button } from '@/presentation/components';
import { useModal } from '@/core/hooks/useModal';
import { DetailsStyles } from './styles';

export const Details = () => {
  const { t } = useTranslation();

  const { lottery, howManyTickets } = useNekoLottery();
  const { price } = usePrice();
  const { openModal } = useModal();
  const [currentTime, setCurrentTime] = useState<any>(moment());

  const targetTime = moment(process.env.NEXT_PUBLIC_NEKO_LOTTERY_TIME || '');
  const date = moment(targetTime.diff(currentTime));

  useEffect(() => {
    const interval = setInterval(() => {
      return setCurrentTime(moment());
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <DetailsStyles.Content>
      <h4>{t('Compre seus tickets agora!')}</h4>
      <p>
        {t('Sorteio em: ')}
        <span>
          {String(date?.hours())?.padStart(2, '0') === 'NaN'
            ? 0
            : String(date?.hours())?.padStart(2, '0')}
          h{' '}
          {String(date?.minutes())?.padStart(2, '0') === 'NaN'
            ? 0
            : String(date?.minutes())?.padStart(2, '0')}
          m
        </span>{' '}
      </p>
      <DetailsStyles.Details>
        <DetailsStyles.DetailsHeader>
          <p>{t('Próximo sorteio')}</p>
          <p>
            {t('Sorteio Nº')} {7 || '-'}
          </p>
        </DetailsStyles.DetailsHeader>
        <DetailsStyles.DetailsContent>
          <div>
            <p>{t('Pote da loteria')}:</p>
            <span>-</span>
          </div>
          <div>
            <p>{t('Seus tickets ')}:</p>
            <span>{howManyTickets || 0}</span>
          </div>
          <div>
            <p>{t('total de Tickets')}:</p>
            <span>{Number(lottery?.ticket) / 10 ** 18 || 0} tickets</span>
          </div>
        </DetailsStyles.DetailsContent>
        <DetailsStyles.DetailsFooter>
          <Grid container>
            <Grid item md={6}>
              <DetailsStyles.DetailsButton>
                {/* <button>+ Details</button> */}
              </DetailsStyles.DetailsButton>
            </Grid>
            <Grid item md={6} justifyItems="flex-end">
              <DetailsStyles.BuyTicketButton>
                <Button.Default
                  onClick={() =>
                    openModal({
                      name: 'buyNekoLottery',
                    })
                  }
                >
                  {t('Comprar Tickets')}
                </Button.Default>
              </DetailsStyles.BuyTicketButton>
            </Grid>
          </Grid>
        </DetailsStyles.DetailsFooter>
      </DetailsStyles.Details>
    </DetailsStyles.Content>
  );
};
