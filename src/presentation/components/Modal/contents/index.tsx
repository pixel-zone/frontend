import dynamic from 'next/dynamic';

const CreateCoinFlip = dynamic(() =>
  import('./CreateCoinFlip/CreateCoinFlip').then(
    component => component.CreateCoinFlip,
  ),
);

const CreatePvpBattle = dynamic(() =>
  import('./CreatePvpBattle/CreatePvpBattle').then(
    component => component.CreatePvpBattle,
  ),
);

const BuyNekoLottery = dynamic(() =>
  import('./BuyNekoLottery/BuyNekoLottery').then(
    component => component.BuyNekoLottery,
  ),
);

interface IModals {
  props: any;
}

export const modals = ({ props }: IModals) => {
  return {
    createCoinFlip: <CreateCoinFlip {...props} />,
    createPvpBattle: <CreatePvpBattle {...props} />,
    buyNekoLottery: <BuyNekoLottery {...props} />,
    '': null,
  };
};
