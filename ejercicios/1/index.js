console.log("Primer ejercicio");
const fs = require('fs');

fs.rename('./1/input.txt', './1/output.txt', (err, data) => {
    if(err) {
      console.log('error: ', err);
    } else {
      console.log(data);
    }
  });

const text = fs.readFileSync("output.txt");
const upperCase = text.toString("utf-8").toUpperCase();

fs.writeFileSync("./output.txt", upperCase); 
