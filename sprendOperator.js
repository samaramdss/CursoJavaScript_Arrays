//copiar sem alterar o original ou estar interligado

const notas = [7, 7, 8, 9];

//... é o comando de sprend operator dá pra usar pra adicionar arquivos já na cópia
const novasNotas = [...notas,5];

novasNotas.push(10);

console.log(`as notas são ${novasNotas}`);
console.log(`as notas originais são ${notas}`);


