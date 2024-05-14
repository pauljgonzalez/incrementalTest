import {enemyStats} from "./createStats.js"

export const enemyArray = {
    enemies: [],

    addEnemy(hp, def, att, name, minGold, maxGold) {
        this.enemies.push(new enemyStats(hp, def, att, name, minGold, maxGold));
    },

    getEnemies() {
        return [...this.enemies];
    },

    getEnemyCount() {
        return this.enemies.length;
    }
};