const Troco = require('../../src/Troco');

//    Caso com valor numérico maior do que zero
it('Espera que o metodo Troco.getQtdeNotas, para quando o valor for 150.55 retorne o resultado correto considerando numero de notas e moedas', () => {
  let valorACalcular = 150.55;
  let esperado = {
    100: 1,
    50: 1,
    20: 0,
    10: 0,
    5: 0,
    2: 0,
    1: 0,
    0.5: 1,
    0.25: 0,
    0.1: 0,
    0.01: 5,
  };

  expect(Troco.getQtdeNotas(valorACalcular)).toEqual(esperado);
});

// Caso com valor numérico menor do que zero
it('Espera que o metodo Troco.getQtdeNotas, para quando o valor for -150.55 retorne o resultado com os valores zerados', () => {
  let valorACalcular = -150.55;
  let esperado = {
    100: 0,
    50: 0,
    20: 0,
    10: 0,
    5: 0,
    2: 0,
    1: 0,
    0.5: 0,
    0.25: 0,
    0.1: 0,
    0.01: 0,
  };

  expect(Troco.getQtdeNotas(valorACalcular)).toEqual(esperado);
});

// Caso com valor numérico igual a zero
it('Espera que o metodo Troco.getQtdeNotas, para quando o valor for 0 retorne o resultado com os valores zerados', () => {
  let valorACalcular = 0;
  let esperado = {
    100: 0,
    50: 0,
    20: 0,
    10: 0,
    5: 0,
    2: 0,
    1: 0,
    0.5: 0,
    0.25: 0,
    0.1: 0,
    0.01: 0,
  };

  expect(Troco.getQtdeNotas(valorACalcular)).toEqual(esperado);
});

// Caso com valor String
it('Espera que o metodo Troco.getQtdeNotas, para quando o valor for "string" retorne o resultado com os valores zerados', () => {
  let valorACalcular = 'string';
  let esperado = {
    100: 0,
    50: 0,
    20: 0,
    10: 0,
    5: 0,
    2: 0,
    1: 0,
    0.5: 0,
    0.25: 0,
    0.1: 0,
    0.01: 0,
  };

  expect(Troco.getQtdeNotas(valorACalcular)).toEqual(esperado);
});
