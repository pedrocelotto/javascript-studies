const listaDeChamadas = ['Pedro','Rafaella','Caique','Maria']

//listaDeChamadas.splice(0,2,'João')
listaDeChamadas.splice(1,0,'Julia')

//1 param - onde vai iniciar a atualização
//2 param - quantos vao ser removidos
//3 param - qual vai ser inserido

console.log(`Lista de chamada ${listaDeChamadas}`)