import {createEnemyList} from "./createEnemies.js"
import{gameTic} from './incrementalTic.js'
import{combatTic} from "./combatTic.js"
import {allHealthSet} from "./userHealthUpgrades.js"
import {allDefenseSet} from "./userDefenseUpgrades.js"
import {allAttackSet} from "./userAttackUpgrades.js"
import {combatButtonLoad} from "./combatButtons.js"

allHealthSet()
allDefenseSet()
allAttackSet()
gameTic()
combatTic()
combatButtonLoad()


setInterval(gameTic, 100)
setInterval(combatTic, 1000)

