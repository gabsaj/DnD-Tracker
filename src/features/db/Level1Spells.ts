import { SpellType } from "../types/SpellType";

export const Level1Spells: SpellType[] = [
  {
    name: "Animate Fire",
    level: 1,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Transmutation [Fire]",
      components: "V, S, M",
      castingTime: "1 round",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "One Small fire",
      duration: "Concentration, up to",
      text: `
1 round/level (D) By casting the mixture in your hand at the fire, 
you complete the spell. Immediately thereafter, 
a part of the flame coalesces into a vaguely humanoid shape more solid looking than the rest. 
You animate a fire, which must be approximately the size of a campfire. 
The animated fire has the statistics of a Small fire elemental (MM 98), 
and attacks as you direct. It cannot move beyond the range of its source fire (25 ft. + 5 ft./2 levels).`,
    },
  },
  {
    name: "Animate Water",
    level: 1,
    duration: 0,
    roundTrigger: false,
    description: {
      school: "Transmutation [Water]",
      components: "",
      castingTime: "",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "Cube of water up to 5 ft. on",
      duration: "",
      text: `
a side You indicate a patch of water with a hand shaking from pent-up divine spell power, 
and the liquid rises into a vaguely humanoid shape. This spell functions like animate fire, 
but you can instead animate a quantity of water of at least 4 cubic feet into a 
Small water elemental (MM 100). spring water mixed with cinnabar oil.`,
    },
  },
  {
    name: "Animate Wood",
    level: 1,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, M",
      castingTime: "1 round",
      range: "Touch",
      target: "One Small or smaller wooden object 1 round/level (D) ",
      duration: "Concentration, up to",
      text: `
By touching a piece of wood you release the energy of the spell into it. 
The wood begins to writhe and twist before your eyes and 
then rises to move in the direction you indicate. 
This spell imbues a Small or smaller wooden object with mobility and a semblance of life, 
then causes it to immediately attack whomever or whatever you initially designate. 
Statistics for the animated wood are as for a Small animated object (MM 13). 
Wooden objects animated by this spell have hardness 5. 
The spell cannot animate objects carried or worn by a creature. 
M:powdered cinnabar and ground peach pit.`,
    },
  },
  {
    name: "Aspect of the Wolf",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, M/DF",
      castingTime: "1 standard action",
      range: "Personal",
      target: "You",
      duration: "10 minutes/level (D)",
      text: `
With a howl you complete the spell. 
Instantly, your body sprouts short, thick fur. 
Your spine and neck bend, causing you to drop to your hands 
and knees\u2014which quickly shorten into canine limbs. 
When you cast this spell, you assume the physical appearance and 
many of the qualities and abilities of a wolf (MM 283).
While under the effect of the spell, your creature type changes to animal, 
and your size changes to Medium. 
You have the space and reach of a wolf (5 ft./5 ft.). 
You gain the Strength, Dexterity, and Constitution of an average wolf (Str 13, Dex 15, Con 15), 
but you retain your own mental ability scores. Your base land speed becomes 50 feet. 
You gain low-light vision and scent. You gain a bite attack, which is a 
primary natural attack that deals 1d6+1 points of damage with each successful hit. 
Your class and level, hit points, alignment, base attack bonus, 
and base saving throw bonuses all remain the same. 
You lose any extraordinary special abilities of your own form, 
as well as spell-like and supernatural abilities. 
You keep all extraordinary special attacks derived from 
class levels (such as a barbarian\u2019s rage or a rogue\u2019s sneak attack), 
but you lose any from your normal form that are not derived from class levels. 
You cannot speak or cast spells while in wolf form. However, 
if you have the Natural Spell feat, you can cast spells normally. 
Your natural armor bonus becomes +2, 
regardless of any natural armor bonus from your normal form. 
While in wolf form, you gain the wolf\u2019s trip extraordinary attack form, 
allowing you to make a free trip attempt against any opponent that you 
hit with your bite attack. Your equipment melds into your new form 
and becomes nonfunctional.`,
    },
  },
  {
    name: "Aura Against Flame",
    level: 1,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "Abjuration",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Personal",
      target: "You",
      duration: "1 round/level",
      text: `
With the casting of this spell you are surrounded with a cool, blue mist that clings 
to your body, dampening the heat of the nearby flames. You create an aura of blue mist 
that protects you against fire, absorbing the first 10 points of fire damage as a resist 
energy (fire) spell (PH 272). In addition to the resist energy (fire) effect, the spell 
can be used to snuff out fires. Any nonmagical flame that the aura contacts is immediately 
extinguished if the flame\u2019s maximum damage is 10 or fewer points per round. 
This means that torches, small fires, and hurled alchemist\u2019s fire are snuffed out 
and cause no damage if used against you or if you touch them. You can use a standard action 
to touch an existing magical fire (such as a flaming sphere or a wall of fire) and attempt 
to dispel it as if using a dispel magic spell against it (use the caster level of aura 
against flame for the caster level check). If you succeed, you take no damage from the 
touch and the magical fire and aura both vanish. If you fail, you take damage from the 
magical fire source normally (reduced by your aura against flame), and both spells remain. 
With a readied action, you can use the aura as a dispel magic effect to counterspell 
a magical fire attack against you. If successful, the spell is counterspelled and 
the aura disappears. If you fail the dispel check, or if the attack is not a fire attack, the aura remains.`,
    },
  },
  {
    name: "Babau Slime",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, M/DF",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "1 minute/level",
      text: `
You press the viscous ball of demon sweat between your fingers and speak the eldritch words. 
Your flesh and equipment begin to weep hot red tears that quickly form a coating over your body. 
This demon-inspired transmutation causes the subject to secrete a slimy red layer of jelly that 
coats its skin, armor, and equipment. A creature that strikes a slime-protected subject with an 
unarmed strike, a touch attack (including a touch spell), or a natural weapon takes 1d8 points of acid damage. 
Any creature in a grapple with the target of babau slime takes 1d8 points of acid damage at the beginning of its turn. (SpC, 22)`,
    },
  },
  {
    name: "Beast Claws",
    level: 1,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, M",
      castingTime: "1 standard action",
      range: "Personal",
      target: "You",
      duration: "1 hour/level",
      text: `
With crackle of popping joints and tendons, your hands and fingers become long curving claws with heavy knuckles. 
You gain two claw attacks that act as slashing melee weapons, 
dealing 1d4 points of damage with a threat range of 19\u201320. 
Attacks with your transformed hands do not provoke attacks of opportunity. 
Your claws work just like the natural weapons of many monsters. 
You can make an attack with one claw or a full attack with two claws at your normal attack bonus, 
replacing your normal attack routine. You take no penalties for two-weapon fighting, and neither 
attack is a secondary attack. If your base attack bonus is +6 or higher, you do not gain any 
additional attacks\u2014you simply have two claw attacks at your normal attack bonus. 
If you attack with a manufactured weapon or another natural attack, you can\u2019t make any 
claw attacks in that round. The claws do not hinder your manual dexterity or spellcasting. 
a bird of prey, such as an eagle or falcon.`,
    },
  },
  {
    name: "Beastland Ferocity",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Enchantment (Compulsion) [Mind-Affecting]",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "1 minute/level",
      text: `
(harmless) You cast the spell and lay your hand upon your ally, 
and beneath your glowing fingers, give him a mixed gift\u2014the 
ability to fight on, but at the cost of not knowing when to stop. 
The subject becomes such a tenacious combatant that it continues to 
fight without penalty even while disabled or dying. While between \u20131 and \u20139 hit points, 
the creature gains a +4 enhancement bonus to Strength. 
If the creature is reduced to \u201310 hit points, it dies normally.`,
    },
  },

  {
    name: "Branch to Branch",
    level: 1,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Personal",
      target: "You",
      duration: "1 hour/level (D)",
      text: `
With the last guttural utterance, your fingers thicken and your arms lengthen slightly. 
You have the impression that you would feel more at ease in a canopy of trees. 
You gain a +10 competence bonus on Climb checks made in trees. 
As long as you remain at least 10 feet above the ground, you can brachiate 
(swing by branches and vines) in medium or dense forest, but not in sparse forest. 
When you brachiate, you gain a 10-foot enhancement bonus to your land speed and 
ignore the hampered movement penalties for undergrowth and other terrain features. 
You can charge while brachiating, but you can\u2019t run. Naturally, 
some local conditions, such as areas of sparse forest, clearings, wide rivers, 
or other breaks in the forest canopy, might force you to return to the ground.`,
    },
  },
  {
    name: "Breath of the Jungle",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Medium (100 ft. + 10 ft./level)",
      target: "Mist spreads in a 40-ft. radius",
      duration: "1 minute/level",
      text: `
20 ft. high With a word of power and flick of your wrist, a foul-smelling, 
fine mist appears. The DC of any saving throw made within the mist against 
poison or disease increases by 2. The mist does not provide concealment.`,
    },
  },
  {
    name: "Buoyant Lifting",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Evocation",
      components: "S, DF",
      castingTime: "1 immediate action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "One willing creature/",
      duration: "1 minute/",
      text: `
With a sharp jab of your finger, the water around your indicated subjects 
begins to push them toward the surface. The subjects of this spell are borne 
toward the surface at 60 feet per round until they are floating on it. 
The subject then rests at the top of the liquid 
(rescuing it from drowning if it was a sinking air-breather) 
and can swim away under its own power or be moved by others (such as with a rope). 
If the subject is removed from the liquid, the spell ends.`,
    },
  },
  {
    name: "Calm Animals",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Enchantment (Compulsion) [Mind-Affecting]",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "Animals within 30 ft. of each other",
      duration: "1 min./level",
      text: `
This spell soothes and quiets animals, rendering them docile and harmless. 
Only ordinary animals (those with Intelligence scores of 1 or 2) can be affected by this spell. 
All the subjects must be of the same kind, and no two may be more than 30 feet apart. 
The maximum number of Hit Dice of animals you can affect is equal to 2d4 + caster level. 
A dire animal or an animal trained to attack or guard is allowed a saving throw; other animals are not. 
The affected creatures remain where they are and do not attack or flee. 
They are not helpless and defend themselves normally if attacked. 
Any threat breaks the spell on the threatened creatures.`,
    },
  },
  {
    name: "Camouflage",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Personal",
      target: "You",
      duration: "10 minutes/level",
      text: `
Upon finishing the spell, your skin and clothing change color, 
warping tint and hue to match your surroundings. Throughout the duration of the spell, 
your coloration changes instantly to match the background of any new environment you enter,
with no effort on your part. This effect grants you a +10 circumstance bonus on Hide checks.`,
    },
  },
  {
    name: "Charm Animal",
    level: 1,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Enchantment (Charm) [Mind-Affecting]",
      components: "V, S",
      castingTime: " 1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "One animal",
      duration: "1 hour/level",
      text: `
This charm makes an animal creature regard you as 
its trusted friend and ally (treat the target’s attitude as friendly). 
If the creature is currently being threatened or attacked by you or your allies, 
however, it receives a +5 bonus on its saving throw. 
The spell does not enable you to control the charmed animal as if it were an automaton, 
but it perceives your words and actions in the most favorable way. 
You can try to give the subject orders, but you must win an opposed Charisma check 
to convince it to do anything it wouldn’t ordinarily do. (Retries are not allowed.) 
An affected creature never obeys suicidal or obviously harmful orders, 
but it might be convinced that something very dangerous is worth doing. 
Any act by you or your apparent allies that threatens the charmed animal breaks the spell. 
You must be able to communicate with an animal to communicate your commands, 
or else be good at pantomiming`,
    },
  },
  {
    name: "Claws of the Bear",
    level: 1,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S",
      castingTime: "1 standard",
      range: "Personal",
      target: "You",
      duration: "1 round/level",
      text: `
Howling a curse at your enemies, pain explodes in your hands as they suddenly sport long claws. 
Almost instantly the pain fades. Too bad your foes won\u2019t be able to say the same. 
When you cast this spell, your hands become natural weapons that deal 1d8 points of damage 
each or your normal unarmed damage, whichever is greater. You are considered armed while this spell is in effect. 
If you are Small, your claws deal 1d6 points of damage, and if you are Large, 
they deal 2d6 points of damage. You add your Strength modifier to your claw damage rolls. 
Your claws work just like the natural weapons of many monsters. 
You can make an attack with one claw or a full attack with two claws at your normal attack bonus, 
replacing your normal attack routine. You take no penalties for two-weapon fighting, 
and neither attack is a secondary attack. If your base attack bonus is +6 or higher, 
you do not gain any additional attacks\u2014you simply have two claw attacks at your normal attack bonus.`,
    },
  },
  {
    name: "Climb Walls",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, M",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "1 minute/level (D)",
      text: `
You brush the target with your finger, 
and she now perceives handholds and toeholds where others see smooth stone. 
The subject gains a +10 enhancement bonus on Climb checks. 
The bonus increases to +20 at caster level 5th, and to +30 (the maximum) at caster level 9th. 
Unlike with spider climb, this spell does not allow the subject to climb on ceilings, 
and it does not give the creature a climb speed. sap or equally sticky material.`,
    },
  },
  {
    name: "Cloudburst",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Evocation [Water]",
      components: "V, S",
      castingTime: "1 round",
      range: "Long (400 ft. +",
      target: "100-ft.-radius",
      duration: "10 minutes/level",
      text: `
Clouds whirl into existence and, with a peal of thunder, 
let loose a drenching downpour. 
You cause clouds to gather and a heavy rain to fall. 
The rain reduces visibility ranges by half, resulting in a \u20134 penalty on Spot and Search checks. 
It automatically extinguishes unprotected flames and has a 50% chance of extinguishing protected flames. 
Ranged weapon attacks and Listen checks take a \u20134 penalty. 
Fire damage in this spell\u2019s area is reduced by 1 point per die of damage. 
This spell does not function indoors, underground, underwater, or in desert climates. 
After the spell ends, the water created evaporates over the next 10 minutes. 
The water created with this spell does not slake thirst or provide any nourishment to plants.`,
    },
  },
  {
    name: "Cold Fire",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation [Cold]",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "One fire source (up to a 20-ft. cube) or one creature;",
      duration: "1 minute/level (D) (fire",
      text: `
As you complete the spell you widen your eyes slightly 
at the fire you wish to affect. 
Its flames instantly turn a blue-white. 
The air between you and the fire feels much colder. 
You are able to change the normal flames of a fire 
(any blaze that lasts for more than 1 round) 
into cold flames. 
Affected flames deal cold damage to creatures that come into contact with them. 
The spell can also affect magical fires such as those generated by a wall of fire, 
provided the affected fire is small enough. 
Cold fire flames burn blue and white for the duration of the spell. 
If the target is a creature with the fire subtype or vulnerability to cold, 
the spell deals 1d6 points of cold damage per two caster levels (maximum 5d6) to the creature, 
but has no further effect.`,
    },
  },
  {
    name: "Crabwalk",
    level: 1,
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
The creature you touch now moves much faster, 
scuttling about with disconcerting ease. 
When the subject of this spell charges, 
it gains a +4 bonus on its attack roll and takes no penalty to Armor Class. 
This benefit replaces the normal +2 bonus on attack rolls and \u20132 penalty 
to AC that a charge attack normally confers. 
If the creature is capable of multiple attacks after a charge, 
such as a lion with the pounce ability, the bonus applies only to the first attack.`,
    },
  },
  {
    name: "Cure Light Wounds",
    level: 1,
    duration: 1,
    roundTrigger: false,
    description: {
      school: "Conjuration (Healing)",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "Instantaneous",
      text: `
When laying your hand upon a living creature, you channel positive energy 
that cures 1d8 points of damage +1 point per caster level (maximum +5). 
Since undead are powered by negative energy, 
this spell deals damage to them instead of curing their wounds. 
An undead creature can apply spell resistance, 
and can attempt a Will save to take half damage.`,
    },
  },
  {
    name: "Deep Breath",
    level: 1,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "Conjuration (Creation) [Air]",
      components: "V",
      castingTime: "1 immediate action",
      range: "Personal",
      target: "You",
      duration: "1 round/level",
      text: "`You let out a quick cry and instantly feel your chest swell with air, as if you had taken a deep breath. Strangely, you feel no need to exhale. Your lungs instantly fill with air, and continue to refill with air for the duration of the spell. When the spell\u2019s duration expires, you can continue The deep breath spell gives Mialee some confidence she\u2019ll survive being dragged beneath the water by the sahuagin to hold your breath as if you had just gulped down a lungful of air. You can cast this spell with an instant utterance, quickly enough to save yourself from drowning after being suddenly plunged into water.`",
    },
  },
  {
    name: "Delay Disease",
    level: 1,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Conjuration (Healing)",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "24 hours",
      text: "`(harmless) You press your focus to the creature and implore the contagion that ravages it to lie dormant. As the spell takes effect, a dim yellow glow passes over the creature\u2019s body. The progress of any nonmagical disease that already afflicts the target is halted for the duration of the spell. Delay disease allows the subject to skip the required saving throw against the disease for the day that the spell is in effect. During this period, the subject accrues no further ability damage from the disease. A skipped saving throw counts as neither a success nor a failure for the purpose of recovery from the disease. Furthermore, the incubation period of any disease to which the subject is exposed during the spell\u2019s duration does not begin until the spell expires. Delay disease does not cure any damage that a disease might already have dealt, and it has no effect on magical or supernatural diseases.`",
    },
  },
  {
    name: "Detect Aberration",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Divination",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "60 ft.",
      target: "Cone-shaped emanation",
      duration: "Concentration, up to 1 min./level (D)",
      text: "`You can detect the presence of aberrations by observing the disruption of the natural order around them. The amount of information revealed depends on how long you study a particular area.  HD Strength   1 or less Faint   2 - 4 Moderate   5 - 10 Strong   11 or more Overwhelming   Unlike similar spells, detect aberration does not reveal lingering auras. Each round, you can turn to detect aberrations in a new area. The spell can penetrate barriers, but 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt blocks it. `",
    },
  },
  {
    name: "Detect Animals or Plants",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Divination",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Long (400 ft. + 40 ft./level)",
      target: "Cone-shaped emanation",
      duration: "Concentration, up to 10 min./level (D)",
      text: "`You can detect a particular kind of animal or plant in a cone emanating out from you in whatever direction you face. You must think of a kind of animal or plant when using the spell, but you can change the animal or plant kind each round. The amount of information revealed depends on how long you search a particular area or focus on a specific kind of animal or plant. 1st Round Presence or absence of that kind of animal or plant in the area. 2nd Round Number of individuals of the specified kind in the area, and the condition of the healthiest specimen. 3rd Round The condition (see below) and location of each individual present. If an animal or plant is outside your line of sight, then you discern its direction but not its exact location. Conditions For purposes of this spell, the categories of condition are as follows: Normal - Has at least 90% of full normal hit points, free of disease. Fair - 30% to 90% of full normal hit points remaining. Poor - Less than 30% of full normal hit points remaining, afflicted with a disease, or suffering from a debilitating injury. Weak - 0 or fewer hit points remaining, afflicted with a disease in the terminal stage, or crippled. If a creature falls into more than one category, the spell indicates the weaker of the two. Each round you can turn to detect a kind of animal or plant in a new area. The spell can penetrate barriers, but 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt blocks it.`",
    },
  },
  {
    name: "Detect Snares and Pits",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Divination",
      components: "V, S",
      castingTime: "1 standard action",
      range: "60 ft.",
      target: "Cone-shaped emanation",
      duration: "Concentration, up to 10 min./level (D)",
      text: "`You can detect simple pits, deadfalls, and snares as well as mechanical traps constructed of natural materials. The spell does not detect complex traps, including trapdoor traps. Detect snares and pits does detect certain natural hazards\u2014quicksand (a snare), a sinkhole (a pit), or unsafe walls of natural rock (a deadfall). However, it does not reveal other potentially dangerous conditions. The spell does not detect magic traps (except those that operate by pit, deadfall, or snaring; see the spell snare), nor mechanically complex ones, nor those that have been rendered safe or inactive. The amount of information revealed depends on how long you study a particular area. Each round, you can turn to detect snares and pits in a new area. The spell can penetrate barriers, but 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt blocks it.`",
    },
  },
  {
    name: "Endure Elements",
    level: 1,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Abjuration",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "24 hours",
      text: "`A creature protected by endure elements suffers no harm from being in a hot or cold environment. It can exist comfortably in conditions between -50 and 140 degrees Fahrenheit without having to make Fortitude saves). The creature\u2019s equipment is likewise protected. Endure elements doesn\u2019t provide any protection from fire or cold damage, nor does it protect against other environmental hazards such as smoke, lack of air, and so forth.`",
    },
  },
  {
    name: "Enrage Animal",
    level: 1,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "ENRAGE ANIMAL Enchantment (Compulsion) [Mind-Affecting]",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Medium (100 ft. + 10 ft./level)",
      target: "One animal",
      duration: "Concentration +1 round/",
      text: "`level You feel inexplicably angry as you near the conclusion of the spell\u2019s casting. The feeling subsides slightly as you release the spell into your target. Enrage animal affects only creatures of the animal type and bestows a +4 morale bonus to Strength and Constitution, a +2 morale bonus on Will saves, and a \u20132 penalty to Armor Class. This effect is otherwise identical to a barbarian\u2019s rage (PH 25), except that the animal is not fatigued at the end of the rage.`",
    },
  },
  {
    name: "Entangle",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Long (400 ft. + 40 ft./level)",
      target: "Plants in a 40-ft.-radius spread",
      duration: "1 min./level (D)",
      text: "`Grasses, weeds, bushes, and even trees wrap, twist, and entwine about creatures in the area or those that enter the area, holding them fast and causing them to become entangled. The creature can break free and move half its normal speed by using a full-round action to make a DC 20 Strength check or a DC 20 Escape Artist check. A creature that succeeds on a Reflex save is not entangled but can still move at only half speed through the area. Each round on your turn, the plants once again attempt to entangle all creatures that have avoided or escaped entanglement.`",
    },
  },
  {
    name: "Extract Drug",
    level: 1,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Conjuration (Creation)",
      components: "V, S, F",
      castingTime: "1 minute",
      range: "Touch",
      target: "One dose of a drug",
      duration: "Permanent",
      text: "`The caster infuses a substance with energy and creates a magical version of a drug. The magical version manifests as greenish fumes that rise from the chosen focus. The fumes must then be inhaled as a standard action within 1 round to get the drug\u2019s effects. The type of drug extracted depends on the substance used.  Material Drug Extracted Effect on Focus   Metal Baccaran Metal's Hardness drops by 1   Stone Vodare Stone's Hardness drops by 1   Water Sannish Water becomes brackish and foul.   Air Mordayn Vapor Foul odor fills the area for 1 hour   Wood Mushroom Powder Wood takes on a permanent foul odor.   There may be other drugs that can be extracted with rarer substances, at the DM\u2019s discretion. `",
    },
  },
  {
    name: "Eyes of the Avoral",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "S",
      castingTime: "1 standard action",
      range: "Touch",
      target: "One creature",
      duration: "10 minutes/level",
      text: "`The subject gains an avoral\u2019s sharp eye-sight, receiving a +8 racial bonus on Spot checks for the duration of the spell.`",
    },
  },
  {
    name: "Faerie Fire",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Evocation [Light]",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Long (400 ft. + 40 ft./level)",
      target: "Creatures and objects within a 5-ft.-radius burst",
      duration: "1 min./level (D)",
      text: "`A pale glow surrounds and outlines the subjects. Outlined subjects shed light as candles. Outlined creatures do not benefit from the concealment normally provided by darkness (though a 2nd-level or higher magical darkness effect functions normally), blur, displacement, invisibility, or similar effects. The light is too dim to have any special effect on undead or dark-dwelling creatures vulnerable to light. The faerie fire can be blue, green, or violet, according to your choice at the time of casting. The faerie fire does not cause any harm to the objects or creatures thus outlined.`",
    },
  },
  {
    name: "Foundation of Stone",
    level: 1,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "FOUNDATION OF STONE Transmutation [Earth]",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "One creature/level, no two of",
      duration: "1 round/level",
      text: "`which are more than 30 ft. apart Calling upon the strength of the earth, you lend some of the stability of stone to your allies. As long as they do not move and remain standing on solid ground, the subject creatures gain a +2 bonus to Armor Class and a +4 bonus on Strength checks made to resist being bull rushed or tripped. If this spell is cast in mountainous terrain, the bonus on Strength checks granted by this spell increases to +6.`",
    },
  },
  {
    name: "Goodberry",
    level: 1,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Touch",
      target: "2d4 fresh berries touched",
      duration: "One day/level",
      text: "`Casting goodberry upon a handful of freshly picked berries makes 2d4 of them magical. You (as well as any other druid of 3rd or higher level) can immediately discern which berries are affected. Each transmuted berry provides nourishment as if it were a normal meal for a Medium creature. The berry also cures 1 point of damage when eaten, subject to a maximum of 8 points of such curing in any 24-hour period.`",
    },
  },
  {
    name: "Hawkeye",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "HAWKEYE Transmutation",
      components: "V",
      castingTime: "1 standard action",
      range: "Personal",
      target: "You",
      duration: "10 minutes/level (D)",
      text: "`By crying out like a hawk, you improve your eyesight. Distant objects and creatures seem closer and more distinct. Your range increment for ranged weapons increases by 50%, and you gain a +5 competence bonus on Spot checks.`",
    },
  },
  {
    name: "Healthful Rest",
    level: 1,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "HEALTHFUL REST Conjuration (Healing)",
      components: "V, S",
      castingTime: "10min",
      range: "Close (25 ft. +",
      target: "One creature/level",
      duration: "24 hours",
      text: "`druid 1 minutes 5 ft./2 levels) no two of which are more than 30 ft. apart (harmless) A diffuse glow of golden light spreads from you, wrapping those you have chosen in a soft nimbus. The subjects of your spell look relaxed and rested, the stresses of the day forgotten.Healthful rest doubles the subjects\u2019 natural healing rate. Each affected creature regains twice the hit points and ability damage it otherwise would have regained during that day, depending on its activity level (PH 76).`",
    },
  },
  {
    name: "Hide from Animals",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Abjuration",
      components: "S, DF",
      castingTime: "10 minutes",
      range: "Touch",
      target: "One creature touched/level",
      duration: "10 min./level (D)",
      text: "`Animals cannot see, hear, or smell the warded creatures. Even extraordinary or supernatural sensory capabilities, such as blindsense, blindsight, scent, and tremorsense, cannot detect or locate warded creatures. Animals simply act as though the warded creatures are not there. If a warded character touches an animal or attacks any creature, even with a spell, the spell ends for all recipients.`",
    },
  },
  {
    name: "Horrible Taste",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, M",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature or object touched",
      duration: "10 minutes/level",
      text: "`After a few mystic words, you touch a piece of rotten meat to the subject and it sinks inside the creature\u2019s body. Any creature that bites the spell\u2019s subject must succeed on a Fortitude saving throw or be nauseated until the end of its next turn. If a creature of animal Intelligence (2 or lower) fails its saving throw, it will not willingly bite the subject a second time; someone trying to direct the creature to bite the subject again must make a Handle Animal check as if he was trying to \u201cpush\u201d the creature. This check must be made every time he tries to make the creature bite. Creatures that are immune to poison or that lack the ability to taste are unaffected by this spell. (SpC, p116)`",
    },
  },
  {
    name: "Jump",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, M",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "1 min./level (D)",
      text: "`The subject gets a +10 enhancement bonus on Jump checks. The enhancement bonus increases to +20 at caster level 5th, and to +30 (the maximum) at caster level 9th.`",
    },
  },
  {
    name: "Kuo-Toa Skin",
    level: 1,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, M, DF",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "1 hour/level",
      text: "`The subject's skin, as well as clothing, armor, and other personal effects (including worn magic items), take on an oily sheen like the slippery skin of kuo-toas. For the duration of the spell, the subject gains a +8 bonus on Escape Artist checks and cannot be snared by webs (magical or otherwise).`",
    },
  },
  {
    name: "Longstrider",
    level: 1,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, M",
      castingTime: " 1 standard action",
      range: "Personal",
      target: "You",
      duration: "1 hour/level (D)",
      text: "`This spell increases your base land speed by 10 feet. (This adjustment counts as an enhancement bonus.) It has no effect on other modes of movement, such as burrow, climb, fly, or swim.`",
    },
  },
  {
    name: "Low-Light Vision",
    level: 1,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, M",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "1 hour/level",
      text: "`You pass your hand over the subject\u2019s eyes and murmur the arcane words. Its eyes grow larger, and when it opens them, the pupils are speckled with tiny silvers of starlight. The subject creature gains low-light vision. (SpC, p134)`",
    },
  },
  {
    name: "Magic Fang",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Living creature touched",
      duration: "1 min./level",
      text: "`Magic fang gives one natural weapon of the subject a +1 enhancement bonus on attack and damage rolls. The spell can affect a slam attack, fist, bite, or other natural weapon. (The spell does not change an unarmed strike\u2019s damage from nonlethal damage to lethal damage.) Magic fang can be made permanent with a permanency spell.`",
    },
  },
  {
    name: "Magic Stone",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Up to three pebbles touched",
      duration: "30 minutes or until discharged",
      text: "`object) You transmute as many as three pebbles, which can be no larger than sling bullets, so that they strike with great force when thrown or slung. If hurled, they have a range increment of 20 feet. If slung, treat them as sling bullets (range increment 50 feet). The spell gives them a +1 enhancement bonus on attack and damage rolls. The user of the stones makes a normal ranged attack. Each stone that hits deals 1d6+1 points of damage (including the spell\u2019s enhancement bonus), or 2d6+2 points against undead.`",
    },
  },
  {
    name: "Obscuring Mist",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Conjuration (Creation)",
      components: "V, S",
      castingTime: "1 standard action",
      range: "20 ft.",
      target: "Cloud spreads in 20-ft. radius from you, 20 ft. high",
      duration: "1 min./level",
      text: "`A misty vapor arises around you. It is stationary once created. The vapor obscures all sight, including darkvision, beyond 5 feet. A creature 5 feet away has concealment (attacks have a 20% miss chance). Creatures farther away have total concealment (50% miss chance, and the attacker cannot use sight to locate the target). A moderate wind (11+ mph), such as from a gust of wind spell, disperses the fog in 4 rounds. A strong wind (21+ mph) disperses the fog in 1 round. A fireball, flame strike, or similar spell burns away the fog in the explosive or fiery spell\u2019s area. A wall of fire burns away the fog in the area into which it deals damage. This spell does not function underwater.`",
    },
  },
  {
    name: "Omen of Peril",
    level: 1,
    duration: 1,
    roundTrigger: false,
    description: {
      school: "OMEN OF PERIL Divination",
      components: "V, F",
      castingTime: "1 round",
      range: "Personal",
      target: "You",
      duration: "Instantaneous",
      text: "`ranger 1 A brief supplication gives you a vision that hints at how dangerous the immediate future is likely to be. Based on an assessment of your immediate surroundings and chosen path of travel, you receive one of three visions that reflect the next hour\u2019s journey: safety, peril, or great danger. The base chance for receiving an accurate reply is 70% +1% per caster level, to a maximum of 90%; the DM makes the roll secretly. If the omen of peril is successful, you get one of three visions, which lasts just a second or two. danger. If you continue on your present course (or remain where you are if you have been stationary for some time before casting the spell), you will face no significant monsters, traps, or other challenges for the next hour or so. overwhelming monsters, dangerous traps, and other hazards for the next hour or so. risk. You will likely face powerful NPCs or deadly traps in the next hour. If the roll fails, you get one of the two incorrect results, determined randomly by the DM, and you don\u2019t necessarily know that you failed because the DM rolls secretly. Choosing which vision is \u201ccorrect\u201d takes some educated guesswork on the part of the DM, who should assess the characters\u2019 likely courses of action and what dangers they\u2019re likely to face. The exact form that an omen of peril takes depends on whether you worship a specific deity, venerate nature as a druid, or simply uphold abstract principles. A druid might see a white dove for safety, a dark cloud obscuring the sun for peril, and a forest fire for great danger. A cleric of Fharlanghn might get a vision of a straight road for safety, a crossroads for peril, and a washed-out bridge for great danger. Unlike the more powerful augury spell (PH 202), an omen of peril doesn\u2019t respond to a specific question. It indicates only the level of danger likely for the next hour, not what form the danger will take. or similar tokens worth at least 25 gp.`",
    },
  },
  {
    name: "Pass without Trace",
    level: 1,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Touch",
      target: "One creature/level touched",
      duration: "1 hour/level (D)",
      text: "`The subject or subjects can move through any type of terrain and leave neither footprints nor scent. Tracking the subjects is impossible by nonmagical means.`",
    },
  },
  {
    name: "Path of Frost",
    level: 1,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "Transmutation [Cold]",
      components: "V, S",
      castingTime: "1 standard action; see text",
      range: "30 ft.",
      target:
        "One 5-foot square per level (maximum 5), beginning adjacent to your space (S)",
      duration: "1 round/level",
      text: "`A pathway of solid ice races along the ground from your feet, creating a frozen strip that gives off wisps of moisture. This spell creates a pathway or area of slippery ice on the ground. Entering an affected square costs 2 squares of movement; a creature can avoid this hindrance by succeeding on a DC 10 Balance check. If the creature fails the save by 5 or more, it not only spends 2 squares of movement to enter the affected square, but it also falls prone in that square. In addition, any creature that starts its turn in an affected square or that enters an affected square takes 1 point of cold damage. If a creature enters more than one affected square on its turn, it takes damage for each square. This spell can be cast only on solid ground and has no effect when cast on the surface of water or other liquids. If you cast path of frost again before the duration of the first spell ends, any squares within the area of both castings deal 2 points of cold damage. More than two overlapping areas don't stack.`",
    },
  },
  {
    name: "Produce Flame",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Produce Flame Evocation [Fire]",
      components: "V, S",
      castingTime: "1 standard action",
      range: "0 ft.",
      target: "Flame in your palm",
      duration: "1 min./level (D)",
      text: "`Flames as bright as a torch appear in your open hand. The flames harm neither you nor your equipment. In addition to providing illumination, the flames can be hurled or used to touch enemies. You can strike an opponent with a melee touch attack, dealing fire damage equal to 1d6 +1 point per caster level (maximum +5). Alternatively, you can hurl the flames up to 120 feet as a thrown weapon. When doing so, you attack with a ranged touch attack (with no range penalty) and deal the same damage as with the melee attack. No sooner do you hurl the flames than a new set appears in your hand. Each attack you make reduces the remaining duration by 1 minute. If an attack reduces the remaining duration to 0 minutes or less, the spell ends after the attack resolves. This spell does not function underwater.`",
    },
  },
  {
    name: "Quickswim",
    level: 1,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, M, DF",
      castingTime: "1 standard action",
      range: "Personal",
      target: "You",
      duration: "1 hour/level (D)",
      text: "`This spell increases your base swim speed by 10 feet; this adjustment counts as an enhancement bonus. It has no effect on other modes of movement, such as land speed, burrow, climb, or fly. If you do not have a swim speed, you gain no benefit from this spell.`",
    },
  },
  {
    name: "Raging Flame",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation [Fire]",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Medium (100 ft. + 10 ft./level)",
      target: "30-ft.-radius spread",
      duration: "1 minute",
      text: "`Hot, burning passion fills your soul as you complete the spell. You release the passionate energy into the chosen area, causing fires there to flare with their own elemental desire to burn. This spell inflames existing fire, giving it a passion to burn. All normal fires within the affected area flare up, burning twice as hot and twice as bright. The illumination radii of all nonmagical fires double (so a torch casts bright illumination in a 40-foot radius), and all nonmagical fires deal double damage (so a creature that catches on fire takes 2d6 points of fire damage per round). Fire that leaves the area remains affected by the spell. Fire affected by this spell burns out twice as quickly, so a torch that is the subject of a raging flame spell burns out in 30 minutes instead of the normal hour. Magical fire in the area, such as from a produce flame or fireball spell, burns hotter, dealing +1 point of fire damage per die. Raging flame counters or dispels the effect of slow burn. (SpC, 164)`",
    },
  },
  {
    name: "Ram's Might",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "RAM'S MIGHT Transmutation",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Personal",
      target: "You",
      duration: "1 minute/level",
      text: "`You complete the casting, and your hands tingle. Ridged, hornlike ripples appear over your knuckles, nails, and the backs of your hands. You gain a +2 enhancement bonus to Strength, and your unarmed attacks deal lethal instead of nonlethal damage. You are considered armed. The spell has no other effect; you can cast spells and manipulate objects normally.`",
    },
  },
  {
    name: "Rapid Burrowing",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "RAPID BURROWING Transmutation",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "10 minutes/level",
      text: "`(harmless) Splaying your fingers like a mole\u2019s forepaws completes the spell. With your touch, the target\u2019s digging appendages increase in size and sharpness. This spell increases the touched creature\u2019s burrow speed by 20 feet. It has no effect on other modes of movement, nor does it grant the subject a burrow speed or the ability to burrow through stone if the creature cannot already do so.`",
    },
  },
  {
    name: "Raptor's Sight",
    level: 1,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Personal",
      target: "You",
      duration: "1 hour/level (D)",
      text: "`Your visual acuity improves dramatically. You gain a +5 competence bonus on Spot checks. If you have 5 or more ranks in Spot, you take only half the normal range increment penalty for ranged attacks (-1 per range increment instead of -2).`",
    },
  },
  {
    name: "Remove Scent",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, M",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "10 minutes/level",
      text: "`With a touch of a wax-covered \ufb01nger to the subject, you inhale deeply and smell nothing. This spells hides the scent of the creature or object touched for the duration of the spell. The scent ability cannot detect a creature under the effect of a remove scent spell. It also negates the harmful effects of the noxious stench exuded by certain creatures, such as ghasts, for the duration of the spell. (Spell Compendium, Page 173)`",
    },
  },
  {
    name: "Resist Planar Alignment",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Abjuration",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "10 minutes/level",
      text: "`You can tell that your target feels the oppression of the plane around you, the rank evil of the place. A few spoken phrases, backed by magical power, and that oppression seems to lift. This abjuration grants a creature limited protection from a plane\u2019s alignment traits (DMG 149). When the subject visits a plane with an alignment trait, this spell grants it immunity to penalties on its Charisma-based checks that mildly aligned planes impose on visitors of opposed alignments. The Charisma-, Wisdom-, and Intelligence based check penalties associated with strongly aligned planes are halved while the spell\u2019s duration lasts.`",
    },
  },
  {
    name: "Rot of Ages",
    level: 1,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "Conjuration/Necromancy (Creation)",
      components: "V, S",
      castingTime: "1 standard action; see text",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "One creature",
      duration: "2 rounds",
      text: "`A cloud of rotting plant and animal matter swirls up from the ground around your target, encompassing it in a whirlwind of decay. This spell encompasses your target in a cloud of rotting debris. The target is sickened for 2 rounds. Furthermore, all other creatures are treated as having concealment against the target. A successful Fortitude save negates the sickness, but not the concealment. Nonliving creatures are unaffected by the sickness effect. A living creature already under the effect of rot of ages that fails a save against a second casting of the spell is nauseated (rather than sickened) for as long as both effects last (and then sickened for the remainder of the second spell's duration).`",
    },
  },
  {
    name: "Sandblast",
    level: 1,
    duration: 1,
    roundTrigger: false,
    description: {
      school: "SANDBLAST Evocation",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "10 ft.",
      target: "10-ft.-radius burst centered",
      duration: "Instantaneous",
      text: "`on you Whipping your hand in a wide arc, you spray sand from your fingers in a powerful blast. Creatures in the area take 1d6 points of nonlethal damage. Any creature that fails its Reflex save is also stunned for 1 round. You are not harmed by the spell.`",
    },
  },
  {
    name: "Shillelagh",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Shillelagh Transmutation",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Touch",
      target: "One touched nonmagical oak club or quarterstaff",
      duration: "1 min./level",
      text: "`Your own nonmagical club or quarterstaff becomes a weapon with a +1 enhancement bonus on attack and damage rolls. (A quarterstaff gains this enhancement for both ends of the weapon.) It deals damage as if it were two size categories larger. These effects only occur when the weapon is wielded by you. If you do not wield it, the weapon behaves as if unaffected by this spell.`",
    },
  },
  {
    name: "Silvered Claws",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Touch",
      target: "One living creature touched",
      duration: "1 minute/level",
      text: "`This spell allows the target to treat all of its natural attacks as silvered weapons. The spell affects slam attacks, fist or claw attacks, bite attacks, and any other natural weapons the target creature possesses. The spell does not change an unarmed strike\u2019s damage from nonlethal damage to lethal damage, however. Silvered claws can be made permanent with a permanency spell.`",
    },
  },
  {
    name: "Slow Burn",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation [Fire]",
      components: "V, S, M/DF",
      castingTime: "1 standard action",
      range: "Medium (100 ft. + 10 ft./level)",
      target: "30-ft.-radius spread",
      duration: "1 minute",
      text: "`The desire to live into old age grips you as you near completion of this spell. The feeling passes as you designate the area of the spell, where the flames there flicker for a moment as if a gust of wind had hit them. This spell lends fuel to existing fires within the spell\u2019s area, allowing them to burn off the intangible power of passion as much as from physical substance. Because these fires consume less of the physical fuel that sustain them, they burn for twice as long without losing any of their intensity, but their illumination radius is halved. In addition, an affected fire is much harder to extinguish. It takes twice as long to put out a fire that is under the effect of this spell, and if a roll is required (such as the Reflex save required to extinguish flames if a creature is on fire), two successful rolls over 2 rounds are required to successfully put out the fire. If one such roll fails, the creature must begin trying to extinguish the flames again as if it had never succeeded on the first roll. Magical fire used against a target in this spell\u2019s area, such as from a produce flame or fireball spell, does not burn as effectively, and fire damage from such sources is reduced by 1 point per die. Slow burn counters or dispels the effect of raging flame. (SpC, p192-193)`",
    },
  },
  {
    name: "Snake's Swiftness",
    level: 1,
    duration: 1,
    roundTrigger: false,
    description: {
      school: "SNAKE\u2019S SWIFTNESS Transmutation",
      components: "V, S, M/DF",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "One allied creature",
      duration: "Instantaneous",
      text: "`(harmless) You toss the scales into the air, and they vanish in a sparkling mist as you indicate your target. Without hesitating, that creature draws and fi res an arrow into the fray. The subject can immediately make one melee or ranged attack. Taking this action doesn\u2019t affect the subject\u2019s normal place in the initiative order. This is a single attack and follows the standard rules for attacking. This spell does not allow the subject to make more than one additional attack in a round. If the subject has already made an additional attack, due to a prior casting of this spell, from the haste spell, or from any other source, this spell fails. scales from a snake.`",
    },
  },
  {
    name: "Snowshoes",
    level: 1,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "SNOWSHOES Transmutation",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "1 hour/level (D)",
      text: "`(harmless) A chill grips you as you complete the spell and touch your intended subject. The feet of the spell\u2019s subject glow with an ice-blue radiance that fades but lingers. The creature rises slightly out of the snow, as if it weighed much less. The affected creature can walk lightly over ice and snow without having its speed reduced. The affected creature gains a 10-foot enhancement bonus to speed and is not required to make a Balance check or Reflex save to walk on ice and snow without slipping and falling, to avoid cracking ice it walks over, or to avoid falling through cracked ice. In addition, the affected creature does not leave a more readily discernible trail through ice and snow than it does on solid ground, denying trackers potential bonuses to follow the affected creature\u2019s path. (See Weather, DMG 93\u201395, and Cold Dangers, DMG 302, for more details on the effects of weather and ice.)`",
    },
  },
  {
    name: "Snowsight",
    level: 1,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "1 hour/level",
      text: "`The subject gains the ability to see to the normal limits of its vision even in whiteout conditions, and ignores all penalties due to snow glare and snow blindness. Snowsight is no better than normal vision. During daylight, this usually means the subject can see to the horizon; at night, vision is restricted to ambient light or darkvision as appropriate for the subject creature. Snowsight does not grant creatures the ability to see in darkness.`",
    },
  },
  {
    name: "Surefooted Stride",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "SUREFOOTED STRIDE Transmutation",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Personal",
      target: "You",
      duration: "1 minute/level",
      text: "`sorcerer/wizard 2 You become as surefooted as any mountain goat, and the power of your magic makes walking in treacherous terrain child\u2019s play. You can move through difficult terrain (PH 163) at full speed for the duration of this spell, and you can even run, charge, and tumble through such terrain as though it were clear terrain. You also gain a +2 competence bonus on Climb checks.`",
    },
  },
  {
    name: "Speak with Animals",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Divination",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Personal",
      target: "You",
      duration: "1 min./level",
      text: "`You can comprehend and communicate with animals. You are able to ask questions of and receive answers from animals, although the spell doesn\u2019t make them any more friendly or cooperative than normal. Furthermore, wary and cunning animals are likely to be terse and evasive, while the more stupid ones make inane comments. If an animal is friendly toward you, it may do some favor or service for you.`",
    },
  },
  {
    name: "Spider Hand",
    level: 1,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S",
      castingTime: "1 action",
      range: "Personal",
      target: "Caster\u2019s hand",
      duration: "Concentration (up to 1",
      text: "`minute/level) The caster detaches his hand, which transforms into a Small monstrous spider (see the Monster Manual) that he controls. The caster can see through its eyes, and it can travel up to 20 feet per level away from him. If the spider is killed or prevented from returning to the caster, his hand is restored when the spell ends, but he takes 1d6 points of damage. If the caster directs the spider to return to his arm (a move-equivalent action), then lets the spell end, he takes no damage.`",
    },
  },
  {
    name: "Summon Nature's Ally I",
    level: 1,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "Conjuration (Summoning)",
      components: "V, S, DF",
      castingTime: "1 round",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "",
      duration: "1 round/level (D)",
      text: "`This spell summons a natural creature. It appears where you designate and acts immediately, on your turn. It attacks your opponents to the best of its ability. If you can communicate with the creature, you can direct it not to attack, to attack particular enemies, or to perform other actions. A summoned monster cannot summon or otherwise conjure another creature, nor can it use any teleportation or planar travel abilities. Creatures cannot be summoned into an environment that cannot support them. The spell conjures one of the creatures from the 1st-level list on the accompanying Summon Nature\u2019s Ally table. You choose which kind of creature to summon, and you can change that choice each time you cast the spell. All the creatures on the table are neutral unless otherwise noted. Summoned Creatures Dire rat Eagle (animal) Monkey (animal) Octopus* (animal) Owl (animal) Porpoise* (animal) Snake, Small viper (animal) Wolf (animal) May be summoned only into an aquatic or watery environment.  `",
    },
  },
  {
    name: "Sunstroke",
    level: 1,
    duration: 1,
    roundTrigger: false,
    description: {
      school: "Necromancy",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "One living creature",
      duration: "Instantaneous",
      text: "`You cause a living creature to experience the effects of heatstroke. The target takes 2d6 points of nonlethal damage. If the target fails a Fortitude save, it immediately becomes fatigued, or exhausted if already fatigued. Since this spell causes heatstroke, the damage and fatigue dealt can only be healed after that condition is treated properly.`",
    },
  },
  {
    name: "Suspend Disease",
    level: 1,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "Abjuration",
      components: "V, S, M",
      castingTime: "1 action",
      range: "Touch",
      target: "One creature",
      duration: "24 hours",
      text: "`This spell keeps a disease already infecting the subject from harming him for that day. The disease is in no way cured, and the subject cannot make a save to throw off the disease. Casters who intend to cast spells with a disease component find this spell particularly useful.`",
    },
  },
  {
    name: "Thunderhead",
    level: 1,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "Evocation [Electricity]",
      components: "V, S, M",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "One creature",
      duration: "1 round/level",
      text: "`Black mist forms near the ground and sweeps upward to join a small cloud forming above the creature you designate as your target. Miniature peals of thunder erupt from the cloud. Thunderhead creates a small thundercloud over the subject\u2019s head. The cloud moves with the subject, following it unerringly even if he becomes invisible or leaves the region. In every round of the spell\u2019s duration, a miniature bolt of lightning leaps from the thundercloud to strike the subject. Each bolt deals 1 point of electricity damage that is negated by a successful Reflex save.`",
    },
  },
  {
    name: "Traveler's Mount",
    level: 1,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "TRAVELER\u2019S MOUNT Transmutation",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Animal or magical beast",
      duration: "1 hour/level",
      text: "`1, ranger 1 touched With words of encouragement, you make the creature better able to handle the rigors of overland travel, at the expense of its ability to fight. The touched animal or magical beast gets a 20-foot enhancement bonus to its speed, and it can hustle without taking damage or becoming fatigued as long as the spell is in effect. While bearing a rider, the mount no longer attacks in combat. The steed willingly bears its rider into battle; it just can\u2019t use its own natural weapons for the duration of the spell.`",
    },
  },
  {
    name: "Updraft",
    level: 1,
    duration: 1,
    roundTrigger: false,
    description: {
      school: "UPDRAFT Conjuration (Creation) [Air]",
      components: "V, S, M",
      castingTime: "1 swift action",
      range: "Personal",
      target: "You",
      duration: "Instantaneous",
      text: "`Detritus and loose debris on the ground beneath you begins to spin about, caught in a small vortex. The vortex quickly coalesces into a column of dirty gray-brown air thick enough to hold you aloft. Updraft conjures forth rushing air that propels you upward. You gain 10 feet per level of altitude, and then gently float back down to the ground. At any point during your descent, you can move up to 5 feet laterally. propeller or windmill.`",
    },
  },
  {
    name: "Vigor, Lesser",
    level: 1,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "VIGOR, LESSER Conjuration (Healing)",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Living creature touched",
      duration: "10 rounds + 1 round/level",
      text: "`(max 15 rounds) (harmless) The sounds of battle ring in your ears as you lay hands on your fallen comrade. You can spare neither time nor magic to do more right now, but the blood flow slows to a trickle and her breathing becomes less labored, even as you are called to the aid of another. The subject gains fast healing 1, enabling it to heal 1 hit point per round until the spell ends and automatically becoming stabilized if it begins dying from hit point loss during that time. Lesser vigor does not restore hit points lost from starvation, thirst, or suffocation, nor does it allow a creature to regrow or attach lost body parts. The effects of multiple vigor spells do not stack; only the highest-level effect applies.`",
    },
  },
  {
    name: "Vine Strike",
    level: 1,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "VINE STRIKE Divination",
      components: "V, DF",
      castingTime: "1 swift action",
      range: "Personal",
      target: "You",
      duration: "1 round",
      text: "`As you intone the sounds of the spell, your sight temporarily dims under a green gloom. An eyeblink later, the dimness disappears, and you feel a new connection with the natural order, as if it were directing where to land your blow. While this spell is in effect, you have a special connection to the forces of nature that allows you to deliver sneak attacks on plant creatures as if they were not immune to sneak attacks. To attack a plant creature in this manner, you must still meet the other requirements for making a sneak attack. This spell applies only to sneak attack damage. It gives you no ability to affect plant creatures with critical hits, nor does it confer any special ability to overcome the damage reduction or other defenses of plant creatures.`",
    },
  },
  {
    name: "Wall of Smoke",
    level: 1,
    duration: 23,
    roundTrigger: false,
    description: {
      school: "Conjuration (Creation)",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "A straight wall whose area is up to one 10-ft. square/level (S)",
      duration: "1 round/level",
      text: "`This spell creates a thin wall of black smoke. The wall is stationary once created. The wall blocks sight to a limited degree. Creatures on opposite sides of the wall that cannot see over it gain concealment from each other. A creature can pass through a wall of smoke, but must make a Fortitude save to avoid being nauseated for 1 round. A moderate wind (11+mpg), such as from a gust of wind spell, destroys the wall in 1 round. This spell does not function underwater.`",
    },
  },
  {
    name: "Webfoot",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "10 min./level",
      text: "`The transmuted creature becomes better acclimated to wetlands and watery environments. It gains a +4 bonus on Swim checks and is not hindered when moving through shallow bog terrain. It treats an area of deep bog as shallow bog for purposes of movement and Tumble checks.`",
    },
  },
  {
    name: "Wings of the Sea",
    level: 1,
    duration: 230,
    roundTrigger: false,
    description: {
      school: "Transmutation",
      components: "S, M",
      castingTime: "1 standard action",
      range: "Touch",
      target: "Creature touched",
      duration: "1 minute/level",
      text: "`The webbing between your fingers grows to reach your fingertips as you complete the spell. In the instant you touch the spell\u2019s intended subject, however, the webbing between your fingers returns to normal even as the subject\u2019s means of watery movement grow. This spell increases the touched crea- ture\u2019s swim speed by 30 feet. It has no effect on other modes of movement, nor does it give the subject a swim speed if it does not already have one. (SpC, p240-241)`",
    },
  },
  {
    name: "Winter Chill",
    level: 1,
    duration: 1,
    roundTrigger: false,
    description: {
      school: "WINTER CHILL Transmutation [Cold]",
      components: "V, S",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "One creature",
      duration: "Instantaneous",
      text: "`You makes a sound like whistling wind and inscribe a snowflake shape in the air, willing a chill to overcome your foe. The target creature must succeed on a Fortitude save or take 1d6 points of cold damage and become fatigued. A creature with immunity to cold is not affected by this spell.`",
    },
  },
  {
    name: "Wood Wose",
    level: 1,
    duration: 500,
    roundTrigger: false,
    description: {
      school: "WOOD WOSE Conjuration (Creation)",
      components: "V, S, DF",
      castingTime: "1 standard action",
      range: "Close (25 ft. + 5 ft./2 levels)",
      target: "One nature servant",
      duration: "1 hour/level",
      text: "`Whistling up nature\u2019s power and waving a branch of holly, you create a helper for the task at hand. A wood wose is a translucent green nature spirit that you can command to perform simple natural tasks. It can build a campfire, gather herbs, feed an animal companion, catch a fish, or perform any other simple task that doesn\u2019t involve knowledge of technology. It cannot, for example, open a latched chest, since it doesn\u2019t know how a latch works. A wood wose can perform only one activity at a time, but it repeats the same activity if told to do so. Thus, if you commanded it to gather leaves, it would continue to do so while you turned your attention elsewhere, as long as you remained within range. A wood wose has an effective Strength of 2, so it can lift 20 pounds or drag 100 pounds. It can trigger traps, but the 20 pounds of force it can exert is not enough to activate most pressure plates. It has a land speed of 15 feet and a fly speed of 15 feet (perfect). A wood wose cannot attack in any way; it is never allowed an attack roll or a saving throw. It cannot be killed, but it dissipates if it takes 6 points of damage from area attacks. If you attempt to send the wose beyond the spell\u2019s range(measured from your current position), it ceases to exist.`",
    },
  },
];
