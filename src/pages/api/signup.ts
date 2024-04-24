// pages/api/[...path].ts
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { path } = req.query;

  try {
    const response = await axios({
      method: req.method,
      url: `http://localhost:8081/api/v1/pixel_zone/${
        Array.isArray(path) ? path.join('/') : ''
      }`,
      data: req.body,
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao fazer a requisição' });
  }
}
