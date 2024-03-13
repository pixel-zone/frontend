export interface INekoLottery {
  id: number;
  finished: boolean;
  amount: string;
  creator: string;
  participants: {
    user: string;
    referral: string;
    tickets_purchased: string;
  }[];
  paused: boolean;
  percentage_reward: number;
  denom: string;
  created_at: number;
  finished_at: number;
  winners: any[];
  number_of_winners: number;
  percentage_rewards_to_winner: number[];
  ticket: string;
  limit_of_tickets: number;
}
