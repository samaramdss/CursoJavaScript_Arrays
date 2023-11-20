//Aula 01
const notas = [10, 6.5, 8, 7.5];
//adicionando um elemento
notas.push(9);
console.log(notas);

const media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / notas.length;

console.log(`a média das notas é: ${media}`);

//deletando um elemento
notas.pop();
console.log(notas);