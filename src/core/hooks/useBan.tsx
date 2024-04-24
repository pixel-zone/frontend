import axios from 'axios';
import { toast } from 'react-toastify';

export const useBan = () => {
  const banUser = async (userId: number) => {
    try {
      const response = await axios.delete(
        `http://localhost:8081/api/v1/pixel_zone/usuario/remove`,
        {
          data: {
            id: userId,
          },
        },
      );

      toast.success('Usuário banido com sucesso');
      console.log('Usuário banido com sucesso');
      return response.data;
    } catch (error) {
      console.log('userId', userId);
      toast.error('Erro ao banir usuário');
      console.error('Erro ao banir usuário: ', error);
    }
  };
  return { banUser };
};
