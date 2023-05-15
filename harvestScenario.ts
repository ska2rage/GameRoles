import * as readline from 'readline';

let dinero: number = 0;

function cosechar(cultivo: string) {
  let cantidadDinero = 0;

  switch (cultivo) {
    case 'maiz':
      cantidadDinero = 5; // Cantidad de dinero por cosechar maíz
      break;
    case 'trigo':
      cantidadDinero = 7; // Cantidad de dinero por cosechar trigo
      break;
    case 'papa':
      cantidadDinero = 3; // Cantidad de dinero por cosechar papa
      break;
    default:
      console.log('Cultivo inválido.');
      return;
  }

  dinero += cantidadDinero;
  console.log(`Has realizado una cosecha exitosa de ${cultivo}. Obtuviste ${cantidadDinero} unidades de dinero.`);
}

function realizarCosecha(rl: readline.Interface) {
  console.log(`Dinero disponible: ${dinero}`);

  rl.question(
    'Presiona Enter para realizar una cosecha (maiz, trigo, papa) o ingresa "Salir" para terminar: ',
    (opcion) => {
      if (opcion.toLowerCase() === 'salir') {
        rl.close();
      } else {
        cosechar(opcion.toLowerCase());
        realizarCosecha(rl);
      }
    }
  );
}

export function startHarvestScenario() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log('¡Bienvenido al escenario de cosecha!');
  console.log('Aquí podrás recolectar recursos y obtener dinero para construir castillos.');

  rl.question('Presiona Enter para comenzar...', () => {
    realizarCosecha(rl);
  });
}