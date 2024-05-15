import {enemyArray} from "./enemyArray.js"

//hp,def,att,name,minGold,maxGold,index
export function createEnemyList() {
    const enemies = enemyArray;
    enemies.addEnemy(100,8,24,"Goblin",10,30,0);
    enemies.addEnemy(125,12,30,"Goblin Archer",25,40,1)
}


