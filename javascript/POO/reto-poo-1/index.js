const scanf = require("scanf");
const { aMixer } = require("./src/core/BD");
const { Blender } = require("./src/core/Mixer");

let random_number = Math.floor(Math.random() * 7);
let opcionEncendido;

const mixer = new Blender(
  aMixer[random_number].brand,
  aMixer[random_number].statusOn,
  aMixer[random_number].speed
);

for (let i = 1; i <= mixer.speed; i++) mixer.current.push(i);

console.group("---------------- Mixer -------------------");
console.table(mixer);
console.groupEnd();

do {
  try {
    console.log("On Mixer (Y)");
    opcionEncendido = scanf("%S");

    let encendido = mixer.status(opcionEncendido);

    console.group("---------------- Mixer -------------------");
    console.log(`brande: ${mixer.brander} \n StatusOn: ${mixer.statusOn = encendido} \n speed: ${mixer.speedCurrent(mixer.speed)} \n Current Speed: ${mixer.speedLevel()}`)
    console.groupEnd();
    
    
  } catch (error) {
    console.log(error);
  }
  
} while (opcionEncendido !== "Y");

console.log("Thank you for using the blender");
