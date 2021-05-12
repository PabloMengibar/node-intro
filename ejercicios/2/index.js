console.log("Segundo ejercicio");


const os = require("os");
const fs = require("fs");


const free = os.freemem();
const arch = os.arch();
const host = os.hostname();

const out = `Free memory: ${free} / Architecture: ${arch} / Platform: ${host}`;

fs.writeFileSync('./output', out);