const character = require('./character');

class Shaman extends character {
    constructor(name){
        super(name,'Shaman',3,7,50);
    }
}
module.exports = Shaman;