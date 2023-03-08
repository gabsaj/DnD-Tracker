export interface SummonType {
  handleSummon: () => void;
  duration: number;
  roundTrigger: boolean;
  name: string;
  img: string;
  description: {
    size: string;
    HD: string;
    initiative: string;
    speed: string;
    AC: string;
    babGrapple: string;
    attack: string;
    fullAttack: string;
    spaceReach: string;
    specialAttacks: string;
    specialQualities: string;
    saves: string;
    abilities: string;
    skills: string;
    feats: string;
    aligment: string;
    burnDc?: string;
  };
}
