import { Explanations, Games, HighLight, Infos } from './components';

import { HomeStyles } from './styles';

export const Home: React.FC = () => {
  return (
    <HomeStyles.Container>
      <HighLight />
      <Games />
      <Infos />
    </HomeStyles.Container>
  );
};
