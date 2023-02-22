const Pet = require('../Pet');
const character = require('./character');
const freeze = require('../spells/freeze');
const sword = require('../Weapons/sword');

class Warrior extends character {
    constructor(name){
        super(name,'human',7,0,6,5,100,40);
        this.spells.push(freeze);
        this.weapons.push(sword);
    }
}
module.exports = Warrior;