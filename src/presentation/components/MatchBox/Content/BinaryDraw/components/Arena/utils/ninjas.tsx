// Ninja Slot
import ninjaBlueSlot from '@/presentation/assets/pvp-battles/ninja-blue-slot.png';
import ninjaGreenSlot from '@/presentation/assets/pvp-battles/ninja-green-slot.png';
import ninjaGraySlot from '@/presentation/assets/pvp-battles/ninja-gray-slot.png';
import ninjaOrangeSlot from '@/presentation/assets/pvp-battles/ninja-yellow-slot.png';
import ninjaPinkSlot from '@/presentation/assets/pvp-battles/ninja-red-slot.png';

//Ninja Fighting
import ninjaBlueAttack from '@/presentation/assets/pvp-battles/ninja-blue-fighting.webp';
import ninjaGreenAttack from '@/presentation/assets/pvp-battles/ninja-green-fighting.webp';
import ninjaGrayAttack from '@/presentation/assets/pvp-battles/ninja-gray-fighting.webp';
import ninjaOrangeAttack from '@/presentation/assets/pvp-battles/ninja-orange-fighting.webp';
import ninjaPinkAttack from '@/presentation/assets/pvp-battles/ninja-pink-fighting.webp';

// Ninja Attack
import ninjaBlueFighting from '@/presentation/assets/pvp-battles/ninja-blue-attack.webp';
import ninjaGreenFighting from '@/presentation/assets/pvp-battles/ninja-green-attack.webp';
import ninjaGrayFighting from '@/presentation/assets/pvp-battles/ninja-gray-attack.webp';
import ninjaOrangeFighting from '@/presentation/assets/pvp-battles/ninja-orange-attack.webp';
import ninjaPinkFighting from '@/presentation/assets/pvp-battles/ninja-pink-attack.webp';

// Ninja Winner
import ninjaBlueWinner from '@/presentation/assets/pvp-battles/ninja-blue-slot.png';
import ninjaGreenWinner from '@/presentation/assets/pvp-battles/ninja-green-slot.png';
import ninjaGrayWinner from '@/presentation/assets/pvp-battles/ninja-gray-slot.png';
import ninjaOrangeWinner from '@/presentation/assets/pvp-battles/ninja-yellow-slot.png';
import ninjaPinkWinner from '@/presentation/assets/pvp-battles/ninja-red-slot.png';

import { ArenaStyles } from '../styles';

export const ninjasSlot = {
  1: <ArenaStyles.ImageNinja src={ninjaBlueSlot} alt="ninja blue" />,
  2: <ArenaStyles.ImageNinja src={ninjaGreenSlot} alt="ninja green" />,
  3: <ArenaStyles.ImageNinja src={ninjaGraySlot} alt="ninja gray" />,
  4: <ArenaStyles.ImageNinja src={ninjaOrangeSlot} alt="ninja orange" />,
  5: <ArenaStyles.ImageNinja src={ninjaPinkSlot} alt="ninja pink" />,
};

export const ninjaOpponent = {
  1: (
    <ArenaStyles.ImageNinja
      id="opponent"
      src={ninjaBlueAttack}
      alt="ninja blue"
    />
  ),
  2: (
    <ArenaStyles.ImageNinja
      id="opponent"
      src={ninjaGreenAttack}
      alt="ninja green"
    />
  ),
  3: (
    <ArenaStyles.ImageNinja
      id="opponent"
      src={ninjaGrayAttack}
      alt="ninja gray"
    />
  ),
  4: (
    <ArenaStyles.ImageNinja
      id="opponent"
      src={ninjaOrangeAttack}
      alt="ninja orange"
    />
  ),
  5: (
    <ArenaStyles.ImageNinja
      id="opponent"
      src={ninjaPinkAttack}
      alt="ninja pink"
    />
  ),
};

export const ninjaFighting = {
  1: (
    <ArenaStyles.ImageNinja
      id="attacking"
      src={ninjaBlueFighting}
      alt="ninja blue"
    />
  ),
  2: (
    <ArenaStyles.ImageNinja
      id="attacking"
      src={ninjaGreenFighting}
      alt="ninja green"
    />
  ),
  3: (
    <ArenaStyles.ImageNinja
      id="attacking"
      src={ninjaGrayFighting}
      alt="ninja gray"
    />
  ),
  4: (
    <ArenaStyles.ImageNinja
      id="attacking"
      src={ninjaOrangeFighting}
      alt="ninja orange"
    />
  ),
  5: (
    <ArenaStyles.ImageNinja
      id="attacking"
      src={ninjaPinkFighting}
      alt="ninja pink"
    />
  ),
};

export const ninjaAttacking = {
  1: (
    <ArenaStyles.ImageNinja
      id="fighting"
      src={ninjaBlueAttack}
      alt="ninja blue"
    />
  ),
  2: (
    <ArenaStyles.ImageNinja
      id="fighting"
      src={ninjaGreenAttack}
      alt="ninja green"
    />
  ),
  3: (
    <ArenaStyles.ImageNinja
      id="fighting"
      src={ninjaGrayAttack}
      alt="ninja gray"
    />
  ),
  4: (
    <ArenaStyles.ImageNinja
      id="fighting"
      src={ninjaOrangeAttack}
      alt="ninja orange"
    />
  ),
  5: (
    <ArenaStyles.ImageNinja
      id="fighting"
      src={ninjaPinkAttack}
      alt="ninja pink"
    />
  ),
};

export const ninjaWinner = {
  1: (
    <ArenaStyles.ImageNinja
      id="winner"
      src={ninjaBlueWinner}
      alt="ninja blue"
    />
  ),
  2: (
    <ArenaStyles.ImageNinja
      id="winner"
      src={ninjaGreenWinner}
      alt="ninja green"
    />
  ),
  3: (
    <ArenaStyles.ImageNinja
      id="winner"
      src={ninjaGrayWinner}
      alt="ninja gray"
    />
  ),
  4: (
    <ArenaStyles.ImageNinja
      id="winner"
      src={ninjaOrangeWinner}
      alt="ninja orange"
    />
  ),
  5: (
    <ArenaStyles.ImageNinja
      id="winner"
      src={ninjaPinkWinner}
      alt="ninja pink"
    />
  ),
};
