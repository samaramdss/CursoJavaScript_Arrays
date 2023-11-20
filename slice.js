// //Aula 02
// const alunos = [
//   "João",
//   "Juliana",
//   "Ana",
//   "Caio",
//   "Lara",
//   "Marjorie",
//   "Guilherme",
//   "Aline",
//   "Fabiana",
//   "Andre",
//   "Carlos",
//   "Paulo",
//   "Bia",
//   "Vivian",
//   "Isabela",
//   "Vinícius",
//   "Renan",
//   "Renata",
//   "Daisy",
//   "Camilo",
// ];

// //          onde começa, onde termina a fatia
// const sala1 = alunos.slice(0, alunos.length/2); //o 10 não é incluso, o último índice não está incluído
// const sala2 = alunos.slice(alunos.length/2) // não precisa informar o último indice se for pegar até o final do array

// console.log(`Sala 1: ${sala1}`);
// console.log(`Sala 2: ${sala2}`);

// ATUALIZANDO UMA LISTA
const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
//   indice inicial, quantos elementos remover   
nomes.splice(1, 2);
nomes.push("Rodrigo");

//dá pra usar só slice (1,2, "Rodrigo")

console.log(nomes);
