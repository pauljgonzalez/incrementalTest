import {getHealth, setHealth,getDefense, setDefense,getAttack, setAttack,getGold,setGold} from "./userStats.js"

let increaseHealthCost = 10
let increaseIncrementalCost = 20;
let increaseActiveCost = 50;


export function increaseHealth(){
    increaseHealth = document.querySelector("#increaseHeroHealth")
    increaseHealth.textContent = `Cost ${increaseHealthCost} Gold`
}
export function increaseHealthIncremental(){
    increaseHealth = document.querySelector("#increaseHeroIncrementalHealth")
    increaseHealth.textContent = `Cost ${increaseIncrementalCost} Gold`
}
export function increaseHealthActive(){
    increaseHealth = document.querySelector("#increaseHeroActiveHealth")
    increaseHealth.textContent = `Cost ${increaseActiveCost} Gold`
}

export function allHealthSet(){
    increaseHealth()
    increaseHealthIncremental()
    increaseHealthActive()
}