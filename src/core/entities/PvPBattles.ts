export interface IBattles {
  id: number;
  finished: boolean;
  creator: string;
  opponent: string;
  winner: string;
  ticket: string;
  paused: boolean;
  percentage_reward: number;
  amount: string;
  created_at: number;
  denom: string;
  finished_at: number;
  creator_ninja: number;
  opponent_ninja: number;
  winner_ninja: number;
}
