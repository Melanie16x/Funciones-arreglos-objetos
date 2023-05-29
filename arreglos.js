function obtenerSuma(arrayNumeros) {
  let suma = 0;
  for (let i = 0; i < arrayNumeros.length; i++) {
    suma += arrayNumeros[i];
  }
  return suma;
}

//-------------------------------------------------------

function obtenerPares(arreglo) {
  let numPares = [];

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 == 0) {
      numPares.push(arreglo[i]);
    }
  }
  return numPares;
}

//---------------------------------------------------------

function obtenerPromedioPonderado(notas, pesos) {
  let sumaNotas = 0;
  let sumaPesos = 0;

  for (let i = 0; i < notas.length; i++) {
    sumaNotas += notas[i] * pesos[i];
    sumaPesos += pesos[i];
  }

  const PromedioPonderado = sumaNotas / sumaPesos;
  return PromedioPonderado;
}

//--------------------------------------------------------

function obtenerMaximo(arreglo) {
  let maximo = arreglo[0];
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > maximo) {
      maximo = arreglo[i];
    }
  }
  return maximo;
}

// Prueba las funciones:
// let arrayNumeros = [10, 23, 7, 44];
// let pruebas = obtenerMaximo(arrayNumeros);
// console.log(pruebas);
