import {getHealth, setHealth,getDefense, setDefense,getAttack, setAttack,getGold,setGold} from "./userStats.js"

//increase user health 
let healthIncrementalValue = .008;
export function increaseHealth(){
    let currentHealth = getHealth();
    let newHealth = healthIncrementalValue + currentHealth;
    let  formattedHealth = newHealth.toFixed(3);
    formattedHealth = parseFloat(formattedHealth);
    setHealth(formattedHealth)
}
export function getIncrementalHealthValue(){
    return healthIncrementalValue;
}
export function incrementIncrementalHealthValue(){
    const value = healthIncrementalValue;
    healthIncrementalValue = healthIncrementalValue + value;
}

//increase user defense
let defenseIncrementalValue = .003;
export function increaseDefense(){
    let currentDefense = getDefense();
    let newDefense = defenseIncrementalValue + currentDefense;
    let  formattedDefense = newDefense.toFixed(3);
    //seting back to float
    formattedDefense = parseFloat(formattedDefense);
    setDefense(formattedDefense)
}
export function getIncrementalDefenseValue(){
    return defenseIncrementalValue;
}
export function incrementIncrementalDefenseValue(){
    const value = defenseIncrementalValue;
    defenseIncrementalValue = defenseIncrementalValue + value;
}

//increase user attack
let attackIncrementalValue = .003;
export function increaseAttack(){
    let currentAttack = getAttack();
    let newAttack = attackIncrementalValue + currentAttack;
    let  formattedAttack = newAttack.toFixed(3);
    formattedAttack = parseFloat(formattedAttack);
    setAttack(formattedAttack)
}
export function getIncrementalAttackValue(){
    return attackIncrementalValue;
}
export function incrementIncrementalAttackValue(){
    const value = attackIncrementalValue;
    attackIncrementalValue = attackIncrementalValue + value;
}