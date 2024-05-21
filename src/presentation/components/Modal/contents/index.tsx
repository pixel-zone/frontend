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

const BuyQuantumLottery = dynamic(() =>
  import('./BuyQuantumLottery/BuyQuantumLottery').then(
    component => component.BuyQuantumLottery,
  ),
);

interface IModals {
  props: any;
}

export const modals = ({ props }: IModals) => {
  return {
    createCoinFlip: <CreateCoinFlip {...props} />,
    createPvpBattle: <CreatePvpBattle {...props} />,
    buyQuantumLottery: <BuyQuantumLottery {...props} />,
    '': null,
  };
};
