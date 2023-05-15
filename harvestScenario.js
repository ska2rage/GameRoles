"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startHarvestScenario = void 0;
var readline = require("readline");
var dinero = 0;
function cosechar(cultivo) {
    var cantidadDinero = 0;
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
    console.log("Has realizado una cosecha exitosa de ".concat(cultivo, ". Obtuviste ").concat(cantidadDinero, " unidades de dinero."));
}
function realizarCosecha(rl) {
    console.log("Dinero disponible: ".concat(dinero));
    rl.question('Presiona Enter para realizar una cosecha (maiz, trigo, papa) o ingresa "Salir" para terminar: ', function (opcion) {
        if (opcion.toLowerCase() === 'salir') {
            rl.close();
        }
        else {
            cosechar(opcion.toLowerCase());
            realizarCosecha(rl);
        }
    });
}
function startHarvestScenario() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    console.log('¡Bienvenido al escenario de cosecha!');
    console.log('Aquí podrás recolectar recursos y obtener dinero para construir castillos.');
    rl.question('Presiona Enter para comenzar...', function () {
        realizarCosecha(rl);
    });
}
exports.startHarvestScenario = startHarvestScenario;
