import * as readline from 'readline';
import { Player } from './player';

export class Enemy {
  private name: string;
  private health: number;
  private attack: number;

  constructor(name: string, health: number, attack: number) {
    this.name = name;
    this.health = health;
    this.attack = attack;
  }

  public getName(): string {
    return this.name;
  }

  public getHealth(): number {
    return this.health;
  }

  public getAttack(): number {
    return this.attack;
  }

  public isAlive(): boolean {
    return this.health > 0;
  }

  public takeDamage(damage: number): void {
    this.health -= damage;
    if (this.health < 0) {
      this.health = 0;
    }
  }
}

const player: Player = {
  name: 'Jugador',
  health: 100,
  attack: 20,
};

export function startEnemyScenario() {
  console.log('¡Bienvenido al escenario de enemigos!');
  console.log('Prepárate para enfrentarte a diferentes enemigos.');

  const enemy: Enemy = {
    name: 'Enemigo 1',
    health: 50,
    attack: 15,
  };

  console.log(`Te enfrentas a ${enemy.name}!`);

  // Lógica para el combate con el enemigo
  // ...

  const enemy2: Enemy = {
    name: 'Enemigo 2',
    health: 60,
    attack: 12,
  };

  console.log(`Te enfrentas a ${enemy2.name}!`);

  // Lógica para el combate con el enemigo
  // ...

  // Puedes continuar agregando más enemigos y combates aquí
}

const rl = readline.createInterface({
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

  rl.question('Ingresa el número de opción (1-4): ', (opcionStr) => {
    const opcion = parseInt(opcionStr);

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

    rl.question('Presiona Enter para continuar...', () => {
      startGame();
    });
  });
}

startGame();