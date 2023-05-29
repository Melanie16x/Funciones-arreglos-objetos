let compra = {
  precios: [],
  total: 0
};

function calcularTotal() {
  let seguirComprando = true;
  while (seguirComprando) {
    let precios = prompt("Ingrese el precio del producto o 'total' para finalizar");
    if (precios.toLowerCase() == "total") {
      seguirComprando = false;
      for (let i = 0; i < compra.precios.length; i++) {
        compra.total += parseFloat(compra.precios[i]);
      }
      console.log(`El total de la compra es ${compra.total}`);
    } else {
      compra.precios.push(parseFloat(precios));
    }
  }
}

calcularTotal();
