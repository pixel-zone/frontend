import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const usePvpMatch = () => {
  const baseUrl =
    'http://localhost:8081/api/v1/pixel_zone/matchmaking/v1/pixel_zone/matchmaking';

  const getOpenMatches = async () => {
    try {
      const response = await axios.get(`${baseUrl}/coleta`);
      return response.data;
    } catch (error) {
      // console.log('Error on getting open matches:', error);
    }
  };

  const createMatch = async ({
    userId,
    gameTypeId,
    choice,
  }: {
    userId: number;
    gameTypeId: number;
    choice: number;
  }) => {
    try {
      const response = await axios.post(`${baseUrl}/cria`, {
        id: userId,
        game_type_id: gameTypeId,
        jogada: choice,
      });
      toast.success('Partida criada com sucesso');
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log('choice', choice);
      console.log('userId', userId);
      console.log('gameTypeId', gameTypeId);
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

  const playMatch = async ({
    userId,
    matchId,
    choice,
  }: {
    userId: number;
    matchId: number;
    choice: number;
  }) => {
    try {
      const response = await axios.post(`${baseUrl}/joga`, {
        id_usuario: userId,
        id_partida: matchId,
        escolha: choice,
      });
      return response.data;
    } catch (error) {
      console.log('Error on playing match:', error);
    }
  };

  const drawMatch = () => {
    return Math.round(Math.random());
  };

  return {
    getOpenMatches,
    createMatch,
    joinMatch,
    drawMatch,
  };
};
