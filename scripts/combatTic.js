import {enemyArray} from "./enemyArray.js"
import {createEnemyList} from "./createEnemies.js"
import { editEnemyDOM } from "./setEnemy.js"

createEnemyList();
const enemyList = enemyArray

let currentEnemy = enemyList.enemies[0]
export let currentIndex = currentEnemy.index

export function getCurrentEnemy(){
    return currentEnemy
}
export function getCurrentIndex(){
    return currentIndex
}
export function setCurrentEnemy(newEnemy){
    currentEnemy = newEnemy;
}
export function setCurrentIndex(newIndex){
    currentIndex = newIndex;
}
editEnemyDOM(currentEnemy)
export function combatTic(){
    currentEnemy.takeDamage()
    currentEnemy.giveDamage()
}
