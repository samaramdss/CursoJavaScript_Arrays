//Aula 04
const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;
//Callback
notas.forEach(function(notas, indice){
   somaDasNotas += notas;
   console.log(indice);
})

const media = somaDasNotas/notas.length;

console.log(`A média das notas é ${media}`);

