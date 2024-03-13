import { useEffect, useState } from 'react';
import useSWR from 'swr/mutation';
import {
  fromBase64,
  getEthereumAddress,
  toBase64,
} from '@injectivelabs/sdk-ts';

import zealyPoints from '@/core/utils/zealy-points.json';

import { chainGrpcWasmApi } from '@/configs/wallet/injective/services';
import { CONTRACT_ADDRESS } from '../utils/constants';
import { useAccountState } from '../states/account';
import { IPlatformPoints } from '../entities/PlatformPoints';

export const usePoints = () => {
  const { account } = useAccountState();

  const [points, setPoints] = useState(0);

  const getPoints = () => {
    const points =
      zealyPoints.find(
        ({ address, connectedWallet }) =>
          address === account ||
          connectedWallet === getEthereumAddress(account),
      )?.xp || 0;

    return setPoints(points);
  };

  async function getPlatformData() {
    const newAccount = account;

    const contracts = [
      'inj1yfurd3hmwnl6w8y9yghddpdst5xnfqqarf5ekg', //Contract mom
      'inj14dl7xpjl6f85wu0zytrku4h0rvjem7znkastzw', //Contrato mom only PvP

      'inj1l6l46v4yt90w3d7jvns5urfp5ykdle4lnds26s', //testnet_ninja_labs_neko_lottery_1_0_0
      'inj1qsjuf0glxc529p233ftskk7me7tqy9cdqjnncm', //testnet_ninja_labs_neko_lottery_1_0_1
      'inj1et7rt6raa7jaqjwgv722rhzwpnqu30r5zvqzw5', //testnet_ninja_labs_pepe_draw_1_0_0
      'inj1kc4nlk4zkc6gtkujurxpur45c7mpz6x49pds2p', //testnet_ninja_labs_pepe_draw_1_0_1
      'inj1njy2u9qvtkuxssmyam2njsrm2xpzk7e6a59kdz', //testnet_ninja_labs_pvp_battle_1_0_0
      'inj1am4eucjwz2eevn0nv3gjsa8kt988hlv2msw78t', //testnet_ninja_labs_pvp_battle_1_0_1
      'inj13t0wmj6clfpzcs2d0zn86v36v0r4apxqxpj26p', //testnet_ninja_labs_meme_coin_flip_1_0_0
      'inj1hg8p5mdccxlda9y4mjv56z8rvt9nkyxaxqy4wz', //testnet_ninja_labs_meme_coin_flip_1_0_1
      'inj1wfq00xwfqdzfxtfe6xdpcckxavlstv8v43pwv5', //testnet_ninja_labs_pepe_draw_1_0_2
      'inj18q4awna7fu4hnx8zw88weuavhhytc8dcyvxsct', //test
      'inj1yapr8hpeag8msz8x7tqr8usuegppkrdvec2mfp', //test
      'inj1el5sk5s6xg0avs7qe2t9ex8kvqhcwlt42439az', //test
      'inj1gufpkswvrzx074t6mtnjuvd4lk2exfdk3zfya4', //test
      'inj1ed9x28pkfstrxangfskvtvsyjmys8vld6tka43', //testnet_ninja_labs_neko_lottery_1_0_2
      'inj1dtls3znndvk0h0wc24weq8wyy9czkrxgquglc5', //testnet_ninja_labs_pepe_draw_1_0_3
      'inj17vwku3kaxq3ansas3a7xyqsc7arhhkdnssfttv', //testnet_ninja_labs_pvp_battle_1_0_2
      'inj1g2y9j7473je68zgd4zp8pfmdz97n6qwajvjrja', //testnet_ninja_labs_meme_coin_flip_1_0_2,
      'inj1tkqwww2r2qw7fs9y4clrcz49v9nt6lqwzf6mv5', //testnet_ninja_labs_neko_lottery_1_1_0
      'inj1tqg8cfqvcphlm5nqgpjt3um8jnvtdhn97j07cz', //testnet_ninja_labs_pepe_draw_1_1_0
      'inj1x5zv3pl0al8q3f6txg0rzrvc87umr3rlu2au6u', //testnet_ninja_labs_pvp_battle_1_1_0
      'inj1xc75edasg2qnwzvw474hdwhcsacraw9e2cm729', //testnet_ninja_labs_meme_coin_flip_1_1_0
    ];
    let totalPoints = 0;

    for (let contract of contracts) {
      try {
        let response: any;

        try {
          response = (await chainGrpcWasmApi.fetchSmartContractState(
            contract,
            toBase64({ get_user_informations: { address: newAccount } }),
          )) as unknown as { data: string };
        } catch (e) {}

        if (response?.data) {
          const result = fromBase64(response.data)
            .user_informations as IPlatformPoints;

          totalPoints += Number(result.points);
        }

        //return result;
      } catch (e) {
        return;
      }
    }
    return {
      points: totalPoints,
    };
  }

  const { data: userPlatformData, trigger: mutateUserInformations } = useSWR(
    'plaftormData',
    getPlatformData,
  );

  useEffect(() => {
    if (account) {
      mutateUserInformations();

      getPoints();
    }
  }, [account]);

  return {
    userCommunityData: points,
    userPlatformData: userPlatformData,
  };
};
