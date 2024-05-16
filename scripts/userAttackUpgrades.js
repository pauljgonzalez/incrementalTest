import {getHealth, setHealth,getDefense, setDefense,getAttack, setAttack,getGold,setGold} from "./userStats.js"

const INCREASEHEROFLATATTACK = document.querySelector("#increaseHeroAttack")

let increaseAttackCost = 10;
let increaseIncrementalCost = 25;
let increaseActiveCost = 30;


export function increaseAttack(){
    increaseAttack = document.querySelector("#increaseHeroAttack")
    increaseAttack.textContent = `Cost ${increaseAttackCost} Gold`
}
export function increaseAttackIncremental(){
    increaseAttack = document.querySelector("#increaseHeroIncrementalAttack")
    increaseAttack.textContent = `Cost ${increaseIncrementalCost} Gold`
}
export function increaseAttackActive(){
    increaseAttack = document.querySelector("#increaseHeroActiveAttack")
    increaseAttack.textContent = `Cost ${increaseActiveCost} Gold`
}
export function allAttackSet(){
    increaseAttack()
    increaseAttackIncremental()
    increaseAttackActive()
}
INCREASEHEROFLATATTACK.addEventListener("click",()=>{
    console.log("increase attack")
})