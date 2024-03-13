import { NotFoundIcon } from '@/presentation/assets/not-found';
import { NotFoundStyles } from './styles';
import { Button } from '@/presentation/components';
import { Link } from '@/presentation/components';

export const NotFound: React.FC = () => {
  return (
    <NotFoundStyles.Container>
      <NotFoundIcon />
      <h4>Page not found!</h4>
      <p>Oops! We couldn’t find the page that you’re looking for.</p>

      <Link href="/">
        <Button.Default>Go to Home</Button.Default>
      </Link>
    </NotFoundStyles.Container>
  );
};
