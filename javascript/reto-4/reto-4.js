
var scanf = require('scanf');

console.group('------ Nota definitiva ------');
console.log('Digite su nota definitiva: ');
let notaFinal = scanf('%d');
if(isNaN(notaFinal)){
  console.log('no es un numero el dato ingresado');
}else{
  if(notaFinal >=0 && notaFinal <3){
    console.log(`su nota final es: ${notaFinal}.... Muy deficiente`);
  }else if(notaFinal && 3 && notaFinal < 5){
    console.log(`su nota final es: ${notaFinal}.... Insuficiente`);
  }else if(notaFinal >= 5 && notaFinal < 6){
    console.log(`su nota final es: ${notaFinal}.... Suficiente`);
  }else if(notaFinal >=6 && notaFinal < 7){
    console.log(`su nota final es: ${notaFinal}.... Bien`);
  }else if(notaFinal >= 7 && notaFinal < 9){
    console.log(`su nota final es: ${notaFinal}.... Notable`);
  }else if(notaFinal >= 9 && notaFinal <= 10){
    console.log(`su nota final es: ${notaFinal}.... Sobresaliente`);
  }else{
    console.log('el numero ingresado esta fuera del rango notarial...');
  }
}
console.groupEnd();