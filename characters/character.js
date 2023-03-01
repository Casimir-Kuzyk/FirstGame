const spell = require('../spells/spells');
const Pets = require('../Pet');
const Weapons = require('../Weapons/weapons');

class character {
    constructor(name,className,attack,magic,health) {
        this.name = name;
        this.className = className;
        this.level = 1;
        this.attack = 1;
        this.magic = 1;
        this.health = health;
        this.weapons = null;
        this.pets = null;
        this.spells = null;



    }
    levelUp(){
        this.level = this.level + 1;
        this.attack = this.attack + 4
        if (this.className === "Gambler"){
            this.health = this.health + 30;
        } else if (this.className === "Shaman"){
            this.magic = this.magic + 2;
            this.health = this.health + 4;
            this.attack = this.attack + 2;
        } else if (this.className === "Warrior"){
            this.health = this.health + 4;
            this.attack = this.attack + 2;
        }
    }
    equipWeapon(){
        if (this.className === "Warrior"){
            this.weapons = new Weapons("sword",8)
            console.log('A mighty Sword has been equipped!')
        } else {
            console.log('You fail to equip a weapon because you are not a Warrior!')
        }
    }
    summonPet(petName){
        this.pets = new Pets(petName);
    }
    spell(){
        if (this.className === "Shaman"){
            this.spells = new spell("magic attack",7)
            console.log('You now cast a spell with each attack!')
        } else {
            console.log('You cannot cast spells if you are not a Shaman!')
        }
    }
    getDamage(){
        let charDamage = 0;
        if (this.attack >= this.magic){
            charDamage = charDamage + this.attack;
        } else {
            charDamage = charDamage + this.magic;
        }
        if (this.pets != null){
            charDamage = charDamage + this.pets.damage;
        }
        if (this.spells != null){
            charDamage = charDamage + this.spells.damage;
        }
        if (this.weapons != null){
            charDamage = charDamage + this.weapons.damage;
        }
        return charDamage;
    }
}

module.exports = character;