class Pets {
    constructor(name){
        this.name = name;
        this.damage = Math.floor(Math.random()*10);
    }
}
module.exports = Pets;