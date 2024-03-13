import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  AreaChart,
} from 'recharts';
import { useTranslation } from 'react-i18next';

import { theme } from '@/configs/styles/theme';
import { useTimestamps } from '@/presentation/views/Account/components/Chart/hooks/useTimestamps';

import { ChartStyles } from './styles';

export const Chart = () => {
  const { t } = useTranslation();

  const { intervals, data, handleIntervalChange } = useTimestamps();

  return (
    <>
      <ChartStyles.Timestamps>
        {intervals.map((interval, index) => (
          <button key={index} onClick={() => handleIntervalChange(interval)}>
            {interval}
          </button>
        ))}
      </ChartStyles.Timestamps>
      <ChartStyles.Container>
        <ChartStyles.DisabledChart>
          {' '}
          <div>{t('Available on Mainnet')}</div>{' '}
        </ChartStyles.DisabledChart>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorBalances" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="rgba(5, 243, 227, 0.722)"
                  stopOpacity={1.7}
                />
                <stop
                  offset="95%"
                  stopColor="rgba(2, 167, 156, 0.342)"
                  stopOpacity={1}
                />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              stroke="#00f2fe"
              dataKey="Balances"
              strokeWidth={2}
              fill="url(#colorBalances)"
            />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              fontSize={12}
              padding={{ right: 10, left: 0 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              fontSize={12}
              padding={{ bottom: 20, top: 15 }}
            />
            <Tooltip
              contentStyle={{
                background: theme.colors.primary['02'],
                borderRadius: '5px',
                border: 'none',
                color: '#fff',
                fontSize: '12px',
                padding: '10px',
                opacity: '0.9',
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartStyles.Container>
    </>
  );
};
