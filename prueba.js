const colors = require("colors");

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('archivo.txt')
});

lineReader.on('line', function(line) {

    let arreglo = new Array(line);

    for (let i = 0; i < arreglo.length; i++) {
        const arr = arreglo[i];

        let strArreglo = arr.toString();
        let newArreglo = strArreglo.replace(/^\s+|\s+$/g, "");
        console.log(colors.yellow(newArreglo));

        //var findExpresion = /(?=[-+*/()])|(?<=[-+*/()])/;
        var findExpresion = /[-+*/()]/; // Encuentra operadores matematicos
        var resultado = newArreglo.match(findExpresion);

        /*if (resultado) {
            console.log("true".green);
            console.log(colors.cyan(resultado));
        }*/

        if (resultado) {

            console.log('Todo salio bien!!');
            console.log(newArreglo.red);

            var arrSeparado = newArreglo.split(/(?:;| )+/);
            console.log(arrSeparado);
        }

        return arrSeparado;
    }
});