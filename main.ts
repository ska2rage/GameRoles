import * as readline from 'readline';
import { startEnemyScenario } from './enemyScenario';
import { startCastleScenario } from './castleScenario';
import { startHarvestScenario } from './harvestScenario';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para mostrar las opciones de escenario
function mostrarOpcionesEscenario() {
  console.log('Elige un escenario:');
  console.log('1. Escenario de Enemigos');
  console.log('2. Escenario de Castillos');
  console.log('3. Escenario de Cosecha');
  console.log('4. Salir');
}

// Función principal del juego
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
        startCastleScenario();
        break;
      case 3:
        startHarvestScenario();
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