import {getHealth, setHealth,getMaxHealth,getDefense, setDefense,getAttack, setAttack} from "./userStats.js"

const heroHealth = document.querySelector("#setHeroHealth")
const heroDefense = document.querySelector("#setHeroDefense")
const heroAttack = document.querySelector("#setHeroAttack")
export function setHeroHealth(){
    heroHealth.innerHTML= getMaxHealth()+ " / " + getHealth();
}
export function setHeroDefense(){
    heroDefense.innerHTML= getDefense();
}
export function setHeroAttack(){
    heroAttack.innerHTML=getAttack();
}