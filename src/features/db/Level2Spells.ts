import { SpellType } from "../types/SpellType";

export const Level2Spells: SpellType[] = [
  {
    name: "Align Fang",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "ALIGN FANG Transmutation [see text]",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Living creature touched",
      duration: "1 minute/level",
      text: `
(harmless) You kneel beside your animal 
companion and press a sprig of mistletoe against
its forehead, calling upon the power of nature.
Align fang makes a creature\u2019s natural 
weapons good-, evil-, lawful-, or chaotic- aligned, 
as you choose. A natural weapon that is aligned 
can overcome the damage reduction of certain creatures, 
usually outsiders of the opposite alignment. This spell 
has no effect on a natural weapon that is already treated 
as being aligned, such as the claw or bite attack of most 
demons. You can\u2019t cast this spell on a manufactured 
weapon, such as a sword. When you cast this spell to make 
a natural weapon good-, evil-, lawful-, or chaotic-aligned, 
align fang is a good, evil, lawful, or chaotic spell, 
respectively.`,
    },
  },
  {
    name: "Animal Messenger",
    level: 2,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Enchantment (Compulsion) [Mind-Affecting]",
      components: "V, S, M",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "One Tiny animal",
      duration: "One day/level",
      text: `
You compel a Tiny animal to go to a spot you designate. 
The most common use for this spell is to get an animal to 
carry a message to your allies. The animal cannot be one tamed 
or trained by someone else, including such creatures as familiars
and animal companions. Using some type of food desirable to the 
animal as a lure, you call the animal to you. It advances and
awaits your bidding. You can mentally impress on the animal a 
certain place well known to you or an obvious landmark. 
The directions must be simple, because the animal depends on 
your knowledge and can\u2019t find a destination on its own. 
You can attach some small item or note to the messenger. The animal 
then goes to the designated location and waits there until the duration 
of the spell expires, whereupon it resumes its normal activities. 
During this period of waiting, the messenger allows others to approach 
it and remove any scroll or token it carries. The intended recipient 
gains no special ability to communicate with the animal or read any 
attached message (if it\u2019s written in a language he or she 
doesn\u2019t know, for example). Material Component A morsel of 
food the animal likes.`,
    },
  },
  {
    name: "Animal Trance",
    level: 2,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Enchantment (Compulsion) [Mind-Affecting, Sonic]",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: " Animals or magical beasts with Intelligence 1 or 2",
      duration: "Concentration",
      text: `
Your swaying motions and music (or singing, or chanting) 
compel animals and magical beasts to do nothing but watch you. 
Only a creature with an Intelligence score of 1 or 2 can be 
fascinated by this spell. Roll 2d6 to determine the total number 
of HD worth of creatures that you fascinate. The closest targets 
are selected first until no more targets within range can be 
affected. A magical beast, a dire animal, or an animal trained to 
attack or guard is allowed a saving throw; an animal not trained to 
attack or guard is not.`,
    },
  },
  {
    name: "Animalistic Power",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, M",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "1 minute/level",
      text: `
ranger 2, sorcerer/wizard 2 A sparkling nimbus 
of green light appears around the creature. As the light fades, 
the creature seems a shade larger and assumes a more animalistic, 
even feral countenance. You imbue the subject with an aspect of the 
natural world. The subject gains a +2 enhancement bonus to Strength, 
Dexterity, and Constitution.`,
    },
  },
  {
    name: "Avoid Planar Effects",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Abjuration",
      components: "V",
      castingTime: "1 immediate action",
      range: "20 ft.",
      target: "One creature/level in a 20-ft.-radius burst centered on you",
      duration: "1 minute/level",
      text: `
wizard 3 20-ft.-radius burst centered on you 
The danger of the plane surprises you, and you have 
barely time to bark out a few elder words of power. 
In a moment you\u2019re safe, and you gain a brief 
respite\u2014time enough to cast more permanent protective 
spells. You gain a temporary respite from the natural effects 
of a specific plane. These effects include extremes in 
temperature, lack of air, poisonous fumes, emanations of 
positive or negative energy, or other attributes of the 
plane itself (DMG 150). Avoid planar effects provides 
protection from the 3d10 points of fire damage that characters 
normally take when on a plane with the fire-dominant trait. 
Avoid planar effects allows a character to breathe water on a 
waterdominant plane and ignore the threat of suffocation on 
an earth-dominant plane. A character protected by avoid planar 
effects can\u2019t be blinded by the energy of a major 
positive-dominant plane and automatically stops gaining 
temporary hit points when they equal the character\u2019s full 
normal hit point total. Negative-dominant planes don\u2019t deal 
damage or bestow negative levels to characters protected by 
avoid planar effects. In addition, some effects specific to a 
plane are negated by avoid planar effects. In the D&D cosmology, 
avoid planar effects negates the deafening effect of Pandemonium 
and the cold damage on the Cania layer of the Nine Hells. The DM can 
add additional protections for a cosmology he creates. If the 
campaign has an Elemental Plane of Cold, for example, avoid planar 
effects protects against the base cold damage dealt to everyone on 
the plane. The effects of gravity traits, alignment traits, and magic 
traits aren\u2019t negated by avoid planar effects, nor is the special 
entrapping trait of certain planes (such as Elysium and Hades). 
The spell does not provide protection against creatures, native or 
otherwise, nor does it protect against spells, special abilities, or 
extreme and nonnatural formations within the plane. This spell allows
you to survive on the Elemental Plane of Earth, for instance, but it 
won\u2019t protect you if you walk into a pool of magma on that 
same plane.`,
    },
  },
  {
    name: "Barkskin",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Living creature touched",
      duration: "10 min./level",
      text: `
Barkskin toughens a creature\u2019s skin. The effect grants 
a +2 enhancement bonus to the creature\u2019s existing natural 
armor bonus. This enhancement bonus increases by 1 for every three 
caster levels above 3rd, to a maximum of +5 at caster level 12th. 
The enhancement bonus provided by barkskin stacks with the 
target\u2019s natural armor bonus, but not with other enhancement 
bonuses to natural armor. A creature without natural armor has an 
effective natural armor bonus of +0.`,
    },
  },
  {
    name: "Balancing Lorecall",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Divination",
      components: "V, S, M/DF",
      castingTime: "1 standard action",
      range: "Personal",
      target: "You",
      duration: "1 minute/level (D)",
      text: `
wizard 2 As you perform the final gestures of the spell 
you feel magic surround you, pushing on you from all sides as 
if trying to help keep you standing tall. You gain a +4 insight 
bonus on Balance checks. If you have sufficient ranks in the 
Balance skill, you can even balance on an otherwise-impossible 
surface with a DC 20 Balance check. If you have 5 or more ranks 
in Balance, you can balance on vertical surfaces; the normal 
modifier for a sloped or angled surface no longer applies to 
you, though other DC modifiers (such as for a slippery surface) 
do apply. If you balance on a vertical surface, you can move up 
or down as if you were climbing. However, you are not actually 
climbing, so you can make attacks normally, retain your Dexterity 
bonus to Armor Class, and generally follow the rules of the 
Balance skill rather than the Climb skill. If you have 10 or 
more ranks in Balance, you can balance on liquids, semisolid 
surfaces such as mud or snow, or similar surfaces that normally 
couldn\u2019t support your weight. For each consecutive round 
that you begin balanced on a particular surface of this sort, 
the DC of your Balance check increases by 5. As with all uses 
of the Balance skill, you move at half speed unless you decide 
to use the accelerated movement option (thereby increasing the 
DC of the Balance check by 5). 3-inch-long wooden dowel.`,
    },
  },
  {
    name: "Bear's Endurance",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "1 min./level",
      text: `
The affected creature gains greater vitality and stamina. 
The spell grants the subject a +4 enhancement bonus to Constitution, 
which adds the usual benefits to hit points, Fortitude saves, 
Constitution checks, and so forth. Hit points gained by a temporary 
increase in Constitution score are not temporary hit points. They 
go away when the subject\u2019s Constitution drops back to normal. 
They are not lost first as temporary hit points are.`,
    },
  },
  {
    name: "Binding Winds",
    level: 2,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Evocation [Air]",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Medium (100 ft. + 10 ft./level)",
      target: "One creature",
      duration: "Concentration",
      text: `
Calling upon the power of elemental air, 
you encircle the target in whipping winds. The subject 
can act normally, but it cannot move from its current location. 
The winds carry its voice away, so it can speak but cannot be heard, 
and it cannot hear anything but the roar of the winds. This spell 
distracts spellcasters, and so a Concentration check is required to 
successfully cast any spell (DC equal to this spell\u2019s DC + the level of 
the spell being cast). Furthermore, no sonic or languagedependent spells or 
effects can be cast into or out of the winds (though spells cast by you upon 
yourself function normally). Ranged attacks made into or out of the winds 
take a \u20132 penalty. Binding winds holds flying creatures in midair.`,
    },
  },
  {
    name: "Bite Of The Wererat",
    level: 2,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, M",
      castingTime: "1 standard action",
      range: "Personal",
      target: "You",
      duration: "1 round/level",
      text: `
With a sneeze, you grow a whiskered snout and ratlike tail as fi ne gray 
fur covers your thickening skin. You gain a +6 enhancement bonus to Dexterity, 
a +2 enhancement bonus to Constitution, and a +3 enhancement bonus to natural armor. 
Your face lengthens into a ratlike snout, and you gain a bite attack that deals 1d4 
points of damage (or 1d3 points if you are Small) + 1-1/2 times your Str modifi er. 
You also gain the benefi t of the Weapon Finesse feat. If your base attack bonus is 
+6 or higher, you do not gain any additional attacks.`,
    },
  },
  {
    name: "Blaze of Light",
    level: 2,
    duration: 1,
    roundTrigger: false,
    description: {
      school: "Evocation [Light]",
      components: "V, S,",
      castingTime: "1 standard action",
      range: "60 ft.",
      target: "Cone",
      duration: "Instantaneous",
      text: `
A cone of bright light shines forth from just above the caster's head. 
All creatures within the cone that fail a Fortitude saving throw are 
dazzled for 1 minute. Sightless creatures are not affected by blaze of light. 
A light spell (one with the light descriptor) counters and dispels a darkness 
spell (one with the darkness descriptor) of an equal or lower level.`,
    },
  },
  {
    name: "Blinding Spittle",
    level: 2,
    duration: 1,
    roundTrigger: false,
    description: {
      school: "",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "One missile of spit",
      duration: "Instantaneous",
      text: `
Whipping your head forward with the last word 
of the spell, you spit a globule of dark liquid 
at your foe. You spit caustic saliva into your 
target\u2019s eyes with a successful ranged touch 
attack. A \u20134 penalty applies to the attack roll. 
The subject is blinded until it can wash its eyes 
with water or some other rinsing fluid, which requires 
a standard action. This spell has no effect on creatures 
without eyes or creatures that don\u2019t depend on eyes 
for vision.`,
    },
  },
  {
    name: "Blood Frenzy",
    level: 2,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Any creature with the rage",
      duration: "Special; see text",
      text: `
ability A hot rush of anger flows through your 
target\u2019s veins. The target creature enters a 
rage, as its rage special ability, but this rage does 
not count toward the creature\u2019s number of rage 
attempts per day.`,
    },
  },
  {
    name: "Body of the Sun",
    level: 2,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "Transmutation [Fire]",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "5 ft.",
      target: "5-ft.-radius emanation centered",
      duration: "1 round/level",
      text: `
on you By drawing on the power of the sun, you cause your 
body to emanate fi re. Fire extends 5 feet in all directions from 
your body, illuminating the area and dealing 1d4 points of fi re damage 
per two caster levels (maximum 5d4). Adjacent creatures take fi re damage 
each round on your turn.`,
    },
  },
  {
    name: "Brambles",
    level: 2,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, M",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Wooden weapon touched",
      duration: "1 round/level",
      text: `
With the sound of twisting wood, the weapon you touch grows 
sharp spikes like rose thorns. For the duration of the spell, the weapon
deals both piercing and bludgeoning damage. It gains a +1 enhancement bonus 
on its attacks and also gains a +1 enhancement bonus per caster level on melee 
damage rolls (maximum +10). This spell works only on melee weapons with wooden 
striking surfaces. For instance, it does not work on a bow, an arrow, or a 
metal mace.`,
    },
  },
  {
    name: "Briar Web",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Medium (100 ft. + 10 ft./level)",
      target: "40-ft.-radius spread",
      duration: "1 minute/level",
      text: `
With a sound like a thousand knives being unsheathed, 
the plants in the area grow sharp thorns and warp into a 
thick briar patch. This spell causes grasses, weeds, bushes, 
and even trees to grow thorns and wrap and twist around creatures 
in or entering the area. The spell\u2019s area becomes difficult 
terrain, and creatures move at half speed within the affected area. 
Any creature moving through the area also takes 1 point of nonmagical 
piercing damage for each 5 feet moved. A creature with freedom of movement 
or the woodland stride ability is unaffected by this spell.`,
    },
  },
  {
    name: "Bull\u2019s Strength",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, M/DF",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "1 min./level",
      text: `
Strength 2 The subject becomes stronger. 
The spell grants a +4 enhancement bonus to Strength, adding the usual 
benefits to melee attack rolls, melee damage rolls, and other uses of 
the Strength modifier.`,
    },
  },
  {
    name: "Burrow",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, F/DF",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "1 minute/level (D)",
      text: `
You invoke the spell and your hands glow with a yellow aura, 
the aura lengthening and forming into translucent mole hands. 
The smell of freshly turned earth fills the air. The subject can burrow 
through earth and loose rock (but not solid stone) with a speed of 
30 feet (or 20 feet if it wears medium or heavy armor,
or if it carries a medium or heavy load).`,
    },
  },
  {
    name: "Camouflage, Mass",
    level: 2,
    duration: 0,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S",
      castingTime: " 1 standard action",
      range: "Medium (100 ft. + 10 ft./level)",
      target: "Any number of creatures, no",
      duration: "10 minutes/level",
      text: `
two of which are more than 60 ft. apart (harmless) Reaching out to your 
environment, you wrap your allies in the patterns and shifting colors of 
their surroundings, concealing them from prying eyes. This spell functions 
like camouflage, except the effect is mobile with the group. The spell is 
broken for any individual who moves more than 60 feet from the nearest member 
of the group. (If only two individuals are affected, the one moving away from 
the other one loses its camouflage. If both are moving away from each other, 
they both become visible when the distance between them exceeds 60 feet.)`,
    },
  },
  {
    name: "Cat\u2019s Grace",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, M",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "1 min./level",
      text: `
The transmuted creature becomes more graceful, 
agile, and coordinated. The spell grants a +4 enhancement 
bonus to Dexterity, adding the usual benefits to AC, Reflex 
saves, and other uses of the Dexterity modifier. Material 
Component A pinch of cat fur.`,
    },
  },
  {
    name: "Chill Metal",
    level: 2,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "Transmutation [Cold]",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target:
        "Metal equipment of one creature per two levels, no two of which can be more than 30 ft. apart; or 25\u00a0lb. of metal/level, none of which can be more than 30 ft. away from any of the rest",
      duration: "7 rounds",
      text: `
Chill metal makes metal extremely cold. Unattended, nonmagical metal 
gets no saving throw. Magical metal is allowed a saving throw against 
the spell. An item in a creature\u2019s possession uses the creature\u2019s 
saving throw bonus unless its own is higher. A creature takes cold damage if 
its equipment is chilled. It takes full damage if its armor is affected or if 
it is holding, touching, wearing, or carrying metal weighing one-fifth of its 
weight. The creature takes minimum damage (1 point or 2 points; see the table) 
if it\u2019s not wearing metal armor and the metal that it\u2019s carrying weighs 
less than one-fifth of its weight. Round Metal Temperature Damage 1 Cold None 2 Icy 
1d4 points 3-5 Freezing 2d4 points 6 Icy 1d4 points 7 Cold None On the first round of
the spell, the metal becomes chilly and uncomfortable to touch but deals no damage. 
The same effect also occurs on the last round of the spell\u2019s duration. During 
the second (and also the next-to-last) round, icy coldness causes pain and damage. In 
the third, fourth, and fifth rounds, the metal is freezing cold, causing more damage, 
as shown on the table below. Any heat intense enough to damage the creature negates cold 
damage from the spell (and vice versa) on a point-for-point basis. Underwater, 
chill metal deals no damage, but ice immediately forms around the affected metal, 
making it more buoyant. Chill metal counters and dispels heat metal.`,
    },
  },
  {
    name: "Cloud Wings",
    level: 2,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "1 hour/level",
      text: `
(harmless) As you touch the subject, mist forms crude wings that cling to his back. 
This spell increases the subject\u2019s fly speed by 30 feet. It has no effect on 
other modes of movement, nor does it allow the subject to fly if it cannot already 
do so.`,
    },
  },
  {
    name: "Countermoon",
    level: 2,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Abjuration",
      components: "V, S, M",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "One lycanthrope",
      duration: "12 hours",
      text: `
Translucent red chains fly from your outstretched hand to wrap around the target 
before fading away. This spell forces a lycanthrope back to its natural form and 
keeps it from changing form, preventing both voluntary shapechanging through the 
alternate form ability and involuntary shapechanging because of lycanthropy. or 
other cast-off item from the type of creature.`,
    },
  },
  {
    name: "Creeping Cold",
    level: 2,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "Transmutation [Cold]",
      components: "V, S, F",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "One creature",
      duration: "3 rounds",
      text: `
Reaching out your hand and making a crushing motion, you turn the 
subject\u2019s sweat to ice, creating blisters as the ice forms on and 
inside the skin. The subject takes 1d6 cumulative points of cold damage 
per round (that is, 1d6 on the 1st round, 2d6 on the second, and 3d6 on the third). 
Only one save is allowed against the spell; if successful, it halves the damage 
each round.`,
    },
  },
  {
    name: "Daggerspell Stance",
    level: 2,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "Abjuration",
      components: "V, F",
      castingTime: "1 swift action",
      range: "Personal",
      target: "You",
      duration: "1 round/level (D)",
      text: `
The daggers in your hands glow silver as you complete the spell. They feel as if they 
have become a part of your body. While this spell is in effect, if you make a full 
attack while holding a dagger in each hand, you gain a +2 insight bonus on attack rolls 
and damage rolls made with daggers in that round. The magical energy that permeates your 
daggers while this spell is active allows you to deflect the magical energy of spells. 
When wielding two daggers and fighting defensively, you gain spell resistance 
equal to 5 + your caster level. The spell focuses on your concentration so that when you 
devote all of your attention to defense, you can turn the force of most blows away from 
your body with your daggers. When wielding two daggers and using the total defense action, 
you gain both the spell resistance benefit described above and damage reduction 5/magic.`,
    },
  },
  {
    name: "Delay Poison",
    level: 2,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Conjuration (Healing)",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "1 hour/level",
      text: `
The subject becomes temporarily immune to poison. 
Any poison in its system or any poison to which it is exposed 
during the spell\u2019s duration does not affect the subject 
until the spell\u2019s duration has expired. Delay poison does 
not cure any damage that poison may have already done.`,
    },
  },
  {
    name: "Earthbind",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Medium (100 ft. + 10 ft./level)",
      target: "One creature",
      duration: "1 minute/level (D)",
      text: `
Your foe will reach you in seconds. You cast this spell, and yellow strips 
of magical energy loop about its wings, hampering its flight and dragging it 
to ground. You hamper the subject creature's ability to fly 
(whether through natural or magical means) for the duration of the spell. 
If the target fails its saving throw, its fly speed (if any) becomes 0 feet. 
An airborne creature subjected to this spell falls to the ground as if under 
the effect of a feather fall spell. Even if a new effect would grant the 
creature the ability to fly, that effect is suppressed for the duration of the 
earthbind spell. If the target makes a successful Fortitude save, its fly speed 
(including any new effect granted during the spell's duration) is reduced by 10 
feet per caster level (maximum reduction 100 feet at 10th level). This reduction 
can't bring the creature's fly speed down to less than 10 feet. Earthbind has no 
effect on other forms of movement, or even on effects that might grant airborne 
movement without granting a fly speed (such as jumping or levitate or air walk spells).`,
    },
  },
  {
    name: "Earthen Grace",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Abjuration [Earth]",
      components: "V, S, M",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Living creature touched",
      duration: "1 minute/level",
      text: `
(harmless) You sprinkle the spell\u2019s component on your target, causing its 
skin to momentarily take on the speckled gray look of granite. The smell of dust 
hangs heavily in the air. You grant the subject an affi nity for earth and stone. 
Any damage the subject takes from a stone or earthen source counts as nonlethal 
damage for the duration of the spell. Natural attacks by creatures made of earth 
or stone (such as stone golems), natural attacks by creatures of the earth subtype, 
and attacks by stone weapons (such as a stone hammer or a sling stone) instead deal 
nonlethal damage, as does falling damage when the subject lands on rock or earth. 
When the nonlethal damage the subject has taken (from any source) equals the 
subject\u2019s current hit points, the spell ends, and any further damage from a 
stone or earthen source causes damage normally. granite.`,
    },
  },
  {
    name: "Easy Trail",
    level: 2,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Abjuration",
      components: "V, S",
      castingTime: "1 standard action",
      range: "40 ft.",
      target: "40-ft.-radius emanation",
      duration: "1 hour/level (D)",
      text: `
centered on you You sweep your arm as if to push aside a branch and simultaneously 
call out for the plants around you to move aside. Obediently, the plants surrounding 
you oblige. Anyone in the area of the spell (including you) finds the undergrowth held 
aside while they pass. This effect essentially provides a trail through any kind of 
undergrowth, and you treat any trackless terrain as having a trail (PH 164). Once the 
effect of the spell passes, the plants return to their normal shape. The DC to track 
 anyone who traveled within the area of this spell increases by 5 (the equivalent of 
hiding the trail). This spell has no effect on plant creatures (that is, they aren\u2019t 
pushed or held aside by its effect).`,
    },
  },
  {
    name: "Earthfast",
    level: 2,
    duration: 1,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "One stone structure or rock",
      duration: "Instantaneous",
      text: `
formation, up to 25 cubic ft./level Gray bands extend from your fingertips, 
wrapping themselves around the wall like a brace, strengthening it for the coming
assault. You reinforce a rock formation or stone structure. The earthfast spell 
doubles the structure\u2019s hit points and increases its hardness to 10. This spell 
does not function on constructs.`,
    },
  },
  {
    name: "Embrace the Wild",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V",
      castingTime: "1 standard action",
      range: "Personal",
      target: "You",
      duration: "10 minutes/level (D)",
      text: `
While picturing a certain kind of animal in your mind, you cry out in imitation 
of its most common call. Immediately thereafter, you perceive your surroundings 
as the animal you imagined would. Upon casting the spell, you gain the senses of 
animal creatures. You gain low-light vision and either blindsense out to 30 feet 
or scent (your choice). You also gain a +2 bonus on Listen and Spot checks.`,
    },
  },
  {
    name: "Estannas Stew",
    level: 2,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Conjuration (Healing)",
      components: "V, S, F",
      castingTime: "1 round",
      range: "0 ft.",
      target: "Fills pot with healing stew (1 serving/2 levels)",
      duration: "Instantaneous (see text)",
      text: `
The caster must be hold the pot in hand when 
Estanna\u2019s stew is cast; otherwise, the spell fails and is 
wasted. The spell creates one serving per two caster levels (maximum 5).
A single serving heals 1d6+1 points of damage and requires a standard 
action to consume. Any portion of the stew that is not consumed disappears 
after 1 hour. The stew can be splashed onto a single undead creature within 
10 feet. If a ranged touch attack succeeds, the undead creature takes 1d6+1 
points of damage per serving splashed on it. The undead creature can apply 
spell resistance and can attempt a Will save to take half damage.`,
    },
  },
  {
    name: "Evergreen",
    level: 2,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Transmutation [Fire]",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Medium (100 ft. + 10 ft./level)",
      target: "10-ft. radius",
      duration: "1 hour/level and instantaneous; see text",
      text: `
You imbue a 10-foot-radius area of plant life with magical heat, 
instantly healing 1d8 points of damage +1 point per caster level 
(maximum +10), and granting immunity to cold for the duration of the 
spell. Evergreen affects natural plants as well as creatures with the 
plant subtype.`,
    },
  },
  {
    name: "Fins to Feet",
    level: 2,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Willing creature touched",
      duration: "1 hour/level",
      text: `
The naga\u2019s lower extremities thrash about and slowly transform into 
humanoid limbs. This spell transforms tails, tentacles, or finned extremities 
into humanoid legs and feet. Creatures so affected lose any natural swim speed 
they possess but gain a land speed instead. Transmuted Medium creatures have a 
base land speed of 30 feet, Small and smaller creatures have a base land speed 
of 20 feet, and Large or larger creatures have a base land speed of 40 feet. 
The creature loses any natural attacks based on its tail or tentacles.`,
    },
  },
  {
    name: "Fire Trap",
    level: 2,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Abjuration [Fire]",
      components: "V, S, M",
      castingTime: "10 minutes",
      range: "Touch",
      target: "Object touched",
      duration: "Permanent until discharged (D)",
      text: `
Fire trap creates a fiery explosion when an intruder opens the item that the trap protects. 
A fire trap can ward any object that can be opened and closed. When casting fire trap, you 
select a point on the object as the spell\u2019s center. When someone other than you opens 
the object, a fiery explosion fills the area within a 5-foot radius around the spell\u2019s center. 
The flames deal 1d4 points of fire damage +1 point per caster level (maximum +20). The item 
protected by the trap is not harmed by this explosion. A fire trapped item cannot have a second 
closure or warding spell placed on it. A knock spell does not bypass a fire trap. An unsuccessful 
dispel magic spell does not detonate the spell. Underwater, this ward deals half damage and creates a 
large cloud of steam. You can use the fire trapped object without discharging it, as can any individual 
to whom the object was specifically attuned when cast. Attuning a fire trapped object to an individual 
usually involves setting a password that you can share with friends. Material Component A half-pound of 
gold dust (cost 25 gp) sprinkled on the warded object.`,
    },
  },
  {
    name: "Flame Blade",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Evocation [Fire]",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "0 ft.",
      target: "Sword-like beam",
      duration: "1 min./level (D)",
      text: `
A 3-foot-long, blazing beam of red-hot fire springs forth from your hand. You wield this bladelike 
beam as if it were a scimitar. Attacks with the flame blade are melee touch attacks. The blade deals 
1d8 points of fire damage +1 point per two caster levels (maximum +10). Since the blade is immaterial, 
your Strength modifier does not apply to the damage. A flame blade can ignite combustible materials 
such as parchment, straw, dry sticks, and cloth. The spell does not function underwater.`,
    },
  },
  {
    name: "Flaming Sphere",
    level: 2,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "Evocation [Fire]",
      components: "V, S, M/DF",
      castingTime: "1 standard action",
      range: "Medium (100 ft. + 10 ft./level)",
      target: "5-ft.-diameter sphere",
      duration: "1 round/level",
      text: `
A burning globe of fire rolls in whichever direction you point and burns those it strikes. It 
moves 30 feet per round. As part of this movement, it can ascend or jump up to 30 feet to strike a target. 
If it enters a space with a creature, it stops moving for the round and deals 2d6 points of fire damage to 
that creature, though a successful Reflex save negates that damage. A flaming sphere rolls over barriers 
less than 4 feet tall. It ignites flammable substances it touches and illuminates the same area as a torch would. 
The sphere moves as long as you actively direct it (a move action for you); otherwise, it merely stays at rest 
and burns. It can be extinguished by any means that would put out a normal fire of its size. The surface of the 
sphere has a spongy, yielding consistency and so does not cause damage except by its flame. It cannot push aside 
unwilling creatures or batter down large obstacles. A flaming sphere winks out if it exceeds the spell\u2019s range. 
Arcane Material Component A bit of tallow, a pinch of brimstone, and a dusting of powdered iron.`,
    },
  },
  {
    name: "Flash-Freeze",
    level: 2,
    duration: 1,
    roundTrigger: false,
    description: {
      school: "Transmutation [Cold, Earth]",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "10-ft. square/level",
      duration: "Instantaneous",
      text: `
All earth, stone, and water in the spell's area is drained of heat. Earth, mud, and stone become 
everfrost and water freezes. You affect a 10-foot-square area to a depth of 1 foot. Magical, 
enchanted, dressed, or worked stone cannot be affected. Earth, stone, or water creatures are 
not affected. This spell can be used to create small icebergs in large bodies of water. These icebergs 
float, but are extremely slippery and unstable, requiring a DC 15 Balance check per round to stay on the 
iceberg. Icebergs may be propelled through the water by the current, paddling, or other means.`,
    },
  },
  {
    name: "Fog Cloud",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Conjuration (Creation)",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Medium (100 ft. + 10 ft. level)",
      target: "Fog spreads in 20-ft. radius, 20 ft. high",
      duration: "10 min./level",
      text: `
A bank of fog billows out from the point you designate. The fog obscures all sight, 
including darkvision, beyond 5 feet. A creature within 5 feet has concealment 
(attacks have a 20% miss chance). Creatures farther away have total concealment (50% miss chance, 
and the attacker can\u2019t use sight to locate the target). A moderate wind (11+ mph) disperses the 
fog in 4 rounds; a strong wind (21+ mph) disperses the fog in 1 round. The spell does not function underwater.`,
    },
  },
  {
    name: "Freedom of Breath",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Abjuration",
      components: "V, S, M",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "10 min./level",
      text: `
The subject can breathe freely in conditions that ordinarily inhibit respiration, such as sandstorms. 
While freedom of breath is in effect, the subject does not make Constitution checks to avoid the onset 
of suffocation unless no breathable substance is available (such as for a human underwater or 
buried under sand). The spell also protects against stenches, such as those produced by a troglodyte 
or a stinking cloud spell. The subject does not have to make saves or checks against nausea and similar 
effects from strong odors. Freedom of breath also grants a +2 bonus on Fortitude saves and Constitution 
checks to resist poisonous vapors, such as those from a volcanic caldera or a cloudkill spell, for the 
duration of the spell.`,
    },
  },
  {
    name: "Frost Breath",
    level: 2,
    duration: 1,
    roundTrigger: false,
    description: {
      school: "Evocation [Cold]",
      components: "V, S, M",
      castingTime: "1 standard action",
      range: "30 ft.",
      target: "Cone-shaped burst",
      duration: "Instantaneous",
      text: `
Giving a forceful exhale across your cupped hand, your breath shoots forth tinged with frost and 
crystals of ice. You breathe a cone of intense cold at your foes. The spell deals 1d4 points of cold 
damage per two caster levels (maximum 5d4). In addition, all creatures damaged by the frost breath 
that fail their Reflex save are dazed for 1 round by the sudden shock of cold.`,
    },
  },
  {
    name: "Frost Weapon",
    level: 2,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, M",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Weapon touched",
      duration: "1 round/level",
      text: `
You imbue a weapon with icy cold, granting it a power similar to the frost special ability.
A frost weapon deals an extra 1d6 points of cold damage on a successful hit. If cast on a bow, 
crossbow, or sling, the spell bestows the cold energy upon the weapon's ammunition. This ability 
stacks with the frost special ability, but not with itself.`,
    },
  },
  {
    name: "Gust of Wind",
    level: 2,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "Evocation [Air]",
      components: "V, S",
      castingTime: "1 standard action",
      range: "60 ft.",
      target:
        " Line-shaped gust of severe wind emanating out from you to the extreme of the range",
      duration: "1 round",
      text: `
This spell creates a severe blast of air (approximately 50 mph) that originates from you, 
affecting all creatures in its path. A Tiny or smaller creature on the ground is knocked down 
and rolled 1d4\u00d710 feet, taking 1d4 points of nonlethal damage per 10 feet. If flying, a Tiny 
or smaller creature is blown back 2d6\u00d710 feet and takes 2d6 points of nonlethal damage due to 
battering and buffeting. Small creatures are knocked prone by the force of the wind, or if flying 
are blown back 1d6\u00d710 feet. Medium creatures are unable to move forward against the force of 
the wind, or if flying are blown back 1d6\u00d75 feet. Large or larger creatures may move normally 
within a gust of wind effect. A gust of wind can\u2019t move a creature beyond the limit of its range. 
Any creature, regardless of size, takes a -4 penalty on ranged attacks and Listen checks in the 
area of a gust of wind. The force of the gust automatically extinguishes candles, torches, and similar 
unprotected flames. It causes protected flames, such as those of lanterns, to dance wildly and has a 
50% chance to extinguish those lights. In addition to the effects noted, a gust of wind can do anything 
that a sudden blast of wind would be expected to do. It can create a stinging spray of sand or dust, 
fan a large fire, overturn delicate awnings or hangings, heel over a small boat, and blow gases or 
vapors to the edge of its range. Gust of wind can be made permanent with a permanency spell.`,
    },
  },
  {
    name: "Halo of Sand",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Abjuration [Earth]",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Personal",
      target: "You",
      duration: "10 min./level",
      text: `
Halo of sand creates a thin band of sand that swirls and twists around your body, helping to deflect 
incoming attacks. The sand does not make it difficult for others to see you, but it grants a +1 deflection 
bonus to AC. This deflection bonus increases by 1 for every three caster levels above 3rd, to a maximum of 
+4 at caster level 12th.`,
    },
  },
  {
    name: "Healing Lorecall",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Divination",
      components: "V, S, M",
      castingTime: "1 standard action",
      range: "Personal",
      target: "You",
      duration: "10 minutes/level",
      text: `
With a mint leaf under your tongue, you whisper quiet words of soothing comfort. You feel a divine touch 
guiding your healing hand. Also, when determining the amount of damage healed by your conjuration (healing) 
spells, you can substitute your total ranks in Heal for your caster level. The normal caster level limit for 
individual spells still applies; thus, a 3rd-level cleric with 6 ranks in Heal when under the effect of healing 
lorecall cures 1d8+5 points of damage with a cure light wounds spell.`,
    },
  },

  {
    name: "Heartfire",
    level: 2,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "Evocation [Light, Fire]",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "Living creatures within a 5-ft.-radius burst",
      duration: "1 round/level",
      text: `
A \ufb02ickering red \ufb01re bursts in the area you intended. 
Creatures in the area are outlined in the \ufb02ame, some more intensely than others. 
Outlined subjects shed light as torches. Outlined creatures do not benefit from the concealment 
normally provided by darkness (although a 3rd-level or higher magical darkness effect functions normally), 
blur, displacement, invisibility, or similar effects. In addition, if they fail a Fortitude save, 
affected creatures take 1d4 points of \ufb01re damage each round as their passions manifest as physically 
damaging \ufb01re. Creatures that make a successful Fortitude save take only half damage each round for the 
duration of the spell (minimum 1 point per round). Spellcasters affected by this spell who try to cast spells 
must make Concentration checks (DC 10 + half the continuous damage last dealt) each round as they take 
continuous damage from the spell. The \ufb01re created by this spell can be extinguished by normal means; 
doing so ends the outlining effect.`,
    },
  },
  {
    name: "Heat Metal",
    level: 2,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "Heat Metal Transmutation [Fire]",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target:
        "Metal equipment of one creature per two levels, no two of which can be more than 30 ft. apart; or 25\u00a0lb. of metal/level, all of which must be within a 30-ft. circle",
      duration: "7 rounds",
      text: `
Heat metal makes metal extremely warm. Unattended, nonmagical metal gets no saving throw. 
Magical metal is allowed a saving throw against the spell. An item in a creature\u2019s 
possession uses the creature\u2019s saving throw bonus unless its own is higher. A creature 
takes fire damage if its equipment is heated. It takes full damage if its armor is affected or 
if it is holding, touching, wearing, or carrying metal weighing one-fifth of its weight. The 
creature takes minimum damage (1 point or 2 points; see the table) if it\u2019s not wearing metal 
armor and the metal that it\u2019s carrying weighs less than one-fifth of its weight. On the first 
round of the spell, the metal becomes warm and uncomfortable to touch but deals no damage. The same 
effect also occurs on the last round of the spell\u2019s duration. During the second 
(and also the next-to-last) round, intense heat causes pain and damage. In the third, fourth, and 
fifth rounds, the metal is searing hot, causing more damage, as shown on the table below. 
Round Metal Temperature Damage 1 Warm None 2 Hot 1d4 points 3-5 Searing 2d4 points 6 Hot 1d4 points 
7 Warm None Any cold intense enough to damage the creature negates fire damage from the spell 
(and vice versa) on a point-for-point basis. If cast underwater, heat metal deals half damage and 
boils the surrounding water. Heat metal counters and dispels chill metal.`,
    },
  },
  {
    name: "Hold Animal",
    level: 2,
    duration: 0,
    roundTrigger: false,
    description: {
      school: "Enchantment (Compulsion) [Mind-Affecting]",
      components: "V, S",
      castingTime: " 1 standard action",
      range: "Medium (100 ft. + 10 ft./level)",
      target: "One animal",
      duration: "1 round/level (D)",
      text: `
The subject becomes paralyzed and freezes in place. It is aware and breathes normally 
but cannot take any actions, even speech. Each round on its turn, the subject may 
attempt a new saving throw to end the effect. (This is a full-round action that does 
not provoke attacks of opportunity.) A winged creature who is paralyzed cannot 
flap its wings and falls. A swimmer can’t swim and may drown.`,
    },
  },
  {
    name: "Jaws of the Moray",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "1 min./level",
      text: `
      This spell grants the subject a bite attack, which deals damage as indicated below.
      As a primary attack, it adds the creature's Strength modifier to damage. It can also 
      be used as a secondary natural attack in conjunction with a manufactured weapon. 
      Such secondary attacks do not interfere with the primary attack as attacking with an 
      off-hand weapon would do, but the subject takes the usual -5 penalty 
      (or -2 with the Multiattack feat) for the bite attack when used as a secondary natural 
      attack. If the subject hits with its bite attack, it attaches itself to the foe and deals 
      automatic bite damage each round it remains attached. It does not need to make a grapple 
      check, and it does not provoke attacks of opportunity. An attached attacker loses its 
      Dexterity bonus to Armor Class. It cannot use other weapons while attached, but each attack 
      upon from the grappled foe requires a successful grapple check. Others can attack an attached 
      creature with a weapon or grapple. To remove the attached creature through grappling, 
      the opponent must achieve a pin against it. A creature with a natural bite attack can use 
      its own bite damage, if greater, but still gains the ability to attach itself.  

      Size Damage   
      Fine 1d2   
      Diminutive 1d3   
      Tiny 1d4   Small 1d6   
      Medium 1d8   Large 2d6   
      Huge 2d8   
      Gargantuan 4d6   
      Colossal 4d8   `,
    },
  },
  {
    name: "Kelpstrand",
    level: 2,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "Conjuration (Creation)",
      components: "V, S, M",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target:
        "One creature/3 levels, no two of which are more than 30 ft. apart",
      duration: "1 round/level",
      text: `
two of which are more than 30 ft. apart You stretch out your hand and 
long strands of wet kelp streak out to envelop your foes. Make a ranged 
touch attack at each target. If you hit a creature, you immediately make 
an opposed grapple check against the creature as a free action without 
provoking attacks of opportunity. You add your caster level and your Wisdom 
bonus to the result of your grapple check rather than your Strength bonus 
and size bonus. If you succeed, the target becomes entangled in the thick 
strands of kelp and is grappled. Each round, the target can attempt to escape 
the kelpstrand by making a successful grapple or Escape Artist check against 
the kelpstrand\u2019s grapple check. You are not considered grappling yourself 
while using this spell. Once you shoot your strands of kelp, you need not take 
any action to maintain the effect. A creature targeted with multiple kelpstrands 
has to make separate grapple or Escape Artist checks against each kelpstrand 
currently grappling it to escape. If you cast this spell while you are within 300 feet 
of the ocean shore, you gain a +4 bonus on any grapple checks made to determine the 
outcome of a kelpstrand grapple. seaweed.`,
    },
  },
  {
    name: "Lava Missile",
    level: 2,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Conjuration (Creation) [Fire]",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Medium (100 ft. + 10 ft./level)",
      target:
        "Up to five creatures, no two of which can be more than 15 ft. apart.",
      duration: "Insantaneous",
      text: `
A missile of lava darts forth from your fingertip and strikes its target, 
dealing 1d4 points of fire damage. The missile trikes unerringly if the target has 
less than total cover or concealment. Specific parts of a creature can'y be singled out. 
A target that fails its saving throw catches on fire. For every two caster levels, you 
gain an additional missile - two at 4th level, three at 6th level, four at 8th level, 
and the maximum of five at 10th level or higher. If you shoot multiple missiles, you can 
have them strike a single creature or several creatures. A single missile can strike only 
one creature. You must designate targets before you check for fire resistance or roll damage.`,
    },
  },
  {
    name: "Listening Lorecall",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Divination",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Personal",
      target: "You",
      duration: "10 minutes/level",
      text: `
You feel conscious of your ears as they warm noticeably. Sounds that seem as though they 
should be muffled become clear to you. You gain a +4 insight bonus on Listen checks. In addition, 
if you have 5 or more ranks in Listen, you gain blindsense out to 30 feet. If you have 12 or more 
ranks in Listen, you gain blindsight out to 15 feet. A silence spell or effect negates the blindsense 
or blindsight granted by a listening lorecall spell.`,
    },
  },
  {
    name: "Linked Perception",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Divination",
      components: "V, DF",
      castingTime: "1 standard action",
      range: "20 ft.",
      target: "20-ft.-radius emanation centered",
      duration: "1 minute/level (D)",
      text: `
on you Your senses are muddied for a moment, but when they clear, your sight and hearing are improved. 
This spell imparts to all allies in its area a shared awareness of their surroundings. Each ally in the 
area (including yourself ) gains a +2 bonus on Spot and Listen checks per each ally in the area. 
For example, if you and three allies are in the area, each of you gains a +6 bonus.`,
    },
  },
  {
    name: "Local Tremor",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Evocation [Earth]",
      components: "V, S",
      castingTime: "1 standard action",
      range: "30 ft.",
      target: "30-ft. line",
      duration: "1 minute/level or until expended; see text",
      text: `
The earth around your feet begins to ripple, and a directed shock wave of tectonic force is 
released that shoots through the ground. Immediately upon completion of the casting of this spell 
and as often as once per round thereafter, you can cause the ground to shake along a 30-foot line. 
You can produce a number of these tremors equal to your caster level (maximum five). The tremors begin 
at your location and extend in the direction you indicate; any creature caught standing within the area 
must make a Reflex save or fall prone. A spellcaster caught standing on one of these squares must make 
a Concentration check (DC 20 + spell level) or lose any spell that was being attempted. You need not 
produce a tremor immediately upon finishing the casting of this spell. You can perform other actions, 
even the casting of other spells, between producing new tremors. Calling up a new tremor in any round 
after the spell has been cast requires a standard action (as you refocus your concentration on the spell).`,
    },
  },

  {
    name: "Master Air",
    level: 2,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, F",
      castingTime: "1 standard action",
      range: "Personal",
      target: "You",
      duration: "1 round/level",
      text: `

You hold a feather aloft and intone the spell. Great translucent wings unfold from your back. 
You leap up and are airborne. You sprout a pair of insubstantial feathery or batlike (your choice)
wings. You can fly at a speed of 90 feet with good maneuverability 
(60 feet if you\u2019re wearing medium or heavy armor). Using master air requires as much concentration
as walking, so you can attack or cast spells normally. You can charge but not run, and you cannot carry
aloft more weight than your maximum load (PH 161), plus any armor you wear. Should the spell duration expire 
while you are still aloft, the magic fails slowly. You drop 60 feet per round for 1d6 rounds. 
If you reach the ground in that amount of time, you land safely. If not, you fall the rest of the distance,
taking falling damage normally. Since dispelling a spell effectively ends it, you also fall in this way if 
the master air spell is dispelled. or the wing bone of any bat.`,
    },
  },
  {
    name: "Mountain Stance",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Touch",
      target: "One creature",
      duration: "1 minute/level",
      text: `
(harmless) By calling upon the primordial powers of elemental earth, you complete the spell. 
A feeling of stubborn determination fi lls your soul until you touch the spell\u2019s intended 
recipient. You see then in that creature a hint of the same feeling of determination. 
While this spell is in effect, the subject can root itself to the ground as a free action. 
The subject gains a bonus equal to your caster level against any attempts to grapple, lift, 
push, bull rush, overrun, throw, trip, or otherwise force the subject to move against its will 
through either physical or magical means. If at any point such an effort succeeds and the subject 
is forced to move, the spell ends immediately. Any voluntary movement on the subject\u2019s 
part does not end the spell (although a creature cannot be rooted while it moves), and the 
subject can \u201creroot\u201d itself elsewhere in the same manner as described above.`,
    },
  },
  {
    name: "Nature\u2019s Favor",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Evocation",
      components: "V, S, DF",
      castingTime: "1 swift action",
      range: "Touch",
      target: "Animal touched",
      duration: "1 minute",
      text: `
Rubbing the animal\u2019s side, you whisper the final bit of the spell\u2019s ritual. 
The animal glances at you before turning its attention to your foes, bristling as it
does so. You grant the subject animal a +1 luck bonus on attack rolls and damage rolls 
for every three caster levels you possess (maximum +5).`,
    },
  },
  {
    name: "Numbing Sphere",
    level: 2,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "Evocation [Cold]",
      components: "V, S, M, DF",
      castingTime: "1 standard action",
      range: "Medium (100 ft. + 10 ft./level)",
      target: "5-ft.-diameter sphere",
      duration: "1 round/level",
      text: `
A sphere of intense cold energy rolls in whichever direction you point and damages 
those it strikes. It moves 30 feet per round. As part of this movement, it can ascend 
or jump up to 30 feet to strike a target. If it enters a space with a creature, 
it stops moving for the round and deals 1d6 points of cold damage as well as 1d4 points 
of Dexterity damage to that creature, though a successful Reflex save negates both 
the cold damage and Dexterity damage. A numbing sphere rolls over barriers less than 
4 feet tall, such as furniture and low walls. It instantly freezes water it encounters 
in 5-foot-cube sections, creating chunks of ice in large bodies of water. 
The sphere moves as long as you actively direct it (a move action for you); otherwise, 
it merely remains at rest. The sphere can be destroyed by attacks directed against it. 
It has 10 hit points and damage reduction 5/-. The surface of the sphere has a spongy, 
yielding consistency and so does not cause damage except by extreme cold. It cannot push 
aside unwilling creatures or batter down large obstacles. A numbing sphere winks out if 
it exceeds the spell's range.`,
    },
  },
  {
    name: "Obscuring Snow",
    level: 2,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Conjuration (Creation) [Air, Cold]",
      components: "V, S",
      castingTime: "1 standard action",
      range: "30 ft.",
      target: "Cloud spreads in 30-ft.-radius from you, 30 ft. high",
      duration: "1 hour/level",
      text: `
A swirling snow vapor arises around you, and follows you from that point on. 
The snow obscures all sight, including darkvision, beyond 5 feet. A creature 
5 feet away has concealment (attacks have a 20% miss chance). Creatures farther 
away have total concealment (50% miss chance, and the attacker cannot use sight to 
locate the target). A strong wind (21+ mph) disperses the snow in 4 rounds. 
A very strong wind (31+ mph) disperses the snow in 1 round. A fireball, flame strike, 
or similar spell burns away the snow in the explosive or fiery spell's area. 
A wall of fire burns away the snow in the area into which it deals damage. 
This spell does not function underwater. Creatures with snowsight are immune 
to the effects of this spell.`,
    },
  },
  {
    name: "One with the Land",
    level: 2,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Personal",
      target: "You",
      duration: "1 hour/level",
      text: `
You cast the spell and are bathed in a golden-green light from above. As it fades, 
you feel in touch with your natural surroundings. You forge a strong link with nature 
that gives you greater insight into your environment. You gain a +2 competence bonus 
on Handle Animal, Hide, Move Silently, Search, Survival, and wild empathy checks.`,
    },
  },
  {
    name: "Owl\u2019s Wisdom",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, M/DF",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "1 min./level",
      text: `
The transmuted creature becomes wiser. The spell grants a +4 enhancement bonus to Wisdom, 
adding the usual benefit to Wisdom-related skills. Clerics, druids, paladins, and rangers 
(and other Wisdom-based spellcasters) who receive owl\u2019s wisdom do not gain any additional 
bonus spells for the increased Wisdom, but the save DCs for their spells increase.`,
    },
  },
  {
    name: "Peaceful Serenity of Io",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Abjuration",
      components: "V",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target:
        "One creature plus one additional creature/four levels, no two of which are more than 30 ft. apart",
      duration: "10 minutes",
      text: `
You croon an ancient, wordless melody, and a sense of calm settles about those around you. 
You fill the subject with the peacefulness and balance of Io's great Song, granting it 
a +4 morale bonus on Concentration checks, and saves against compulsions and fear effects 
for 10 minutes. If the subject is under the influence of compulsion or fear effects when 
receiving the spell, those effects are suppressed for the duration of the spell.`,
    },
  },
  {
    name: "Primal Hunter",
    level: 2,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Personal",
      target: "You",
      duration: "24 hours",
      text: `
Your muscles ripple with the memory of ancestral strength, tensing for quick action. 
This spell causes your body to recall the strength of your forebears, hearkening back to 
a time when your ancestors constantly struggled (or survival. You gain a +5 competence bonus 
on Climb, Jump, and Swim checks. If primal hunter is active on you at the same time as 
primal instinct, primal senses, or primal speed, you gain uncanny dodge (as the barbarian class feature). 
If all four of these spells are active on you at the same time,
you gain improved uncanny dodge (as the barbarian class feature; your barbarian level for the purpose of being flanked equals your caster level).`,
    },
  },
  {
    name: "Razorscales",
    level: 2,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, DF/M",
      castingTime: "1 standard action",
      range: "Personal",
      target: "You",
      duration: "1 round/level (D)",
      text: `
Your scales become razor-sharp. While this spell is in effect, you deal lethal 
instead of nonlethal damage when grappling. If you do not have scales, 
this spell automatically fails.`,
    },
  },
  {
    name: "Reduce Animal",
    level: 2,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Touch",
      target: "One willing animal of Small, Medium, Large, or Huge size",
      duration: "1 hour/level (D)",
      text: `
This spell functions like reduce person, except that it affects 
a single willing animal. Reduce the damage dealt by the animal\u2019s 
natural attacks as appropriate for its new size.`,
    },
  },
  {
    name: "Remove Addiction",
    level: 2,
    duration: 1,
    roundTrigger: false,
    description: {
      school: "Conjuration (Healing)",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Touch",
      target: "One creature touched",
      duration: "Instantaneous",
      text: `
Remove addiction cures all addictions that the target suffers from. 
Since the spell\u2019s duration is instantaneous, 
it does not prevent new addiction to the same drug at a later date.`,
    },
  },
  {
    name: "Resist Energy",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Abjuration",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "10 min./level",
      text: `
Resist energy absorbs only damage. 
The subject could still suffer 
unfortunate side effects. (PhB, p272)`,
    },
  },
  {
    name: "Restoration, Lesser",
    level: 2,
    duration: 1,
    roundTrigger: false,
    description: {
      school: "Conjuration (Healing)",
      components: "V, S",
      castingTime: "3 rounds",
      range: "Touch",
      target: "Creature touched",
      duration: "Instantaneous",
      text: `
Lesser restoration dispels any magical effects 
reducing one of the subject\u2019s ability scores 
(such as ray of enfeeblement) or cures 1d4 points of 
temporary ability damage to one of the subject\u2019s ability scores 
(such as from a shadow\u2019s touch or from poison). 
It also eliminates any fatigue suffered by the character, 
and improves an exhausted condition to fatigued. 
It does not restore permanent ability drain.`,
    },
  },
  {
    name: "Saltray",
    level: 2,
    duration: 1,
    roundTrigger: false,
    description: {
      school: "Evocation",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "Ray",
      duration: "Instantaneous",
      text: `
A thin shaft of whirling salt crystals lances out from your crooked 
finger to strike and shred your foe. You must succeed on a ranged 
touch attack with the ray to strike a target. A creature struck by 
a saltray takes 1d6 points of damage per two caster levels (maximum 5d6) 
and must make a Fortitude save or be stunned for 1 round.`,
    },
  },
  {
    name: "Scent",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, M",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "10 min./level",
      text: `
You give the target an enhanced sense of smell, equivalent to the scent 
ability of some monsters. This ability allows the creature to detect approaching enemies, 
sniff out hidden foes, and track by sense of smell. Creatures with the scent ability 
can identify familiar odors just as humans do with familiar sights. 
The creature can detect opponents within 30 feet by sense of smell. 
If the opponent is upwind, the range increases to 60 feet; if downwind, 
it drops to 15 feet. Strong scents, such as smoke or rotting garbage, 
can be detected at twice the ranges noted above. Overpowering scents, 
such as skunk musk or troglydyte stench, can be detected at triple normal range.
When a creature detects a scent, the exact location is not revealed - only its presense somewhere within range. 
The creature can take a partial action to note the direction of the scent. 
If it moves within 5 feet of the source, the creature can pinpoint that source. 
A creature with the scent ability can follow tracks by smell, 
making a Widsom check to find or follow a track. 
The typical DC for a fresh trail is 10 (no matter what kind of surface holds the scent). 
This DC increases or decreases depending on the strength of the quarry's odor, 
the number of creatures, and the age of the trail. For each hour that the trail is cold, 
the DC increases by 2. The ability otherwise follows the rules for the Track feat. 
Creatures tracking by scent ignore the effects of surface conditions and poor visibility.`,
    },
  },
  {
    name: "Scimitar of Sand",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Evocation [Earth]",
      components: "V, S, M, DF",
      castingTime: "1 standard action",
      range: "0 ft.",
      target: "Scimitar of grinding sand",
      duration: "1 min./level (D)",
      text: `
A curved, 3-foot-long blade of sand springs forth from your hand, 
screaming and churning like a caged sandstorm. 
Attacks with a scimitar of sand are melee touch attacks. 
The blade deals 1d6 points of damage, +1 point per two caster levels (maximum +10). 
The blade is not solid, so your Strength modifier does not apply to the damage. 
You can use a scimitar of sand without penalty even if you lack proficiency with a normal scimitar. 
In addition to being dealt damage, 
a creature struck by your weapon must succeed on a Fortitude save or become dehydrated.`,
    },
  },
  {
    name: "Share Husk",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Divination",
      components: "V, S, M",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Animal touched",
      duration: "1 minute/level",
      text: `
(harmless) As the bit of dried food vanishes from your hand, 
you gain a wolf\u2019s-eye view of the world\u2014and a wolf\u2019s-nose view as well. 
You sense through an animal\u2019s senses, seeing through its eyes and hearing through its ears. 
While doing so, you use either your Listen or Spot modifiers or the animal\u2019s, whichever is better. 
This spell gives you no special ability to understand what you sense. 
You can switch your perceptions between the animal\u2019s and your own on your turn as a free action. 
You and the animal must be on the same plane for the spell to function. 
treat that would appeal to the animal (vegetable or meat).`,
    },
  },
  {
    name: "Snakes Swiftness, Mass",
    level: 2,
    duration: 0,
    roundTrigger: false,
    description: {
      school: "SNAKE\u2019S SWIFTNESS, MASS Transmutation",
      components: "V, S, M/DF",
      castingTime: " 1 standard action",
      range: "Medium (100 ft. + 10 ft./level)",
      target: "Allied creatures in a 20-ft.-",
      duration: "Instantaneous",
      text: `
      You toss the scales into the air, and they
      vanish in a sparkling mist as you indicate
      your target. Without hesitating, that
      creature draws and fi res an arrow into
      the fray.
      The subject can immediately make
      one melee or ranged attack. Taking
      this action doesn’t affect the subject’s
      normal place in the initiative order.
      This is a single attack and follows the
      standard rules for attacking.
      This spell does not allow the subject
      to make more than one additional
      attack in a round. If the subject has
      already made an additional attack, due
      to a prior casting of this spell, from the
      haste spell, or from any other source,
      this spell fails.
      Arcane Material Component: A few
      scales from a snake.`,
    },
  },
  {
    name: "Soften Earth and Stone",
    level: 2,
    duration: 1,
    roundTrigger: false,
    description: {
      school: "Transmutation [Earth]",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "10-ft. square/level; see text",
      duration: "Instantaneous",
      text: `
When this spell is cast, all natural, 
undressed earth or stone in the spell\u2019s area is softened. 
Wet earth becomes thick mud, dry earth becomes loose sand or dirt, 
and stone becomes soft clay that is easily molded or chopped. 
You affect a 10-footsquare area to a depth of 1 to 4 feet, 
depending on the toughness or resilience of the ground at that spot. 
Magical, enchanted, dressed, or worked stone cannot be affected. 
Earth or stone creatures are not affected. 
A creature in mud must succeed on a Reflex save 
or be caught for 1d2 rounds and unable to move, attack, 
or cast spells. A creature that succeeds on its save can move 
through the mud at half speed, and it can\u2019t run or charge. 
Loose dirt is not as troublesome as mud, but all creatures in the 
area can move at only half their normal speed and can\u2019t run 
or charge over the surface. Stone softened into clay does not hinder movement, 
but it does allow characters to cut, shape, or excavate areas they may not have been able to affect before. 
While soften earth and stone does not affect dressed or worked stone, 
cavern ceilings or vertical surfaces such as cliff faces can be affected. 
Usually, this causes a moderate collapse or landslide as the loosened 
material peels away from the face of the wall or roof and falls. 
A moderate amount of structural damage can be dealt to a manufactured 
structure by softening the ground beneath it, causing it to settle. 
However, most well-built structures will only be damaged by this spell, not destroyed.`,
    },
  },
  {
    name: "Spider Climb",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, M",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "10 min./level",
      text: `
The subject can climb and travel on vertical surfaces or even traverse ceilings 
as well as a spider does. The affected creature must have its hands free to climb in this manner. 
The subject gains a climb speed of 20 feet; furthermore, 
it need not make Climb checks to traverse a vertical or horizontal surface (even upside down). 
A spider climbing creature retains its Dexterity bonus to Armor Class (if any) while climbing, 
and opponents get no special bonus to their attacks against it. It cannot,
however, use the run action while climbing. Material Component A drop of bitumen and a live spider, both of which must be eaten by the subject.`,
    },
  },
  {
    name: "Splinterbolt",
    level: 2,
    duration: 1,
    roundTrigger: false,
    description: {
      school: "Conjuration (Creation)",
      components: "V, S, M",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "One or more streams of splinters",
      duration: "Instantaneous",
      text: `
splinters You extend your hand toward your foe, 
flicking a single sliver of wood into the air, 
and a splinter larger than a titan\u2019s javelin whistles through the air. 
You must make a ranged attack to hit the target. If you hit, 
the splinterbolt deals 4d6 points of piercing damage. 
A splinterbolt threatens a critical hit on a roll of 18\u201320. 
You can fire one additional splinterbolt for every four levels beyond 3rd (to a maximum of three at 11th level). 
You can fire these splinterbolts at the same or different targets, 
but all splinterbolts must be aimed at targets within 30 feet of each other and fired simultaneously. 
A creature\u2019s damage reduction, if any, applies to the damage from this spell. 
The damage from splinterbolt is treated as magic and piercing for the purpose of overcoming damage reduction.`,
    },
  },

  {
    name: "Summon Swarm",
    level: 2,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "",
      components: "V, S, M",
      castingTime: "1 standard action",
      range: "close (25 ft. + 5 ft./2 levels)",
      target: "",
      duration: "Concentration+2",
      text: `
You summon a swarm of bats, rats, or spiders (your choice), 
which attacks all other creatures within its area. 
(You may summon the swarm so that it shares the area of other creatures.) 
If no living creatures are within its area, 
the swarm attacks or pursues the nearest creature as best it can. 
The caster has no control over its target or direction of travel.`,
    },
  },
  {
    name: "Swim",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation [Water]",
      components: "V, S, M",
      castingTime: "1 round",
      range: "Medium (100 ft. + 10 ft./level)",
      target: "One creature",
      duration: "10 minutes/level (D)",
      text: `
Making the sound of crashing waves with your throat completes the spell. 
With a wave of your hand, your subject seems more streamlined,
with a hint of webbed appendages. This spell gives the recipient 
a swim speed of 30 feet (although not the ability to breathe water 
or hold one\u2019s breath beyond normal limits). 
As long as the creature isn\u2019t carrying more than a light load, 
it can swim without making Swim checks. It also gains a +8 bonus on any Swim checks 
to perform special actions or avoid hazards, though it still takes the normal penalty 
for weight carried (\u20131 per 5 pounds). The recipient can choose to take 10 on Swim checks, 
even if rushed or threatened, and can use the run action while swimming if it swims in a straight line. 
If the creature is carrying more than a light load, it must make Swim checks to move 
(taking the normal penalty for weight carried), but all other benefits of the spell still apply.`,
    },
  },
  {
    name: "Tojanida Sight",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Divination",
      components: "S",
      castingTime: "1 standard action",
      range: "Personal",
      target: "You",
      duration: "10 min./level (D)",
      text: `
You gain all-around vision, allowing you to see in any direction. 
You gain a +4 bonus on Spot and Search checks, and you cannot be 
flanked for the duration of the spell. However, you cannot avert your 
eyes when confronted by a creature with a gaze attack, 
though you can still close your eyes in such a circumstance.`,
    },
  },
  {
    name: "Train Animal",
    level: 2,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Enchantment (Charm) [Mind-Affecting]",
      components: "V, S, DF",
      castingTime: "10 minutes",
      range: "Touch",
      target: "Animal touched",
      duration: "1 hour/level",
      text: `
At last, you near the end of the spell\u2019s complicated procedure. 
As the final act of the ritual, you call out the tricks you wish to teach the animal you are touching. 
Your hand tingles for a moment as the spell takes effect. While this spell is in effect, 
the affected animal gains a number of additional tricks equal to half your caster level (maximum five). 
This spell does not modify an animal\u2019s attitude toward you, 
nor does it guarantee that an animal will cooperate when instructed to perform the newly learned tricks.`,
    },
  },
  {
    name: "Tree Shape",
    level: 2,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Personal",
      target: "You",
      duration: "1 hour/level (D)",
      text: `
By means of this spell, you are able to assume the form of a Large living tree or shrub 
or a Large dead tree trunk with a small number of limbs. The closest inspection cannot reveal 
that the tree in question is actually a magically concealed creature. 
To all normal tests you are, in fact, a tree or shrub, although a detect magic spell reveals 
a faint transmutation on the tree. While in tree form, you can observe all that transpires 
around you just as if you were in your normal form, and your hit points and save bonuses 
remain unaffected. You gain a +10 natural armor bonus to AC but have an effective Dexterity 
score of 0 and a speed of 0 feet. You are immune to critical hits while in tree form. 
All clothing and gear carried or worn changes with you. You can dismiss tree shape 
as a free action (instead of as a standard action).`,
    },
  },
  {
    name: "Trip Vine",
    level: 2,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, DF",
      castingTime: "1 Standard Action",
      range: "Medium(100ft.+10ft./level)",
      target: "One 10ft.Square/level(S)",
      duration: "One Hour/level",
      text: `
Trip vine causes plants within the area to grow together to form a tangle. 
Any creature entering an affected square must succeed on a reflex save or fall prone. 
Any creature charging into an affected square takes a -2 on it's saving throw. 
If this spell is cast into an area of undergrowth(See DMG pg 87) saves against this spell take a -2 penalty.`,
    },
  },
  {
    name: "Urchin's Spines",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, M, DF",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "1 min./level",
      text: `
The transmuted creature's skin (including clothing and armor) is covered by 2-inch spines. 
An opponent who grapples the subject or strikes it with a natural weapon takes 1d3 points of 
piercing damage from the spines, which also inject a mildly irritating poison. 
The opponent must make a DC 13 Fortitude save or take initial and secondary damage of 1d2 Dexterity.`,
    },
  },
  {
    name: "Warp Wood",
    level: 2,
    duration: 1,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "1 Small wooden object/level, all within a 20-ft. radius",
      duration: "Instantaneous",
      text: `
You cause wood to bend and warp, permanently destroying its straightness, 
form, and strength. A warped door springs open (or becomes stuck, requiring a Strength check to open, 
at your option). A boat or ship springs a leak. Warped ranged weapons are useless. 
A warped melee weapon causes a -4 penalty on attack rolls. 
You may warp one Small or smaller object or its equivalent per caster level. 
A Medium object counts as two Small objects, a Large object as four, a Huge object as eight, 
a Gargantuan object as sixteen, and a Colossal object as thirty-two. Alternatively, 
you can unwarp wood (effectively warping it back to normal) with this spell, 
straightening wood that has been warped by this spell or by other means. 
Make whole, on the other hand, does no good in repairing a warped item. 
You can combine multiple consecutive warp wood spells to warp (or unwarp) 
an object that is too large for you to warp with a single spell. 
Until the object is completely warped, it suffers no ill effects.`,
    },
  },
  {
    name: "Wings of Air",
    level: 2,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Winged creature touched",
      duration: "1 minute/level",
      text: `
You place your hand on the creature\u2019s shoulders, 
and a warm yellow radiance infuses it, spreading out to the tips of its wings. 
The creature you touch becomes more agile in the air, able to make quicker turns, 
and more maneuverable when flying. The subject must be capable of flight using wings. 
The creature\u2019s maneuverability improves by one grade\u2014from clumsy to poor, 
poor to average, average to good, or good to perfect. 
A single creature cannot benefit from multiple applications of this spell at one time.`,
    },
  },
  {
    name: "Winters Embrace",
    level: 2,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "Evocation [Cold]",
      components: "V, S",
      castingTime: "1 standard",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "One creature",
      duration: "1 round/level",
      text: `
action You clutch at the air as though grabbing a nearby creature, and then you blow on your fist. 
As you do so, ice and snow appear around your foe. 
A target that fails its save takes 1d8 points of cold damage per round at the beginning of your turn. 
Each round, the subject can make a new Fortitude saving throw to avoid taking damage that round. 
The second time a subject takes damage from a single casting of winter\u2019s embrace, it becomes fatigued. 
The fourth time it takes damage from the same spell, it becomes exhausted.`,
    },
  },
  {
    name: "Wood Shape",
    level: 2,
    duration: 1,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Touch",
      target:
        "One touched piece of wood no larger than 10 cu. ft. + 1 cu. ft./level",
      duration: "Instantaneous",
      text: `
Wood shape enables you to form one existing piece of wood into any shape that suits your purpose.
While it is possible to make crude coffers, doors, and so forth, fine detail isn\u2019t possible. 
There is a 30% chance that any shape that includes moving parts simply doesn\u2019t work.`,
    },
  },

  {
    name: "Zone of Glacial Cold",
    level: 2,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "Conjuration [Cold]",
      components: "V, S, M",
      castingTime: "1 standard action",
      range: "Medium (100 ft. + 10 ft./level)",
      target: "20-ft. radius",
      duration: "1 round/level",
      text: `
You create a zone of icy cold within the spell's area, 
dealing 1d6 points of cold damage per round.`,
    },
  },
  {
    name: "Zone of Natural Purity",
    level: 2,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Evocation",
      components: "V, S, M, DF",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "20-ft.-radius emanation",
      duration: "2 hours/level",
      text: `
This spell sanctifies an area to the forces of nature. 
Every fey and plant creature in the area gains a +1 sacred bonus on attack rolls, 
damage rolls, and saving throws, while aberrations in the area take a \u20131 penalty 
on attack rolls, damage rolls, and saves.`,
    },
  },
];
