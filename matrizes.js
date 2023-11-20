// Aula 02
const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias]; // listas podem conter outras listas, tendo mais de uma dimensão

// console.log(listaDeAlunosEMedias);

// console.log(`Aluno da posição 2 é: ${listaDeAlunosEMedias[0][1]} `);
// console.log(`E a média dela é: ${listaDeAlunosEMedias[1][2]}`);

function exibirNomeENota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)){
        // const alunos = listaDeAlunosEMedias[0];
        // const medias = listaDeAlunosEMedias[1]; mas fica melhor assim:
        
        const [alunos, medias] = listaDeAlunosEMedias;
        console.log(`Aluno ${aluno} está cadastrado.`);
        const indice = alunos.indexOf(aluno);
        //console.log(indice);
        const mediaAluno = medias[indice];
        console.log(`A média do aluno é ${mediaAluno}`);
        }
    else{
        console.log("Aluno não encontrado.");
    }
}

exibirNomeENota("Juliana");