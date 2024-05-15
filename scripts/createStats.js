import {getHealth, setHealth,getDefense, setDefense,getAttack, setAttack,getGold,setGold} from "./userStats.js";

export class enemyStats {
    constructor(hp,def,att,name,minGold,maxGold,index){
        this.maxHP = hp;
        this.currentHP = hp;
        this.def = def;
        this.att = att;
        this.name = name;
        this.minGold = minGold;
        this.maxGold = maxGold;
        this._index = index;
        this.enemyHealthElement = document.querySelector("#enemyHealth");
        this.enemyAttackElement = document.querySelector("#enemyAttack");
        this.enemyDefenseElement = document.querySelector("#enemyDefense");
        this.enemyNameElement = document.querySelector("#enemy");
        this.updateHealthDisplay();
        this.updateAttackDisplay();
        this.updateDefenseDisplay();
        this.updateName();
    
    }
    get health() {
        return this.maxHP;
    }
    get defense() {
        return this.def;
    }
    get attack() {
        return this.att;
    }
    get index(){
        return this._index
    }
    updateHealthDisplay(){
       this.enemyHealthElement.textContent = `${this.currentHP}/${this.maxHP}`;
       
    }
    takeDamage(){
        let damage =(getAttack() - this.defense).toFixed(3);
        if(damage <= 0){
            this.currentHP = this.currentHP
        }else{
            let newHP = (this.currentHP - damage).toFixed(3);
            let formatHP =  parseFloat(newHP);
            this.currentHP = formatHP;
            if (this.currentHP < 0) {
                this.currentHP = 0;
            }
        }
        this.updateHealthDisplay();

        if (this.currentHP === 0) {
            this.enemyDefeated();
        }
    }
    updateAttackDisplay(){
        this.enemyAttackElement.innerHTML = this.att
    }
    updateDefenseDisplay(){
        this.enemyDefenseElement.innerHTML = this.def
    }
    updateName(){
        this.enemyNameElement.innerHTML = this.name
    }
    enemyDefeated(){
        console.log(this.name + " defeated");
        this.getGold()
        this.currentHP = this.maxHP;
        this.updateHealthDisplay();
        //TO DO call for combat delay timer 
    }
    getGold(){
        const heroGold = document.querySelector("#userGold")
        const newGold = getGold() + Math.floor(Math.random() * (this.maxGold - this.minGold + 1)) + this.minGold;
        setGold(newGold)
    }
}

