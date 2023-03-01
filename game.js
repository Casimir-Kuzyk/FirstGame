const prompt = require("prompt-promise");

const Gambler = require('./characters/Gambler');
const Shaman = require('./characters/Shaman');
const Warrior = require('./characters/Warrior');
const character = require('./characters/character');
const Pet = require('./Pet');
const Mob = require('./mobs/mobs');

async function gameloop() {
    //get class choice and name from user
    
    let check = true;
    while (check) {
        var classChoice = await prompt("select your class: Gambler, Shaman, or Warrior ");
        if (classChoice.toLowerCase() != 'warrior' && classChoice.toLowerCase() != 'shaman' && classChoice.toLowerCase() != 'gambler'){
            console.log('You must choose either a Gambler, Shaman, or Warrior!')
        } else {
            console.log('You have chosen the '+ classChoice + ' class');
            check = false;
        }
    }
    const chooseName = await prompt("What do you want your characters name to be? ");
    if (classChoice.toLowerCase() === 'warrior') {
        charName = new Warrior(chooseName)
        console.log('You have created a character named '+ chooseName + ' of the Warrior class');
    } else if (classChoice.toLowerCase() === 'shaman'){
        charName = new Shaman(chooseName)
        console.log('You have created a character named '+ chooseName + ' of the Shaman class');
    } else if (classChoice.toLowerCase() === 'gambler'){
        charName = new Gambler(chooseName)
        console.log('You have created a character named '+ chooseName + ' of the Gambler class');
    } 
// execute the fight sequence. ask the user if they want to keep playing after each Mob.
    let keepPlaying = true;
    let charLevel = 0;
    let mobLevel = 0;

    while (keepPlaying) {
        if (charName.health <= 0) {
            console.log('You died. Game over');
            keepPlaying =false;
        }
        charName.spells = null;
        charName.weapons = null;
        charName.pets = null;
        charName.levelUp();
        charLevel = charLevel + 1;
        mobLevel = mobLevel + 1;
        newMob = new Mob(mobLevel);
        while (newMob.health > 0 && charName.health > 0) {
            let check = true;
            let checkpet = false;
            while (check) {
                let turn = await prompt("Would you like to attack, summonPet, equipWeapon, or spell? ");
                if (turn.toLowerCase() != 'summonpet' && turn.toLowerCase() != 'attack' && turn.toLowerCase() != 'equipweapon'&& turn.toLowerCase() != 'spell'){
                    console.log('You must choose to use either summonPet, equipweapon, attack, or spell')
                } else if (turn.toLowerCase() === 'summonpet' && checkpet != true) {
                    charName.summonPet('Stinky');
                    console.log('Stinky the pet has been summoned!')
                    checkpet = true;
                    check = false;
                } else if (turn.toLowerCase() === 'summonpet' && checkpet === true){
                    console.log('You have already summoned a pet!!')
                } else if (turn.toLowerCase() === 'attack') {
                    newMob.health = newMob.health - charName.getDamage();
                    console.log('You deal ' + charName.getDamage() + ' damage to the ' + newMob.name + ' who has has ' + newMob.health + ' health remaining');
                    check = false;
                } else if (turn.toLowerCase() === 'equipweapon') {
                    charName.equipWeapon();
                    check = false;
                } else if (turn.toLowerCase() === 'spell') {
                    charName.spell();
                    check = false;
                }
                charName.health = charName.health - newMob.damage;
                console.log(newMob.name + ' attacks you for ' + newMob.damage + ', leaving you with ' + charName.health + ' remaining health')
                if (newMob.health <= 0){
                    console.log('Congrats on beating the ' + newMob.name + '. You have levelled up!')
                    console.log('you have defeated ' + mobLevel + ' Mob(s)')
                    console.log('NEXT MOB INCOMING!!!')
                }
            }
            

        }
    }

}

gameloop();