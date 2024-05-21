import { useState } from 'react';
import axios from 'axios';

export const usePvpMatch = () => {
  const baseUrl = 'http://localhost:8081/api/v1/pixel_zone/matchmaking';

  const getOpenMatches = async () => {
    try {
      const response = await axios.get(`${baseUrl}/coleta`);
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
        id_usuario: userId,
        id_tipo_jogo: gameTypeId,
      });
      return response.data;
    } catch (error) {
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
