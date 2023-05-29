let temperatura = parseFloat(
  prompt("Ingresa la temperatura que deseas convertir:")
);
let unidad = prompt(
  "Ingresa la unidad de temperatura (Celsius o Fahrenheit):"
).toLowerCase();

function convertir(temperatura, unidad) {
  if (unidad == "celsius") {
    let fahrenheit = temperatura * 1.8 + 32;
    console.log(
      `${temperatura} Celsius son equivalentes a ${fahrenheit} Fahrenheit.`
    );
  } else if (unidad == "fahrenheit") {
    let celsius = (temperatura - 32) / 1.8;
    console.log(
      `${temperatura} Fahrenheit son equivalentes a ${celsius} Celsius.`
    );
  } else {
    console.log("Unidad de temperatura inválida.");
  }
}

console.log(convertir(temperatura, unidad));
