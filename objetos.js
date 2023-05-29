const producto = {
    nombre: "Chicle",
    precio: 20,
    cantidad: 2
}

function calcularTotal(producto) {
    let total = producto.precio * producto.cantidad;
    return total;
}

//------------------------------------------------

const persona = {
    nombre: "Hernan Dario",
    edad: 24,
    profesion: "Doctor"
}

function presentarPersona(persona) {
    console.log("Mi nombre es:",persona.nombre,", tengo",persona.edad,"años y soy",persona.profesion);
}

//---------------------------------------------------

function esMayorEdad(persona) {
    if (persona.edad >= 18) {
        return true;
    }else{
        return false;
    }
}

//Prueba las funciones:
// let pruebas = esMayorEdad(persona);
// console.log(pruebas);