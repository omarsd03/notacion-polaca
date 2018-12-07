const colors = require("colors");
const fs = require("fs");

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('archivo.txt')
});

lineReader.on('line', function(line) {

    let arreglo = new Array(line);
    var exp = [];

    for (let i = 0; i < arreglo.length; i++) {
        const arr = arreglo[i];

        let strArreglo = arr.toString();
        let newArreglo = strArreglo.replace(/^\s+|\s+$/g, "");

        var findExpresion = /[-+*/()]/; // Encuentra operadores matematicos
        var resultado = newArreglo.match(findExpresion);

        if (resultado) {
            var exp = newArreglo.split(/(?:;| )+/); // Eliminar los punto y coma
        }

    }
    
    let dato;

    // Notacion Prefija
    function PDP(d) {
        if (d == '+' || d == '-') {
            return 1;
        } else if (d == '*' || d == '/') {
            return 2;
        } else if (d == '^') {
            return 3;
        } else {
            return 0;
        }
    }

    // Notacion Polaca Inversa o Posfija
    function PFP(d) {
        if (d == '+' || d == '-') {
            return 1;
        } else if (d == '*' || d == '/') {
            return 2;
        } else {
            return 4;
        }
    }

    let pila1 = new Array();

    console.log("Expresion fija:\n" + colors.blue(exp) + "\n\nNotacion Polaca Inversa:\n");

    for (let i = 0; i < 13; i++) {

        if (exp[i] == 'a' || exp[i] == 'b' || exp[i] == 'c' || exp[i] == 'd' || exp[i] == 'e') {
            console.log(colors.green(exp[i]) + " ");
        }

        if (exp[i] == '+' || exp[i] == '-' || exp[i] == '*' || exp[i] == '/' || exp[i] == '^' || exp[i] == '(') {

            if (pila1.length > 0) {

                dato = pila1.pop();

                while (pila1.length > 0 && PDP(dato) >= PFP(exp[i])) {
                    console.log(colors.red(dato) + " ");
                    dato = pila1.pop();
                }

                pila1.push(dato);
                pila1.push(exp[i]);

            } else {
                pila1.push(exp[i]);
            }

        }

        if (exp[i] == ')') {

            if (pila1.length > 0) {

                dato = pila1.pop();

                while (pila1.length > 0 && dato != '(') {
                    console.log(colors.yellow(dato) + " ");
                    dato = pila1.pop();
                }
            }

        }

    }

    while (pila1.length > 0 && dato != '(') {
        console.log(colors.magenta(pila1.pop()) + " ");
    }

});