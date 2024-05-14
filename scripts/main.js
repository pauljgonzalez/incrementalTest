import {enemyArray} from "./enemyArray.js"
import {createEnemyList} from "./createEnemies.js"
import{gameTic} from './incrementalTic.js'
import{combatTic} from "./combatTic.js"
import {allHealthSet} from "./userHealthUpgrades.js"

allHealthSet()



gameTic()
combatTic()

setInterval(gameTic, 100)
setInterval(combatTic, 1000)

