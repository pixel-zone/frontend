import { useTranslation } from 'react-i18next';
import { Task } from '../Task';

import { usePoints } from '@/core/hooks/usePoints';

export const useTasks = () => {
  const { t } = useTranslation();

  const { userPlatformData: platformPoints } = usePoints();

  const tasksContent = [
    {
      id: 1,
      ninjaPoints: 10,
      title: t('Buy a Pepe PvP ticket'),
      goLink: '/pepe-pvp',
    },
    {
      id: 2,
      ninjaPoints: 50,
      title: t('Win a Pepe PvP match'),
      goLink: '/chads-draw',
    },
    {
      id: 3,
      ninjaPoints: 10,
      title: t('Buy a Chads Draw ticket'),
      goLink: '/chads-draw',
    },
    {
      id: 4,
      ninjaPoints: 50,
      title: t('Win a Chads Draw match'),
      goLink: '/chhads-draw',
    },
    {
      id: 5,
      ninjaPoints: 10,
      title: t('Buy a Ninja Coin Flip ticket'),
      goLink: '/ninja-coin-flip',
    },
    {
      id: 6,
      ninjaPoints: 50,
      title: t('Win a Ninja Coin Flip match'),
      goLink: '/ninja-coin-flip',
    },
    {
      id: 8,
      ninjaPoints: 350,
      title: t('Win on Kira Lottery'),
      goLink: '/kira-lottery',
    },
  ];
  const getListedTasks = () => {
    const listedTasks = tasksContent.map(task => (
      <Task
        key={task.id}
        title={task.title}
        points={task.ninjaPoints}
        goLink={task.goLink}
      />
    ));

    return listedTasks;
  };
  return {
    getListedTasks,
  };
};
