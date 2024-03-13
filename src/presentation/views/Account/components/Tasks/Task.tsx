import { Link } from '@/presentation/components';
import { useTranslation } from 'react-i18next';

import { Button } from '@/presentation/components';

import { TaskStyles } from './styles';

interface ITaskProps {
  id?: number;
  points: number;
  title: string;
  goLink: string;
}

export const Task: React.FC<ITaskProps> = ({ id, points, title, goLink }) => {
  const { t } = useTranslation();

  return (
    <TaskStyles.Container key={id}>
      <TaskStyles.PointsContainer>
        <TaskStyles.Points>
          <span>{points}</span>
          <p>{t('Ninja Points')}</p>
        </TaskStyles.Points>
      </TaskStyles.PointsContainer>

      <TaskStyles.DescriptionContainer>
        <TaskStyles.Description>
          <div>{title}</div>
        </TaskStyles.Description>
        <TaskStyles.ButtonContainer>
          <Link href={goLink}>
            <Button.Outlined>{t('GO')}</Button.Outlined>
          </Link>
        </TaskStyles.ButtonContainer>
      </TaskStyles.DescriptionContainer>
    </TaskStyles.Container>
  );
};
