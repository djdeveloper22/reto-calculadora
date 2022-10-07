var scanf = require("scanf");
let contador = 0;
var aPersonajes = [
  "Viserys",
  "Rhaenyra",
  "Daemon",
  "Lady",
  "Criston",
  "Rhaenys",
];

//recorremos el array para este caso con un for
console.group("\n****>Personajes principales House of the Dragon<**** \n");
for (let i = 0; i < aPersonajes.length; i++) {
  //mostramos la lista de personajes
  console.log(` ${i + 1}. ${aPersonajes[i]} \n`);
}
console.groupEnd();

console.log(
  "de los personajes mostrados anteriormente, ingrese el nombre de uno ellos para saber si esta almacenado en la bd"
);
var nombreHero = scanf("%S").toLocaleLowerCase();
  for(let posicion = 0; posicion < aPersonajes.length; posicion++){
    if(aPersonajes[posicion].toLocaleLowerCase() === nombreHero){
      console.log('personaje  encontrado');
      break;
    }else{
      if(contador < aPersonajes.length){
        contador++;
        if(aPersonajes.length === contador)
        console.log('Este personaje no se encuentra en la bd');
      }
    }
  }
  

  

