import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { Grid } from '@mui/material';

import { useAccountState } from '@/core/states/account';
import { getUrlReferral } from '@/core/utils/getUrlReferral';

import { Button } from '@/presentation/components';
import ninjaPuppet from '@/presentation/assets/ninja-puppet.png';
import { Chart } from '@/presentation/views/Account/components/Chart/Chart';
import { EloCard } from './components/EloCard/EloCard';
import { useTasks } from './components/Tasks/hooks/useTasks';
import { coinsList } from '@/core/utils/coinsList';
import tooltipIcon from '@/presentation/assets/tooltip-icon.png';
import { Tooltip } from '@/presentation/components/Tooltip/Tooltip';
import { useAccountBalance } from '@/core/hooks/useAccountBalance';

import { AccountStyles } from './styles';
import { useCopyText } from '@/core/hooks/useCopyText';

export const Account: React.FC = () => {
  const { t } = useTranslation();
  const { copyText } = useCopyText();

  const { getListedTasks } = useTasks();
  const { balance } = useAccountBalance();
  const { account } = useAccountState();

  const referral = `${getUrlReferral()}/?referral=${account}`;

  return (
    <AccountStyles.Container>
      <AccountStyles.Title>
        {' '}
        <Image src={ninjaPuppet} alt="coin" width={60} height={60} />
        {t('Welcome Back, Ninja!')}{' '}
      </AccountStyles.Title>
      <Grid container spacing={1}>
        <Grid item container md={12} xs={12} lg={3}>
          <AccountStyles.Box $height="12rem">
            {' '}
            <AccountStyles.Balances>
              <h1>
                {' '}
                {t('Wallet balances')}{' '}
                <div>
                  <Image
                    src={tooltipIcon}
                    alt="tooltip icon"
                    width={16}
                    height={16}
                  />{' '}
                  <Tooltip $top="30px" $left="-140px" $width="10rem">
                    {' '}
                    {t('Tooltip Account 1')}{' '}
                  </Tooltip>
                </div>
              </h1>
              <div>
                {coinsList.slice(0, 1).map((coin, index) => {
                  return (
                    <span key={index}>
                      {' '}
                      {coin.icon}
                      {balance} {coin.name}{' '}
                    </span>
                  );
                })}
                {coinsList.slice(1, 3).map((coin, index) => {
                  return (
                    <span key={index}>
                      {' '}
                      {coin.icon}
                      0.00 {coin.name} ({t('Soon')})
                    </span>
                  );
                })}
              </div>
            </AccountStyles.Balances>
          </AccountStyles.Box>
          <AccountStyles.Box $height="11.7rem" margin="0.5rem 0 0 0">
            <AccountStyles.Referral>
              <h1>Referral</h1>
              <div>
                <p>Note: Referral points are updated daily.</p>
                <div>
                  <input readOnly value={referral} />
                  <Button.Default
                    onClick={() =>
                      copyText({
                        text: referral,
                      })
                    }
                    id="copy"
                  >
                    Copy
                  </Button.Default>
                </div>
              </div>
            </AccountStyles.Referral>
          </AccountStyles.Box>
        </Grid>
        <Grid item md={12} xs={12} lg={9}>
          <AccountStyles.StatsContainer>
            <AccountStyles.Box>
              <AccountStyles.PlayerStats>
                {' '}
                <div>
                  {t('Points Summary')}
                  <div>
                    <EloCard />

                    <Button.Default disabled>
                      {t('Resgatar Airdrop')}
                    </Button.Default>
                  </div>
                </div>
                <AccountStyles.PointsTasksContainer>
                  <div>
                    {' '}
                    <p>
                      {t('Tasks')}{' '}
                      <Image
                        src={tooltipIcon}
                        alt="tooltip icon"
                        width={16}
                        height={16}
                      />{' '}
                      <Tooltip $width="8rem">{t('Tooltip Account 2')}</Tooltip>
                    </p>
                  </div>
                  <AccountStyles.PointsTasks>
                    <div>{getListedTasks()}</div>
                  </AccountStyles.PointsTasks>
                </AccountStyles.PointsTasksContainer>
              </AccountStyles.PlayerStats>
            </AccountStyles.Box>
          </AccountStyles.StatsContainer>
        </Grid>

        {/* <Grid item md={12} xs={12} lg={12}>
          <AccountStyles.Box>
            <h1>Admin Panel</h1>
            <AccountStyles.AdminContainer>
              <div>
                <h2>
                  Pepe Draw <Image src={frogCoin} alt="coin" width={25} />
                </h2>
                <span>
                  {' '}
                  <Button.Default>Open Pepe</Button.Default>
                  <Button.Default>Close Pepe</Button.Default>
                </span>
              </div>
              <div>
                <h2>
                  Neko Lottery <Image src={neko} alt="coin" width={25} />
                </h2>
                <span>
                  <Button.Default>Open Lottery</Button.Default>
                  <Button.Default>Close Lottery</Button.Default>
                </span>
              </div>
            </AccountStyles.AdminContainer>
          </AccountStyles.Box>
        </Grid> */}
        <Grid item md={12} xs={12} lg={12}>
          <AccountStyles.Box>
            {' '}
            <AccountStyles.BalancesOverview>
              <h1>{t('Balances Overview')}</h1> <Chart />
            </AccountStyles.BalancesOverview>
          </AccountStyles.Box>
        </Grid>
      </Grid>
    </AccountStyles.Container>
  );
};
