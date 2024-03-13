// filename: wallet.ts
import { WalletStrategy } from '@injectivelabs/wallet-ts';

import { ChainId, EthereumChainId } from '@injectivelabs/ts-types';

export const WalletsStrategy = new WalletStrategy({
  chainId: ChainId['Testnet'],
  ethereumOptions: {
    ethereumChainId: EthereumChainId['Injective'],
  },
  endpoints: {
    rest: 'https://testnet.sentry.lcd.injective.network:443',
    rpc: 'https://testnet.sentry.tm.injective.network:443',
  },
});
