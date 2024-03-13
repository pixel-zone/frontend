import { useState } from 'react';
import { addDays, format } from 'date-fns'; // Importe as funções necessárias da biblioteca date-fns

export const useTimestamps = () => {
  const intervals = ['All', 'day', 'week', '1 year', '1 month', '3 months'];
  const depositAmounts = [100, 200, 800, 600, 1500];

  const startDate = new Date('2023-12-28'); // Defina a data de início dos depósitos

  const [data, setData] = useState(() => {
    const newData = [];

    for (let i = 0; i < depositAmounts.length; i++) {
      const date = addDays(startDate, i);
      const formattedDate = format(date, 'yyyy-MM-dd');
      const Balances = depositAmounts[i];
      newData.push({ name: formattedDate, Balances, pv: 2400, amt: 2400 });
    }

    return newData;
  });

  const handleIntervalChange = (interval: string) => {
    let filteredData = [];

    switch (interval) {
      case 'All':
        filteredData = data;
        break;
      case 'day':
        filteredData = data.filter(item => {
          const currentDate = new Date();
          const itemDate = new Date(item.name);
          return itemDate >= startDate && itemDate <= currentDate;
        });
        break;
      case 'week':
        filteredData = data.filter(item => {
          const currentDate = new Date();
          const itemDate = new Date(item.name);
          const oneWeekAgo = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate() - 7,
          );
          return (
            itemDate >= startDate &&
            itemDate <= currentDate &&
            itemDate >= oneWeekAgo
          );
        });
        break;
      case '1 year':
        filteredData = data.filter(item => {
          const currentDate = new Date();
          const itemDate = new Date(item.name);
          const oneYearAgo = new Date(
            currentDate.getFullYear() - 1,
            currentDate.getMonth(),
            currentDate.getDate(),
          );
          return (
            itemDate >= startDate &&
            itemDate <= currentDate &&
            itemDate >= oneYearAgo
          );
        });
        break;
      case '1 month':
        filteredData = data.filter(item => {
          const currentDate = new Date();
          const itemDate = new Date(item.name);
          const oneMonthAgo = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() - 1,
            currentDate.getDate(),
          );
          return (
            itemDate >= startDate &&
            itemDate <= currentDate &&
            itemDate >= oneMonthAgo
          );
        });
        break;
      case '3 months':
        filteredData = data.filter(item => {
          const currentDate = new Date();
          const itemDate = new Date(item.name);
          const threeMonthsAgo = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() - 3,
            currentDate.getDate(),
          );
          return (
            itemDate >= startDate &&
            itemDate <= currentDate &&
            itemDate >= threeMonthsAgo
          );
        });
        break;
      default:
        filteredData = data;
        break;
    }

    setData(filteredData);
  };

  return { intervals, handleIntervalChange, data };
};
