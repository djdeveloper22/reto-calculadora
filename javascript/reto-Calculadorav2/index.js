var scanf = require("scanf");

console.log("Mi Calculadora");
console.log("\n");
console.log("Escoje la operación a realizar");
console.log("\n");

console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicación");
console.log("4. División");

console.log("\n");
console.log("Escoja la operación: ");

let operacionSeleccionada = scanf("%d");

switch (operacionSeleccionada) {
  case 1:
    console.group("------ suma de números ------");
    console.log("Ingrese Numero Uno: ");
    var numeroUno = scanf("%d");
    console.log("Ingrese Numero Dos: ");
    var numeroDos = scanf("%d");

    if (isNaN(numeroUno) && isNaN(numeroDos)) {
      console.log("Por favor debes ingresar números");
    } else {
      let resultado = numeroUno + numeroDos;
      console.log(`El resultado de la suma es: ${resultado}`);
    }
    console.groupEnd();
    break;
  case 2:
    console.group("------- resta de números -------");
    console.log("Ingrese Numero Uno: ");
    var numeroUno = scanf("%d");
    console.log("Ingrese Numero Dos: ");
    var numeroDos = scanf("%d");

    if (isNaN(numeroUno) && isNaN(numeroDos)) {
      console.log("Por favor debes ingresar números");
    } else {
      let resultado = numeroUno - numeroDos;
      console.log(`El resultado de la resta es: ${resultado}`);
    }
    console.groupEnd();
    break;
  case 3:
    console.group("------- Multiplicación de números -------");
    console.log("Ingrese Numero Uno: ");
    var numeroUno = scanf("%d");
    console.log("Ingrese Numero Dos: ");
    var numeroDos = scanf("%d");

    if (isNaN(numeroUno) && isNaN(numeroDos)) {
      console.log("Por favor debes ingresar números");
    } else {
      let resultado = numeroUno * numeroDos;
      console.log(`El resultado de la resta es: ${resultado}`);
    }
    console.groupEnd();
    break;
  case 4:
    console.group("------- División de números -------");
    console.log("Ingrese Numero Uno: ");
    var numeroUno = scanf("%d");
    console.log("Ingrese Numero Dos: ");
    var numeroDos = scanf("%d");

    if (isNaN(numeroUno) && isNaN(numeroDos)) {
      console.log("Por favor debes ingresar números");
    } else if (numeroUno === 0 || numeroDos === 0) {
      console.log("esta operacion no sera valida para este caso");
    } else {
      let resultado = numeroUno / numeroDos;
      console.log(`El resultado de la división es: ${resultado}`);
    }
    console.groupEnd();
    break;
  default:
    console.log("La opcion seleccionada no existe en el menú");
    break;
}
