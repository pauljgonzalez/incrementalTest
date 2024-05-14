import {increaseHealth,increaseDefense,increaseAttack} from "./userIncremental.js"
import {setHeroHealth,setHeroDefense,setHeroAttack,setHeroGold} from "./setUserStats.js"
export function gameTic(){
    increaseHealth();
    increaseDefense();
    increaseAttack();
    setHeroHealth();
    setHeroDefense();
    setHeroAttack();
    setHeroGold();
}