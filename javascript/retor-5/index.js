var scanf = require("scanf");
var aCadenaString = [];
var isSeguir = true;
do {
  console.group("****** -> Reto 5 <- *******");
  console.log(
    "I. ingrese una frase o palabra. \nII. Si desea salir de la ejecucion escriba cancelar"
  );
  var palabra = scanf("%S");
  if (palabra === "cancelar") {
    isSeguir = false;
    console.group("^^^^^ cadenas ingresadas ^^^^^^");
    aCadenaString.map((elemento, index) => {
      console.log(`\n${index}. -- ${elemento}`);
    });
    console.log("\nTe esperamos pronto");
    console.groupEnd();
  } else {
    aCadenaString.push(palabra);
    console.log("Frase ingresada\n");
  }
} while (isSeguir !== false);
