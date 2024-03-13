import html2canvas from 'html2canvas';
import chuunin from '@/presentation/assets/chuunin.png';
import genin from '@/presentation/assets/genin.png';
import jounin from '@/presentation/assets/jounin.png';
import academy from '@/presentation/assets/academy.png';
import sannin from '@/presentation/assets/sannin.png';
import noElo from '@/presentation/assets/no-elo.png';

export const useEloCard = () => {
  const downloadCard = async (
    elementRef: React.RefObject<HTMLElement>,
    imageFileName: string,
  ) => {
    try {
      const element = elementRef.current;

      if (!element) {
        console.error('Element not found');
        return;
      }

      const canvas = await html2canvas(element);
      const image = canvas.toDataURL('image/png', 1.0);

      const downloadLink = document.createElement('a');
      downloadLink.href = image;
      downloadLink.download = imageFileName;

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error('Error exporting as image:', error);
    }
  };

  const handleEloImage = (totalPoints: number) => {
    switch (true) {
      case totalPoints >= 200 && totalPoints <= 399:
        return academy.src;
      case totalPoints >= 400 && totalPoints <= 599:
        return genin.src;
      case totalPoints >= 600 && totalPoints <= 799:
        return chuunin.src;
      case totalPoints >= 800 && totalPoints <= 999:
        return jounin.src;
      case totalPoints >= 1000:
        return sannin.src;
      default:
        return noElo.src;
    }
  };

  const eloName = (totalPoints: number) => {
    switch (true) {
      case totalPoints >= 200 && totalPoints <= 399:
        return 'Academy';
      case totalPoints >= 400 && totalPoints <= 599:
        return 'Genin';
      case totalPoints >= 600 && totalPoints <= 799:
        return 'Chuunin';
      case totalPoints >= 800 && totalPoints <= 999:
        return 'Jounin';
      case totalPoints >= 1000:
        return 'Sannin';
      default:
        return 'No Elo';
    }
  };

  return {
    downloadCard,
    handleEloImage,
    eloName,
  };
};
