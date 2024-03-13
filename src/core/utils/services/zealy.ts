import { zealyApi } from '@/configs/fetch/zealy';

export const leaderboard = () =>
  zealyApi(
    '/leaderboard/?limit=1000&page=0&sprint_id=7569eaf5-02d1-42c5-aa72-bd1f4c24fca1',
  );

export const userZealy = ({ newAccount }: { newAccount: string }) =>
  zealyApi(`/api/user/?ethAddress=${newAccount}`);
