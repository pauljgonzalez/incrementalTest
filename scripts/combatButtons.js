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
        ENEMYARRAY.enemies[getCurrentIndex()].currentHP = ENEMYARRAY.enemies[getCurrentIndex()].maxHP
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
    //if final enemy do nothing
    if(getCurrentIndex() === enemyArray.getEnemyCount()-1){return}
    //if current enemy has not been defeated do nothing
    if(ENEMYARRAY.enemies[getCurrentIndex()].defeated === false){return} 
    //if other conditions are not meet go to next enemy
    ENEMYARRAY.enemies[getCurrentIndex()].currentHP = ENEMYARRAY.enemies[getCurrentIndex()].maxHP
    editEnemyDOM(ENEMYARRAY.enemies[(getCurrentIndex() + 1)]);
    setCurrentEnemy(ENEMYARRAY.enemies[(getCurrentIndex() + 1)]);
    setCurrentIndex(getCurrentIndex() + 1);
})
}
export function combatButtonLoad(){
    previousEnemy();
    startCombat();
    nextEnemy();
}
