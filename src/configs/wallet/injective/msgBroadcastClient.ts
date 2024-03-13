import { Network, getNetworkInfo } from '@injectivelabs/networks';
import { MsgBroadcaster } from '@injectivelabs/wallet-ts';

import { WalletsStrategy } from './wallet';

export const NETWORK = Network.Testnet;

export const msgBroadcastClient = new MsgBroadcaster({
  walletStrategy: WalletsStrategy,
  network: NETWORK,
  networkEndpoints: {
    grpc: 'https://testnet.sentry.chain.grpc-web.injective.network:443',
    explorer: 'https://testnet.explorer.injective.network',
    indexer: 'https://testnet.sentry.exchange.grpc-web.injective.network:443',
    rpc: 'https://testnet.sentry.tm.injective.network:443',
    chronos: 'https://testnet.sentry.exchange.grpc-web.injective.network:443',
    rest: 'https://testnet.sentry.lcd.injective.network:443',
  },
});
