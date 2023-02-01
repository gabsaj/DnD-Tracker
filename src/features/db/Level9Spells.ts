import { SpellType } from "../types/SpellType";

const Level9Spells: SpellType[] = [
  {
    name: "Antipathy",
    level: 9,
    duration: 20400,
    roundTrigger: false,
    description: {
      school: "Enchantment (Compulsion)",
      components: "V, S, M/DF",
      castingTime: "1 hour",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "One location (up to a 10-ft.cube/level) or one object",
      duration: "2 hours/level (D)",
      text: `
You cause an object or location 
to emanate magical vibrations that 
repel either a specific kind of 
intelligent creature or creatures 
of a particular alignment, as defined 
by you. The kind of creature to be 
affected must be named specifically—for 
example, red dragons, hill giants, wererats, 
lammasus, cloakers, or vampires. 
A creature subtype (such as goblinoid) is not 
specific enough. Likewise, the specific 
alignment to be repelled must be named— for 
example, chaotic evil, chaotic good, lawful 
neutral, or neutral. Creatures of the 
designated kind or alignment feel an 
overpowering urge to leave the area or to 
avoid the affected item. A compulsion forces 
them to abandon the area or item, shunning it 
and never willingly returning to it while the 
spell is in effect. A creature that makes a 
successful saving throw can stay in the area 
or touch the item but feels uncomfortable doing 
so. This distracting discomfort reduces the 
creature’s Dexterity score by 4 points. 
Antipathy counters and dispels sympathy.`,
    },
  },
  {
    name: "Cast in Stone",
    level: 9,
    duration: 17,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Personal",
      target: "You",
      duration: " 1 round/level (D)",
      text: `
Your eyes become like gray stone orbs traced 
with golden veins. The change catches the foes 
fighting you by surprise, and they turn to stone.
Any creature within 30 feet that meets your gaze is 
permanently turned into a mindless, inert statue 
(as flesh to stone), unless it succeeds on a Fortitude 
save. You can free the victim of your own cast in stone 
at any time by speaking a command word you establish 
during the casting. Each creature within range of the 
gaze must attempt a saving throw against the gaze effect 
each round at the beginning of its turn. A creature can 
avert its eyes, which grants a 50% chance to avoid the gaze 
but in turn grants you concealment relative to it. A creature 
can close its eyes or turn away entirely; doing so prevents 
the gaze from affecting it but grants you total concealment 
from that creature. In addition, you can actively attempt 
to use the gaze as a standard action each round. To do so, 
you choose a target within range, and that target must 
attempt a saving throw. A target that is averting or shutting 
its eyes gains the above benefits.
      `,
    },
  },
  {
    name: "Cometstrike",
    level: 9,
    duration: 3,
    roundTrigger: false,
    description: {
      school: "Conjuration (Creation) [Cold]",
      components: "V, DF",
      castingTime: "1 standard action",
      range: "Medium (100 ft. + 10 ft./level)",
      target: "Three different creatures or objects",
      duration: " 3 duration",
      text: `
This spell may only be cast in an outdoor area; it fails if cast 
indoors or underground.
When you cast this spell, you cause three frozen comets to strike 
down upon any three different creatures or objects in range. 
You must make a ranged touch attack to hit each target. Each target 
struck takes 3d6 points of bludgeoning damage and 1d4 points of 
cold damage per level (maximum 10d4), and is stunned for one round. 
A successful Reflex save negates the bludgeoning damage and the 
stunning effects, but not the cold damage.
Each round the spell persists, another three frozen comets rain down 
upon the original three targets; as a standard action you can select 
new targets for one, two, or all three comets.
      `,
    },
  },
];

export default Level9Spells;
