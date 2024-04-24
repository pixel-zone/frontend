import axios from 'axios';
import { toast } from 'react-toastify';
import { useAdsState } from '../states/ads';
import { useEffect } from 'react';
import { useAccountState } from '../states/account';
export const useAds = () => {
  const { account } = useAccountState();
  const { setVerifiedAds, verifiedAds } = useAdsState(); // Destructure setAds from the useAdsState hook

  const createAd = async (file: File) => {
    const id_usuario = account.id;
    console.log('accountId', id_usuario);

    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const anuncio = reader.result?.toString().split(',')[1];
        console.log(anuncio);
        const response = await axios.post(
          `http://localhost:8081/api/v1/pixel_zone/anuncio/cria`,
          {
            id_usuario,
            anuncio,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );

        if (response.data.success) {
          toast.success('Solicitação de anúncio enviada com sucesso!');
          console.log('Ad was created successfully. ID:', response.data.id);
        } else {
          console.log('Error creating ad:', response.data.error);
        }
      };
      reader.readAsDataURL(file);
    } catch (error) {
      toast.error('Erro ao solicitar envio de anúncio, arquivo grande demais');
      console.log('Error on creating ad:', error);
    }
  };

  const retrieveNotVerifiedAds = async ({
    id_anuncio,
    id_usuario,
  }: {
    id_anuncio?: number;
    id_usuario?: number;
  }) => {
    try {
      const response = await axios.post(
        'http://localhost:8081/api/v1/pixel_zone/anuncio/coleta',
        {
          id_usuario,
          id_anuncio,
        },
      );
      // console.log('response', response.data.anuncios);
      return response.data.anuncios;
    } catch (e) {
      console.log('Ocorreu um erro ao coletar o anúncio não verificado');
    }
  };

  const retrieveVerifiedAds = async ({
    id_anuncio,
    id_usuario,
    verificados,
  }: {
    id_anuncio?: number;
    id_usuario?: number;
    verificados?: boolean;
  }) => {
    try {
      const response = await axios.post(
        'http://localhost:8081/api/v1/pixel_zone/anuncio/coleta',
        {
          id_usuario,
          id_anuncio,
          verificados,
        },
      );

      return response.data.anuncios;
    } catch (e) {
      console.log('Ocorreu um erro ao coletar o anúncio verificado');
    }
  };

  const aproveAd = async (id: number) => {
    try {
      const response = await axios.post(
        `http://localhost:8081/api/v1/pixel_zone/anuncio/aprova`,
        {
          id_anuncio: id,
          aprovado: true,
        },
      );
      console.log('adresponse', response.data);
      if (response.data.success) {
        toast.success('Anúncio aprovado com sucesso!');
        console.log('Ad was approved successfully. ID:', id);
      } else {
        console.log('Error approving ad:', response.data.error);
      }
    } catch (error) {
      toast.error('Erro ao aprovar anúncio');
      console.log('Error on approving ad:', error);
    }
  };

  const removeAd = async (id: number) => {
    try {
      const response = await axios.delete(
        `http://localhost:8081/api/v1/pixel_zone/anuncio/remove`,
        {
          data: { id: id },
        },
      );
      if (response.data.success) {
        toast.success('Anúncio deletado com sucesso!');
        console.log('Ad was deleted successfully. ID:', id);
      } else {
        console.log('Error deleting ad:', response.data.error);
      }
    } catch (error) {
      toast.error('Erro ao deletar anúncio');
      console.log('Error on deleting ad:', error);
    }
  };

  return {
    createAd,
    aproveAd,
    removeAd,
    retrieveNotVerifiedAds,
    retrieveVerifiedAds,
  };
};
