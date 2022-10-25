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

console.group('---------------- Mixer -------------------');
console.table(mixer);
console.groupEnd()
console.log('On Mixer (Y)');
opcionEncendido = scanf('%S');
if(opcionEncendido !== 'Y' || opcionEncendido === ''){
  console.warn('Opcion incorrecta');
}else{
  console.clear();
  let current = 0
  for (let i = 1; i <= mixer.speed ; i++)
    mixer.current.push(i);
  let aSpeed = mixer.current;
  do {
    console.group('---------------- Mixer -------------------');
    console.log(
      `Marca : ${mixer.brander}\n Status On: ${mixer.status(mixer.statusOn = true)}\n speed: ${mixer.speed}\n Current Speed: ${mixer.speedCurrent(current)}\n nivel speed: ${mixer.speedLevel()}`);
      console.groupEnd()
      console.log('Choose the speed:');
      current = scanf('%d');
      let eArray = aSpeed.findIndex((elemento)=> elemento === current);
      if(eArray === -1) console.log('Inaccurate speed');
      console.log('check Or to turn off (O)');
      opcionEncendido = scanf('%S');
      if(opcionEncendido === 'O') break;
      console.log('Press Enter to continue');
      let enter = scanf('%S');
      console.clear();
  } while (opcionEncendido !== 'O');
}
console.clear()
console.log('Thank you for using the blender')
