import { NotFoundIcon } from '@/presentation/assets/not-found';
import { NotFoundStyles } from './styles';
import { Button } from '@/presentation/components';
import { Link } from '@/presentation/components';

export const NotFound: React.FC = () => {
  return (
    <NotFoundStyles.Container>
      <h4>Página não encontrada!</h4>
      <p>Oops! Não conseguimos encontrar a página que você está procurando.</p>

      <Link href="/">
        <Button.Default>Página inicial</Button.Default>
      </Link>
    </NotFoundStyles.Container>
  );
};
