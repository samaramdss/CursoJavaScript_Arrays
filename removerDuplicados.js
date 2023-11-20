const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// na regra do Set não pode haver elementos iguais
const meuSet = new Set(nomes);
//para tirar o "Set" da impressao
const nomesAtualizados = [...meuSet];
// dá pra passar direto:
// meu set = [...new Set (nomes)]
console.log(nomesAtualizados);