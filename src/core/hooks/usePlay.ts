import moment from 'moment';
import { useEffect, useState } from 'react';

interface IUsePlay {
  match: {
    finished: boolean;
    finished_at: number;
  };
}

export const usePlay = ({ match }: IUsePlay) => {
  const [count, setCount] = useState(3);
  const [status, setStatus] = useState<'waiting' | 'playing' | 'finished'>(
    'finished',
  );

  useEffect(() => {
    const checkTime = moment().isSameOrBefore(
      moment(match?.finished_at).add(30, 'seconds'),
    );

    if (match?.finished && checkTime && status === 'waiting' && count <= 0) {
      setStatus('playing');

      setTimeout(() => {
        return setStatus('finished');
      }, 10000);

      return;
    }

    if (match?.finished && !checkTime && status !== 'playing') {
      return setStatus('finished');
    }

    if (!match?.finished) {
      return setStatus('waiting');
    }
  }, [match, count]);

  useEffect(() => {
    let init: any;

    if (match?.finished && count > 0 && status === 'waiting') {
      init = setInterval(() => {
        setCount(prevCount => prevCount - 1);
      }, 1000);
    }

    return () => {
      clearInterval(init);
    };
  }, [match, count]);

  return {
    status,
    count,
  };
};
