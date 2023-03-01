const character = require('./character');

class Gambler extends character {
    constructor(name){
        super(name,'Gambler',6,5,50);
    }
}
module.exports = Gambler;