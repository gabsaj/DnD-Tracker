export interface SpellType {
  name: string;
  level: number;
  duration: number;
  roundTrigger: boolean;
  description: {
    school?: string;
    level?: string;
    components?: string;
    castingTime?: string;
    range?: string;
    target?: string;
    duration?: string;
    text?: string;
    spellResistance?: string;
    savingThrow?: string;
  };
}

export interface HpType {
  name: string;
  hp: number;
}
