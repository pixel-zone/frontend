import { Games, HighLight } from './components';

import { HomeStyles } from './styles';

export const Home: React.FC = () => {
  return (
    <HomeStyles.Container>
      <HighLight />
      <Games />
    </HomeStyles.Container>
  );
};
