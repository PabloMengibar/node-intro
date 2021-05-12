console.log("Tercer ejercicio");

const fs = require("fs");
const cows = require("cowsayjs");

const cowsay = cows.moo({
    message: `Codehouse Academy`,
    mode: `paranoia`,
    action: `think`,
    wrap: false
  });

fs.writeFileSync("./output.txt", cowsay);

console.log(print);