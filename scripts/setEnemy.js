
export function editEnemyDOM(enemy){
    const enemyName = document.querySelector("#enemy")
    const enemyHealth = document.querySelector("#enemyCurrentHealth")
    const enemyDefense = document.querySelector("#enemyDefense")
    const enemyAttack = document.querySelector("#enemyAttack")

    enemyName.innerHTML = enemy.name
    enemyHealth.innerHTML = enemy.maxHP
    enemyDefense.innerHTML = enemy.def
    enemyAttack.innerHTML = enemy.att
}