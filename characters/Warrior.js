const character = require('./character');

class Warrior extends character {
    constructor(name){
        super(name,'Warrior',6,1,50);
    }
}
module.exports = Warrior;