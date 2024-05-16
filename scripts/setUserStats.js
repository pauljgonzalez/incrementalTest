import {getHealth, setHealth,getMaxHealth,getDefense,setDefense,getAttack,setAttack,setGold,getGold} from "./userStats.js"

const heroHealth = document.querySelector("#setHeroHealth")
const heroDefense = document.querySelector("#setHeroDefense")
const heroAttack = document.querySelector("#setHeroAttack")
const heroGold = document.querySelector("#userGold")
export function setHeroHealth(){
    heroHealth.innerHTML= getHealth()+ " / " + getMaxHealth();
}
export function setHeroDefense(){
    heroDefense.innerHTML= getDefense();
}
export function setHeroAttack(){
    heroAttack.innerHTML=getAttack();
}
export function setHeroGold(){
    heroGold.innerHTML=getGold()+" Gold";
}