export interface IPlatformPoints {
  available_withdraw: [{ denom: string; amount: string }];
  matches_won: number;
  points: number;
  tickets_purchased: string;
  tickets_by_game: {
    pvp_battle: number;
    pepe_draw: number;
    neko_lottery: number;
    meme_coin_flip: number;
  };
  wins_by_game: {
    pvp_battle: number;
    pepe_draw: number;
    neko_lottery: number;
    meme_coin_flip: number;
  };
}
