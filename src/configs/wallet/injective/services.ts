//filename: services.ts
import { ChainGrpcWasmApi } from '@injectivelabs/sdk-ts';
import { Network, getNetworkEndpoints } from '@injectivelabs/networks';

export const NETWORK = Network.Testnet;
export const ENDPOINTS = getNetworkEndpoints(NETWORK);

export const chainGrpcWasmApi = new ChainGrpcWasmApi(
  'https://testnet.sentry.chain.grpc-web.injective.network:443',
);
