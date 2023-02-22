const character = require('./character');

class Gambler extends character {
    constructor(name){
        super(name,'human',5,0,10,7,100,50);
    }
}
module.exports = Gambler;