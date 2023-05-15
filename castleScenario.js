"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startCastleScenario = void 0;
var readline = require("readline");
var dinero = 0;
var opcionesConstruccion = ['Castillo', 'Casa', 'Fortaleza'];
function mostrarOpcionesConstruccion() {
    console.log('Elige una opción de construcción:');
    for (var i = 0; i < opcionesConstruccion.length; i++) {
        console.log("".concat(i + 1, ". ").concat(opcionesConstruccion[i]));
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
function realizarAccion(rl) {
    mostrarOpcionesConstruccion();
    console.log("Dinero disponible: ".concat(dinero));
    rl.question('Ingresa el número de opción (1-3) o presiona Enter para salir: ', function (opcionStr) {
        if (opcionStr === '') {
            rl.close();
        }
        else {
            var opcion = parseInt(opcionStr);
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
                }
                else {
                    console.log('No tienes suficiente dinero para construir.');
                }
            }
            else {
                console.log('Opción inválida. Ingresa un número válido.');
            }
            realizarAccion(rl);
        }
    });
}
function startCastleScenario() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    console.log('¡Bienvenido al escenario de construcción de castillos!');
    console.log('Aquí podrás construir y mejorar tus castillos.');
    rl.question('Presiona Enter para comenzar...', function () {
        realizarAccion(rl);
    });
}
exports.startCastleScenario = startCastleScenario;
