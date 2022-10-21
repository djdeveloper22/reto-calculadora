console.clear();
const scanf = require("scanf");
const { aMixer } = require("./src/core/BD");
const { Blender } = require("./src/core/Mixer");
let random_number = Math.floor(Math.random() * 4);

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
let choice = scanf("%S").toLocaleLowerCase;
console.clear();
choice === "yes" ? (statusOff = false) : (statusOff = true);
aMixer[random_number].statusOff = false;
console.log(`--------------------------------------\n
  brand blender: ${ob1_mixer.brand} \n
  statusOff: ${ob1_mixer.on(aMixer[random_number].statusOff)} \n
  speed level: ${ob1_mixer.speed}\n
  Current Speed: ${ob1_mixer.speedCurrent(Math.floor(Math.random()*aMixer[random_number].speed)+1)} \n
  ----------------------------------------
`);





