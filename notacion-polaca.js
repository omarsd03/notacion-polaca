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
let exp = ["a", "+", "(", "b", "-", "c", "*", "d", "^", "e", ")", "/", "a"];

console.log("Expresion fija:\n" + exp + "\n\nNotacion Polaca Inversa:\n");

for (let i = 0; i < 13; i++) {

    if (exp[i] == 'a' || exp[i] == 'b' || exp[i] == 'c' || exp[i] == 'd' || exp[i] == 'e') {
        console.log(exp[i] + " ");
    }

    if (exp[i] == '+' || exp[i] == '-' || exp[i] == '*' || exp[i] == '/' || exp[i] == '^' || exp[i] == '(') {

        if (pila1.length > 0) {

            dato = pila1.pop();

            while (pila1.length > 0 && PDP(dato) >= PFP(exp[i])) {
                console.log(dato + " ");
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
                console.log(dato + " ");
                dato = pila1.pop();
            }
        }

    }

}

while (pila1.length > 0 && dato != '(') {
    console.log(pila1.pop() + " ");
}