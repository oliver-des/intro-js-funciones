// Ejercicio 1
function saludar(nombre) {


    return `Hola ${nombre}`
}


console.log(saludar('Oliver'))

// Ejercicio 2
function suma(a, b) {
    return a + b
}
console.log('La suma es ' + suma(100, 70))


// Ejercicio 3
function esPar(number) {
    if (number % 2 == 0) {
        return true

    } else {
        return false
    }
}
console.log(esPar(7))