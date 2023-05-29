let numero = parseInt(prompt("Ingrese un número"));

function esPrimo(numero) {
  if (numero > 1) {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return "El número " + numero + " no es primo.";
      }
    }
    return "El número " + numero + " es primo.";
  } else {
    return "El número " + numero + " no es primo.";
  }
}

console.log(esPrimo(numero));
