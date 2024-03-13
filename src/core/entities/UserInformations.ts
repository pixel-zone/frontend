export interface IUserInformations {
  user_informations: {
    tickets_purchased: string;
    points: number;
    matches_won: number;
    available_withdraw: { denom: string; amount: string }[];
  };
}
