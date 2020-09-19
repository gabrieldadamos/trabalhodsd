function somar(n1, n2) {
  return Number(n1) + Number(n2);
}

function subtrair(n1, n2) {
  return Number(n1) - Number(n2);
}

function dividir(n1, n2) {
  return Number(n1) / Number(n2);
}

function multiplicar(n1, n2) {
  return Number(n1) * Number(n2);
}

function raiz(n) {
  return Math.sqrt(n);
}

function potencia(base, expo) {
  return Math.pow(base, expo);
}

function aritmetica(n1, n2) {
  return (Number(n1) + Number(n2)) / 2;
}

function harmonica(n1, n2) {
  return 2 / (1 / Number(n1) + 1 / Number(n2))
}

function moda(n1, n2, n3, n4, n5, n6) {
  const moda = [
    Number(n1),
    Number(n2),
    Number(n3),
    Number(n4),
    Number(n5),
    Number(n6)
  ];

  return (moda.sort((a, b) =>
    (moda.filter(v => v === a).length) - (moda.filter(v => v === b).length))
  ).pop();
}

module.exports =
{
  somar,
  subtrair,
  dividir,
  multiplicar,
  raiz,
  potencia,
  aritmetica,
  harmonica,
  moda
}