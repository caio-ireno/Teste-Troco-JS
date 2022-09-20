class Troco {
  static getQtdeNotas(reais) {
    const notasQtd = {
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

    const vetorTroco = Object.keys(notasQtd)
      .map((num) => parseFloat(num))
      .sort((num1, num2) => {
        return num2 - num1;
      });
    for (var i = 0; i <= vetorTroco.length; i++) {
      while (reais >= vetorTroco[i]) {
        reais = (reais - vetorTroco[i]).toFixed(2);
        notasQtd[vetorTroco[i]]++;
      }
    }
    return notasQtd;
  }
}

module.exports = Troco;
