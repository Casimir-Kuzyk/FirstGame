const Pet = require('../Pet');
const character = require('./character');
const fireball = require('../spells/fireball');
const staff = require('../Weapons/staff');

class Shaman extends character {
    constructor(name){
        super(name,'wizard',9,9,1,3,100,100);
        this.pets = []
        this.spells.push(fireball);
        this.weapons.push(staff);
    }
}
module.exports = Shaman;