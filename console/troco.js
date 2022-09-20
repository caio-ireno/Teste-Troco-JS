const process = require('process');
const Troco = require('../src/Troco');

const qtdReais = process.argv[2] || 0;
console.log(Troco.getQtdeNotas(qtdReais));
