//aula 04
const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {
  return nota + 1 >= 10 ? 10: nota + 1;
});

console.log(notasAtualizadas);

//exemplo de reescrita de arrays:
const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

// const nomesPadronizados = nomes.map((nome) => {
//     return nome.toUpperCase();
// })
const nomesPadronizados = nomes.map((nome) => nome.toUpperCase())

console.log(nomesPadronizados);