import {getHealth, setHealth,setMaxHealth,getMaxHealth,getDefense, setDefense,getAttack, setAttack,getGold,setGold} from "./userStats.js"
import { getIncrementalHealthValue, incrementIncrementalHealthValue } from "./userIncremental.js";
let increaseHealthCost = 10
let increaseHealthCostModifier = 5;
let increaseIncrementalCost = 20;
let increaseActiveCost = 35;


export function increaseHealth(){
    const increaseHealth = document.querySelector("#increaseHeroHealth")
    increaseHealth.textContent = `Cost ${increaseHealthCost} Gold`
    increaseHealth.addEventListener("click",()=>{
       if(getGold() >= increaseHealthCost){
            setGold(getGold()-increaseHealthCost)
            increaseHealthCost += 5
            increaseHealth.textContent = `Cost ${increaseHealthCost} Gold`
            setMaxHealth(getMaxHealth()+increaseHealthCostModifier)
            setHealth(getHealth()+increaseHealthCostModifier)
       }
    })
}
export function increaseHealthIncremental(){
    const increaseHealthIncremental = document.querySelector("#increaseHeroIncrementalHealth")
    increaseHealthIncremental.textContent = `Cost ${increaseIncrementalCost} Gold`
    increaseHealthIncremental.addEventListener("click",()=>{
        if(getGold() >= increaseIncrementalCost){
            setGold(getGold()-increaseIncrementalCost)
            incrementIncrementalHealthValue(.005)
            increaseIncrementalCost +=8
            increaseHealthIncremental.textContent = `Cost ${increaseIncrementalCost} Gold`
        }
    })

}
export function increaseHealthActive(){
    const increaseHealthActive = document.querySelector("#increaseHeroActiveHealth")
    increaseHealthActive.textContent = `Cost ${increaseActiveCost} Gold`
    increaseHealthActive.addEventListener("click",()=>{
        if(getGold() >= increaseActiveCost){
            setGold(getGold()-increaseActiveCost)
            increaseHealthCostModifier +=5
            increaseActiveCost +=10
            increaseHealthActive.textContent = `Cost ${increaseActiveCost} Gold`
        }
    })

}
export function allHealthSet(){
    increaseHealth()
    increaseHealthIncremental()
    increaseHealthActive()
}