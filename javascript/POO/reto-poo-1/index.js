
const scanf = require("scanf");
const { aMixer } = require("./src/core/BD");
const { Blender } = require("./src/core/Mixer");
let random_number = Math.floor(Math.random() * 4);
let statusOff = true;
let ob1_mixer = new Blender(
  aMixer[random_number].brand,
  aMixer[random_number].statusOff,
  aMixer[random_number].speed,
);

console.log(`--------------------------------------\n
  brand blender: ${ob1_mixer.brand} \n
  statusOff: ${ob1_mixer.on(aMixer[random_number].statusOff)} \n
  speed level: ${ob1_mixer.speed}\n
  ----------------------------------------
`);

console.log("turn on blender yes/no");
let choice = scanf("%s").toLocaleLowerCase;
if(choice == 'yes'){
  console.log('entro')
  statusOff = false;
  aMixer[random_number].statusOff;
  console.log(`--------------------------------------\n
    brand blender: ${ob1_mixer.brand} \n
    statusOff: ${ob1_mixer.on(aMixer[random_number].statusOff)} \n
    speed level: ${ob1_mixer.speed}\n
    Current Speed: ${ob1_mixer.speedCurrent(Math.floor(Math.random()*aMixer[random_number].speed)+1)} \n
    ----------------------------------------
  `);
}else if(choice == 'no'){
  console.log('Blender Off');
}
//console.clear();




