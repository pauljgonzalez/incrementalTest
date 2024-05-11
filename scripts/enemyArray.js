import {enemyStats} from "./createStats.js"

export const enemyArray = {
    enemies: [],

    addEnemy(hp, def, att, name) {
        this.enemies.push(new enemyStats(hp, def, att, name));
    },

    getEnemies() {
        return [...this.enemies];
    },

    getEnemyCount() {
        return this.enemies.length;
    }
};