const scanf = require("scanf");
const { aMixer } = require("./src/core/BD");
const { Blender } = require("./src/core/Mixer");

let isOn;
let getLevel;
let levelsOpcion = 0;
let on;
let random_number = Math.floor(Math.random() * 7);

const mixer = new Blender(
  aMixer[random_number].brand,
  aMixer[random_number].statusOn,
  aMixer[random_number].speed
);

console.group("---------------- Mixer -------------------");
console.table(mixer);
console.groupEnd();

for (let i = 1; i <= mixer.speed; i++) 
    mixer.current.push(i);

do {
  console.log('Encender Licuadora (Y)');
  isOn = scanf('%S');
  console.clear();
  try {
    on = mixer.status(true);
    mixer.statusOn = on;

  } catch (error) {
    console.log(error);
  }

} while (isOn !== 'Y');

do {
  console.group("---------------- Mixer -------------------");
  console.table(`
    Blender: ${mixer.brander}\n 
    Status: ${mixer.statusOn}\n 
    Speed: ${mixer.speed}\n 
    Currents speed: ${levelsOpcion}\n 
    Levels speed: ${mixer.speedShow()}
  `);
  console.groupEnd();

  try {
    console.log('niveles de velocidad: ');
    levelsOpcion = scanf('%d');

    mixer.opSpeeds(levelsOpcion);
    
  } catch (error) {
    levelsOpcion = 1;
    console.log(error);
  }
  console.log('Off blender (S/N)');
  let off = scanf('%S');

  console.clear();

  if(off !== 'S')
    console.log('blender On!!');
  else
    break;

} while (levelsOpcion !== getLevel);

console.clear();
console.log("Thank you for using the blender");
