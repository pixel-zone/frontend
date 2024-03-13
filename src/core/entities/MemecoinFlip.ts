export interface IMemecoinFlip {
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
  creator_side: number;
  winning_side: number;
  finished_at: number;
}
