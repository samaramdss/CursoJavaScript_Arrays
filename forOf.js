//aula 03
const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

for (let elemento of notas) {
  somaDasNotas += notas;
  console.log(somaDasNotas);
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);
