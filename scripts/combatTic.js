import {enemyArray} from "./enemyArray.js"
import {createEnemyList} from "./createEnemies.js"

createEnemyList();
const enemyList = enemyArray;
export let currentEnemy = enemyList.enemies[0]
export function combatTic(){
    currentEnemy.takeDamage()
}
