var aPersonajes = [
    'Viserys', 
    'Rhaenyra', 
    'Daemon',
    'Lady',
    'Criston',
    'Rhaenys'
];

//recorremos el array para este caso con un for
console.group('\n****>Personajes principales House of the Dragon<**** \n');
for (let i = 0; i < aPersonajes.length; i++) {
    //mostramos la lista de personajes
    console.log(` ${i+1}. ${aPersonajes[i]} \n`);
}
console.groupEnd();