import {enemyArray} from "./enemyArray.js"
import {createEnemyList} from "./createEnemies.js"
import {getHealth, setHealth,getDefense, setDefense,getAttack, setAttack} from "./userStats.js"
import {increaseHealth,increaseDefense,increaseAttack} from "./userIncremental.js"
import {setHeroHealth,setHeroDefense,setHeroAttack,setHeroGold} from "./setUserStats.js"
import {getRandomGold} from "./rngGold.js"
import { editEnemyDOM } from "./setEnemy.js"

//Initalize enemy list
createEnemyList();
const enemyList = enemyArray;
//console.log(enemies.getEnemies());
//console.log(getIncrementalHealthValue())
let currentEnemy = enemyList.enemies[0]
setInterval(gameTic, 100)
setInterval(combatTic, 1000)

function gameTic(){
    increaseHealth();
    increaseDefense();
    increaseAttack();
    setHeroHealth();
    setHeroDefense();
    setHeroAttack();
    setHeroGold();
}
function combatTic(){
    currentEnemy.takeDamage()
}
