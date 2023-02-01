import { SpellType } from "../types/SpellType";

const EightLevelSpells: SpellType[] = [
  {
    name: "Animal Shapes",
    level: 8,
    duration: 10200,
    roundTrigger: false,
    prepared: false,

    description: {
      school: "Transmutation (Polymorph)",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target:
        "Up to one willing creature per level, all within 30 ft. of each other",
      duration: "1 hour/level ",
      text: `
You transform up to one willing creature per caster level into an animal oyour choice; the spell has no effect on unwilling creatures. Use the alternatform special ability to determine each subject’s new abilities, rather thathe polymorph subschool. The maximum Hit Dice of an assumed form is equal tthe subject’s HD or your caster level, whichever is lower, to a maximum of 2HD at 20th level.
Recipients remain in the assumed form until the spell expires or until you dismiss it for all recipients. An individual subject can choose to resume its natural form as a full-round action. Doing so ends the spell for that subject.
      `,
    },
  },
  {
    name: "Bombardment",
    level: 8,
    duration: 0,
    roundTrigger: false,
    prepared: false,

    description: {
      school: "Conjuration (Creation)",
      components: "V, S, F",
      castingTime: "1 standard action",
      range: "Long (400 ft. + 40 ft./level)",
      target: "Cylinder (15-ft. radius, 40 ft. high)",
      duration: "Instantaneous",
      text: `
You point to the empty air and boulders tumble into being, 
burying your opponents.
You designate the spot on which the cylinder is centered. 
Each creature in the area that fails a Reflex saving throw 
takes 1d8 points of damage per caster level (maximum 20d8) 
and is buried under 5 feet of rubble. A successful save halves 
the damage and avoids burial. A buried creature can free itself 
with a DC 20 Strength check (a full-round action), or it can be 
dug free by others (a single creature working alone requires 1 minute
to free a trapped creature). A buried creature is unable to move, 
and cannot cast spells with somatic components, and any material 
components must be in hand.

After this spell is cast, its area is covered in 5 feet of dense rubble (DMG 90)

Focus: A quartz crystal embedded in rock.
      `,
    },
  },
  {
    name: "Brilliant Aura",
    level: 8,
    duration: 17,
    roundTrigger: false,
    prepared: false,

    description: {
      school: "Transmutation",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target:
        "Weapons carried by one creature/2 levels, no two of which are more than 30 ft. apart",
      duration: " 1 round/level",
      text: `
With a word, the indicated weapon glows with a soft bluewhite halo that emits a low, slowly 
pulsating hum. The faint smell of ozone permeates the air.
You transform a single melee weapon, natural weapon, thrown weapon, or group of projectiles 
into a weapon with the brilliant energy special ability (DMG 224). If this spell is cast on 
arrows or crossbow bolts, the effect on a particular projectile ends after one use, whether 
or not the missile strikes its intended target. Treat shuriken as arrows, rather than as 
thrown weapons, for the purpose of this spell.
      `,
    },
  },
  {
    name: "COCOON",
    level: 8,
    duration: 1,
    roundTrigger: false,
    prepared: false,

    description: {
      school: "Conjuration (Creation)",
      components: "V, S, M, XP",
      castingTime: "1 round",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "One corpse",
      text: `
The silkworm cocoon disappears from your palm, and silk threads 
coalesce from thin air around your target, quickly wrapping about 
the body until it is fully encased. When cast upon a deceased 
creature (whose death can be no less recent than 1 round per caster level), 
this spell preserves the body and begins a slow process of rebirth. 
If the corpse is raised, resurrected, or reincarnated at any point during the 
next week, the creature takes no level loss or Constitution loss normally 
associated with such spells. At the conclusion of the week, if the subject 
has not been returned to life, the creature is automatically reincarnated, 
as the spell, with no loss of level or Constitution.`,
    },
  },
  {
    name: "Control Plants",
    level: 8,
    duration: 170,
    roundTrigger: false,
    prepared: false,

    description: {
      school: "Transmutation",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target:
        "Up to 2 HD/level of plant creatures, no two of which can be more than 30 ft. apart",
      text: `
This spell enables you to control the actions of one or more plant 
creatures for a short period of time. You command the creatures by voice 
and they understand you, no matter what language you speak. Even if vocal 
communication is impossible the controlled plants do not attack you. At the 
end of the spell, the subjects revert to their normal behavior.
Suicidal or self-destructive commands are simply ignored.`,
    },
  },
  {
    name: "Deadfall",
    level: 8,
    duration: 1,
    roundTrigger: false,
    prepared: false,

    description: {
      school: "Conjuration (Creation)",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Long (400 ft. + 40 ft./level)",
      target:
        "Mass of dead wood forming in a cylinder (20-ft. radius, 40 ft. high); see text",
      text: `
With the final word of the spell you call into being a huge 
tower of logs and branches. It collapses to the ground with 
a roar, crushing creatures beneath its weight. Pick a point 
on the ground as the center of the radius and bottom of the 
cylinder. Deadfall creates a tangled mass of huge branches, 
logs, and fallen trees on the ground. The deadfall immediately 
collapses in on itself with terrific force and noise. Creatures 
and objects in the area take 1d6 points of damage per caster 
level (maximum 20d6). In addition, creatures in the area must 
succeed on a Reflex save or be knocked prone. Once you cast the 
spell, a considerable volume of dead wood remains behind. This 
pile of brush is 5 feet high, with a 20-foot radius, and it counts 
as dense rubble (DMG 90).`,
    },
  },
  {
    name: "Earth Glide",
    level: 8,
    duration: 170,
    roundTrigger: false,
    prepared: false,

    description: {
      school: "Transmutation",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      text: `You give the subject the ability to glide through earth and stone as easily as an earth elemental does.
The affected creature can glide through stone, dirt, or almost any other sort of earth except metal as easily as a fish swims through water. Its burrowing leaves behind no tunnel or hole, nor does it create any ripple or other signs of its presence.
A move earth spell cast on an area containing the affected creature flings the creature back 30 feet and stuns the creature for 1 round unless it succeeds on a DC 15 Fortitude save.`,
      duration: "1 min./level",
      savingThrow: "Will negates (harmless)",
      spellResistance: "Yes (harmless)",
    },
  },
];

export default EightLevelSpells;
