import { NextApiResponse, NextApiRequest } from 'next';

import { userZealy } from '@/core/utils/services/zealy';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const response = await userZealy({
      newAccount: String(req?.query?.['ethAddress']),
    });
    const data = response.data;

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
