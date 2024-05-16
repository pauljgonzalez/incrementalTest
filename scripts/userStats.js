let health = 100;
let maxHealth = 100
let defense = 20;
let attack = 10;
let gold = 0;
//set and get health
export function getHealth() {
    return health;
}
export function setHealth(newHealth){
    health = newHealth;
}
export function setMaxHealth(newHealth){
    maxHealth = newHealth;
}
export function getMaxHealth() {
    return maxHealth;
}
//set and get defense
export function getDefense() {
    return defense;
}
export function setDefense(newDefense){
    defense = newDefense;
}
//set and get attack
export function getAttack() {
    return attack;
}
export function setAttack(newAttack){
    attack = newAttack;
}
//set and get gold
export function getGold(){
    return gold
    }
export function setGold(newGold){
    gold = newGold
}
export function takeDamage(enemyAttack){
    const damageTaken = enemyAttack - defense;
    if(damageTaken <0){
        console.log("no damage taken")
        return
    } 
    health = health - damageTaken;

}