import {getHealth, setHealth,getDefense, setDefense,getAttack, setAttack,getGold,setGold} from "./userStats.js"

let increaseDefenseCost = 10
let increaseIncrementalCost = 15;
let increaseActiveCost = 40;


export function increaseDefense(){
    increaseDefense = document.querySelector("#increaseHeroDefense")
    increaseDefense.textContent = `Cost ${increaseDefenseCost} Gold`
}
export function increaseDefenseIncremental(){
    increaseDefense = document.querySelector("#increaseHeroIncrementalDefense")
    increaseDefense.textContent = `Cost ${increaseIncrementalCost} Gold`
}
export function increaseDefenseActive(){
    increaseDefense = document.querySelector("#increaseHeroActiveDefense")
    increaseDefense.textContent = `Cost ${increaseActiveCost} Gold`
}
export function allDefenseSet(){
    increaseDefense()
    increaseDefenseIncremental()
    increaseDefenseActive()
}