import {enemyArray} from "./enemyArray.js"
import {createEnemyList} from "./createEnemies.js"
import {getHealth, setHealth,getDefense, setDefense,getAttack, setAttack} from "./userStats.js"
import {increaseHealth,increaseDefense,increaseAttack} from "./userIncremental.js"
import {setHeroHealth,setHeroDefense,setHeroAttack,setHeroGold} from "./setUserStats.js"


//Initalize enemy list
createEnemyList();
const enemies = enemyArray;
//console.log(enemies.getEnemies());
//console.log(getIncrementalHealthValue())

setInterval(gameTic, 100)

function gameTic(){
    increaseHealth();
    increaseDefense();
    increaseAttack();
    setHeroHealth();
    setHeroDefense();
    setHeroAttack();
    setHeroGold();
}