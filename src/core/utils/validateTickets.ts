import { ChangeEvent } from 'react';

export const validateTickets = (e: ChangeEvent<HTMLInputElement>) => {
  if (!e.target.value) {
    return '';
  }

  return Math.abs(Math.round(Number(e.target.value)));
};
