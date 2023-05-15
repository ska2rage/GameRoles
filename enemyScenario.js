"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startEnemyScenario = exports.Enemy = void 0;
var readline = require("readline");
var Enemy = /** @class */ (function () {
    function Enemy(name, health, attack) {
        this.name = name;
        this.health = health;
        this.attack = attack;
    }
    Enemy.prototype.getName = function () {
        return this.name;
    };
    Enemy.prototype.getHealth = function () {
        return this.health;
    };
    Enemy.prototype.getAttack = function () {
        return this.attack;
    };
    Enemy.prototype.isAlive = function () {
        return this.health > 0;
    };
    Enemy.prototype.takeDamage = function (damage) {
        this.health -= damage;
        if (this.health < 0) {
            this.health = 0;
        }
    };
    return Enemy;
}());
exports.Enemy = Enemy;
var player = {
    name: 'Jugador',
    health: 100,
    attack: 20,
};
function startEnemyScenario() {
    console.log('¡Bienvenido al escenario de enemigos!');
    console.log('Prepárate para enfrentarte a diferentes enemigos.');
    var enemy = {
        name: 'Enemigo 1',
        health: 50,
        attack: 15,
    };
    console.log("Te enfrentas a ".concat(enemy.name, "!"));
    // Lógica para el combate con el enemigo
    // ...
    var enemy2 = {
        name: 'Enemigo 2',
        health: 60,
        attack: 12,
    };
    console.log("Te enfrentas a ".concat(enemy2.name, "!"));
    // Lógica para el combate con el enemigo
    // ...
    // Puedes continuar agregando más enemigos y combates aquí
}
exports.startEnemyScenario = startEnemyScenario;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function mostrarOpcionesEscenario() {
    console.log('Elige un escenario:');
    console.log('1. Escenario de Enemigos');
    console.log('2. Escenario de Castillos');
    console.log('3. Escenario de Cosecha');
    console.log('4. Salir');
}
function startGame() {
    console.log('¡Bienvenido al mini juego de rol de texto!');
    console.log('=========================');
    mostrarOpcionesEscenario();
    rl.question('Ingresa el número de opción (1-4): ', function (opcionStr) {
        var opcion = parseInt(opcionStr);
        switch (opcion) {
            case 1:
                startEnemyScenario();
                break;
            case 2:
                // Lógica para el escenario de castillos
                break;
            case 3:
                // Lógica para el escenario de cosecha
                break;
            case 4:
                console.log('¡Hasta luego!');
                rl.close();
                return;
            default:
                console.log('Opción inválida. Ingresa un número válido.');
        }
        rl.question('Presiona Enter para continuar...', function () {
            startGame();
        });
    });
}
startGame();
