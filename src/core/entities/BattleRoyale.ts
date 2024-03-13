interface pool {
  referral: string;
  tickets_purchased: string;
  user: string;
}

export interface IBattleRoyale {
  id: number;
  finished: boolean;
  creator: string;
  participants_pool_a: pool[];
  participants_pool_b: pool[];
  pool_winner: number;
  ticket: string;
  paused: boolean;
  percentage_reward: number;
  amount_pool_a: string;
  amount_pool_b: string;
}
