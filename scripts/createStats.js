export class enemyStats {
    constructor(hp,def,att,name){
        this.hp = hp;
        this.def = def;
        this.att = att;
        this.name = name;
    }
    get health() {
        return this.hp
    }
    get defense() {
        return this.def
    }
    get attack() {
        return this.att
    }

}

