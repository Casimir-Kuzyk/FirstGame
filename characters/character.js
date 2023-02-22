const spell = require('../spells/spells');
const Pets = require('../Pet');

class character {
    constructor(name,type,attack,magic,defense,speed,health,mana) {
        this.name = name;
        this.level = 1;
        this.type = type;
        this.attack = 1;
        this.magic = 1;
        this.defense = defense;
        this.speed = speed;
        this.health = health;
        this.mana = mana;
        this.weapons = [];
        this.pets = [];
        this.activePet = null;
        this.spells = [];
    }
    levelUp(){
        this.level = this.level + 1;
        if (this.type.toLowerCase() === 'wizard'){
            console.log('The Wizard has levelled up!')
            this.magic = this.magic + 2
            this.mana = this.mana + 3
            this.defense = this.defense+3
        } else if (this.type.toLowerCase() === 'human'){
            console.log('The Human has levelled up!')
            this.attack = this.attack + 2
            this.mana = this.mana + 3
            this.defense = this.defense+3
        } 
    }
    summonPet(petName){
        for (let i = 0;i<this.pets.length;i++)
            if (petName === this.pets[i].name) {
                this.activePet = this.pets[i];
                console.log(this.pets[i].name + ' has been summoned!');
                break
            } else if (i === this.pets.length-1){
                const characterPets = []
                for (let i = 0;i<this.pets.length;i++){
                    characterPets.push(' ' + this.pets[i].name);
                }
                console.log(this.name + ' does not have a '+ petName + '. Try summoning one of these instead: ' + characterPets)
            }
    }
    getDamage(){
        let charDamage = 0;
        if (this.attack >= this.magic){
            charDamage = charDamage + this.attack;
        } else {
            charDamage = charDamage + this.magic;
        }
        if (this.activePet){
            charDamage = charDamage + this.activePet.damage;
        }
        if (this.spells.length > 0){
            let spellDamage = 0;
            for (let i = 0; i<this.spells.length;i++){
                if (this.spells[i].damage > spellDamage){
                    spellDamage = this.spells[i].damage;
                }
            }
            charDamage = charDamage + spellDamage;
        }
        if (this.activePet === null && this.spells.length === 0){
            let weaponDamage = 0;
            for (let i = 0; i<this.weapons.length;i++){
                if (this.weapons[i].damage > weaponDamage){
                    weaponDamage = this.weapon[i].damage;
                }
            }
            charDamage = charDamage + weaponDamage;
        }
        console.log(charDamage);
        return charDamage;
    }
}

module.exports = character;