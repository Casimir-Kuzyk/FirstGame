class mobs {
    constructor (level) {
        const arr = ['Goblin','bad Guy','Dr. Evil','shoe','Orc']
        this.name = arr[Math.floor(Math.random()*arr.length)];
        this.damage = Math.floor(5*Math.random()*level);
        this.health = Math.floor(50*Math.random()*level);
    }
}
module.exports = mobs;
