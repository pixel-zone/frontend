import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const usePvpMatch = () => {
  const baseUrl = 'http://localhost:8081/api/v1/pixel_zone/matchmaking';

  const getOpenMatches = async () => {
    try {
      const response = await axios.get(`${baseUrl}/coleta`);
      console.log(response.data.jogos);
      return response.data;
    } catch (error) {
      console.log('Error on getting open matches:', error);
    }
  };

  const createMatch = async ({
    userId,
    gameTypeId,
  }: {
    userId: number;
    gameTypeId: number;
  }) => {
    try {
      const response = await axios.post(`${baseUrl}/cria`, {
        id: userId,
        game_type_id: gameTypeId,
      });
      toast.success('Partida criada com sucesso');
      console.log(response.data);
      return response.data;
    } catch (error) {
      toast.error('Erro ao criar partida');
      console.log('Error on creating match:', error);
    }
  };

  const joinMatch = async ({
    userId,
    matchId,
  }: {
    userId: number;
    matchId: number;
  }) => {
    try {
      const response = await axios.post(`${baseUrl}/entra`, {
        id_usuario: userId,
        id_partida: matchId,
      });
      return response.data;
    } catch (error) {
      console.log('Error on joining match:', error);
    }
  };

  return {
    getOpenMatches,
    createMatch,
    joinMatch,
  };
};
