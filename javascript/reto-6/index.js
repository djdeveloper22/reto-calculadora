var scanf = require("scanf");
var aNumeros = [];
var opcionCancelar = 'seguir';
console.group('-------- reto 6 javascript ---------');
do{
  console.log('<-')
  console.log('<-')
  console.log('<-')
  console.log('****Ingrese un numero entero');
  var numero = scanf("%d");
  if (isNaN(numero)|| numero === null) {
    console.log('error!!!!...\nIngresaste una cadena de caracteres o un valor null.... no un numero!!');
  } else {
    aNumeros.push(numero);
    console.log('\n****** numero agregado correctamente al array\n');
    console.log('<-');
    console.log('<-');
    console.log('<-');
    console.log('presione enter para seguir almacenando numeros\n de lo contrario digite cancelar.');
    opcionCancelar = scanf('%S');
    opcionCancelar === 'seguir' ? console.log(): opcionCancelar === 'cancelar';
  }
}while(opcionCancelar !== 'cancelar');
console.groupEnd();

console.group('------ Listado de numeros agregados en el array -------');
aNumeros.forEach((elemento, index)=>{
console.log(`${index} ---> ${elemento}`);
});
console.groupEnd();