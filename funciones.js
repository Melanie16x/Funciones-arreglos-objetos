function esMayorEdad(edad) {
    if (edad >= 18) {
        return true;
    }else{
        return false;
    }
}

//---------------------------------------------------------

function calcularAreaRectangulo(base, altura) {
    area = base * altura;
    return area;
}

//---------------------------------------------------------

// SPLIT divide un objeto de tipo String en un array
// REVERSE invierte las posiciones de los elementos de un array
// JOIN concatena los elementos de un array en una cadena de texto
// === Devuelve un resultado booleano
// Operador condicional (Ternario) si la condición es true, el operador retorna el valor de la expr1; de lo contrario, devuelve el valor de expr2
function esPalindromo(cadena) {
    const Reversed = cadena.split("").reverse().join("");

    return Reversed === cadena ? "es palindromo" : "no es palindromo";
}

//--------------------------------------------------------

// Math.raund redondea un numero al numero mas cercano
// Math. random devuelve un numero aleatorio, comprendido en el rango de 0 a menor que 1
function generarNumeroAleatorio() {
    let aleatorio = Math.round(Math.random()*10);
    return "Número aleatorio entre 1 y 10: " + aleatorio;
}