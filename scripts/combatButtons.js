import { getCurrentEnemy, getCurrentIndex, setCurrentEnemy, setCurrentIndex } from "./combatTic.js";
import { editEnemyDOM } from "./setEnemy.js";
import { enemyArray } from "./enemyArray.js";

const PREVIOUSENEMY = document.querySelector("#previousEnemy");
const STARTCOMBAT = document.querySelector("#startCombat");
const NEXTENEMY = document.querySelector("#nextEnemy");
const ENEMYARRAY = enemyArray
function previousEnemy() {
    PREVIOUSENEMY.addEventListener("click",()=>{
    if(getCurrentIndex() === 0){
        return
    }else{
        editEnemyDOM(ENEMYARRAY.enemies[(getCurrentIndex() - 1)]);
        setCurrentEnemy(ENEMYARRAY.enemies[(getCurrentIndex() - 1)]);
        setCurrentIndex(getCurrentIndex() - 1);
    }

    })
}
function startCombat(){
    STARTCOMBAT.addEventListener("click",()=>{
    console.log("Start");
    })
}
function nextEnemy (){
    NEXTENEMY.addEventListener("click",()=>{
    if(getCurrentIndex() === enemyArray.getEnemyCount()-1){
        return
        }else{
        editEnemyDOM(ENEMYARRAY.enemies[(getCurrentIndex() + 1)]);
        setCurrentEnemy(ENEMYARRAY.enemies[(getCurrentIndex() + 1)]);
        setCurrentIndex(getCurrentIndex() + 1);
        }
    
    
    
})
}
export function combatButtonLoad(){
    previousEnemy();
    startCombat();
    nextEnemy();
}
