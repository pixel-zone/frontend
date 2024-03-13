import { Network } from '@injectivelabs/networks';
import {
  MsgBroadcasterWithPk,
  MsgExecuteContractCompat,
  getInjectiveAddress,
  PrivateKey,
} from '@injectivelabs/sdk-ts';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const privateKeyHash =
      'describe brass goose reflect ten sorry vibrant load save finger speed jewel';
    const privateKey = PrivateKey.fromHex(privateKeyHash);
    const injectiveAddress = privateKey.toBech32();

    const msg = MsgExecuteContractCompat.fromJSON({
      contractAddress: 'inj16gh2n4kmqtu93qu2ulygnmplh04xm65mnc674s ',
      sender: 'inj17s8z26ss582evmlpfzyys3r360peq5rcdn0ze3',
      exec: {
        action: 'draw_neko_lottery',
        msg: {
          job_id: 1,
        },
      },
    });

    const txHash = await new MsgBroadcasterWithPk({
      privateKey: privateKey,
      network: Network.Testnet,
      endpoints: {
        grpc: 'https://testnet.sentry.chain.grpc-web.injective.network:443',
        indexer:
          'https://testnet.sentry.exchange.grpc-web.injective.network:443',
        rest: 'https://testnet.sentry.lcd.injective.network:443',
      },
    }).broadcast({
      msgs: msg,
    });
  } catch (e) {
    return;
  }
}
