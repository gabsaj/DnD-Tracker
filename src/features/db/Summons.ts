import { SummonType } from "../types/SummonType";

import roc from "../../assets/roc.png";

export const NonElementalSummons: SummonType[] = [
  {
    duration: 34,
    roundTrigger: false,
    name: "Gargantuan Animal",
    img: roc,
    description: {
      size: "Gargantuan",
      HD: "18d8+126 (207 hp)",
      initiative: "+2",
      speed: "20 ft. (4 squares), fly 80 ft. (average)",
      AC: "17 (-4 size, +2 Dex, +9 natural), touch 8, flat-footed 15",
      babGrapple: "+13/+37",
      attack: "Talon +21 melee (2d6+12)",
      fullAttack: "2 talons +21 melee (2d6+12) and bite +19 melee (2d8+6)",
      spaceReach: "20 ft./15 ft.",
      specialAttacks: "—",
      specialQualities: "Low-light vision",
      saves: "Fort +18, Ref +13, Will +9",
      abilities: "Str 34, Dex 15, Con 24, Int 2, Wis 13, Cha 11",
      skills: "Hide -3, Listen +10, Spot +14",
      feats:
        "Alertness, Flyby Attack, Iron Will, Multiattack, Power Attack, Snatch, Wingover",
      aligment: "Always neutral",
    },
  },
];
