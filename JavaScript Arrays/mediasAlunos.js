//let nota1 = 10
//let nota2 = 7.5
//let nota3 = 8
//let nota4 = 6.5

const notas = [10, 7.5, 8, 6.5]

//let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

//console.log(media)

for(i=0; i < notas.length; i++){
   var somaNotas = notas[i] + notas[i+1];
}

var media = somaNotas / notas.length
console.log(media)