const Gambler = require('./characters/Gambler');
const Shaman = require('./characters/Shaman');
const Warrior = require('./characters/Warrior');
const character = require('./characters/character');
const Pet = require('./Pet');


const GarytheGambler = new Gambler ('Gary the Gambler');
const GarththeGambler= new Gambler ('Garth the Gambler');
const GordtheGambler = new Gambler ('Gord the Gambler');

const SherrytheShaman = new Shaman ('Sherry the Shaman');
const ShiatheShaman = new Shaman ('Shia the Shaman');

const WariotheWarrior = new Warrior ('Wario the Warrior');
const WalttheWarrior = new Warrior ('Walt the Warrior');

const PatthePet = new Pet ('Pat the Pet');
const PetethePet = new Pet ('Pete the Pet');
const PorkthePet = new Pet ('Pork the Pet');
const PatriciathePet = new Pet ('Patricia the Pet');

SherrytheShaman.pets.push(PatthePet);
SherrytheShaman.pets.push(PetethePet);

WalttheWarrior.pets.push(PorkthePet);
WalttheWarrior.pets.push(PatriciathePet);


console.log(SherrytheShaman);
console.log(WalttheWarrior);
WalttheWarrior.levelUp();
WalttheWarrior.summonPet('horsey')
WalttheWarrior.summonPet('Pork the Pet')
WalttheWarrior.getDamage();
console.log(WalttheWarrior);

