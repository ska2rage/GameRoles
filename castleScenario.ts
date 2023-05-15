import * as readline from 'readline';

let dinero: number = 0;

const opcionesConstruccion: string[] = ['Castillo', 'Casa', 'Fortaleza'];

function mostrarOpcionesConstruccion() {
  console.log('Elige una opción de construcción:');
  for (let i = 0; i < opcionesConstruccion.length; i++) {
    console.log(`${i + 1}. ${opcionesConstruccion[i]}`);
  }
}

function construirCastillo() {
  console.log('Has construido un castillo.');
}

function construirCasa() {
  console.log('Has construido una casa.');
}

function construirFortaleza() {
  console.log('Has construido una fortaleza.');
}

function mejorarConstruccion() {
  console.log('Has mejorado la construcción existente.');
}

function realizarAccion(rl: readline.Interface) {
  mostrarOpcionesConstruccion();
  console.log(`Dinero disponible: ${dinero}`);

  rl.question('Ingresa el número de opción (1-3) o presiona Enter para salir: ', (opcionStr) => {
    if (opcionStr === '') {
      rl.close();
    } else {
      const opcion = parseInt(opcionStr);

      if (opcion >= 1 && opcion <= opcionesConstruccion.length) {
        if (dinero > 0) {
          dinero--;

          switch (opcion) {
            case 1:
              construirCastillo();
              break;
            case 2:
              construirCasa();
              break;
            case 3:
              construirFortaleza();
              break;
          }

          mejorarConstruccion();
        } else {
          console.log('No tienes suficiente dinero para construir.');
        }
      } else {
        console.log('Opción inválida. Ingresa un número válido.');
      }

      realizarAccion(rl);
    }
  });
}

export function startCastleScenario() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log('¡Bienvenido al escenario de construcción de castillos!');
  console.log('Aquí podrás construir y mejorar tus castillos.');

  rl.question('Presiona Enter para comenzar...', () => {
    realizarAccion(rl);
  });
}