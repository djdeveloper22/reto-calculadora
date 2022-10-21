const scanf = require("scanf");
const { aMixer } = require("./src/core/BD");
const { Blender } = require("./src/core/Mixer");
let random_number = Math.floor(Math.random() * 4);
let ob1_mixer = new Blender(
  aMixer[random_number].brand,
  aMixer[random_number].statusOff,
  aMixer[random_number].speed
);

console.log(`--------------------------------------\n
  brand blender: ${ob1_mixer.brand} \n
  statusOff: ${ob1_mixer.on(aMixer[random_number].statusOff)} \n
  speed level: ${ob1_mixer.speed}\n
  ----------------------------------------
`);

console.log("On blender(Y)...");
var status = scanf("%S");
if (status !== "Y" && status !== "N") {
  console.log("Error");
} else {
  let cont = 0;
  aMixer[random_number].statusOff = false;
  while (status !== "Y") cont++;
  console.log(`--------------------------------------\n
  brand blender: ${ob1_mixer.brand} \n
  statusOff: ${ob1_mixer.on(aMixer[random_number].statusOff)} \n
  speed level: ${ob1_mixer.speed}\n
  Current speed: ${ob1_mixer.speedCurrent(
    Math.floor(Math.random() * aMixer[random_number].speed) + 1
  )}
  ----------------------------------------
  `);
  console.log("apagar(N)");
  status = scanf("%S");
}
console.clear();
console.log("off blender");
