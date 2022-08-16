const notas = [10,9,7,4.5,6]
notas.pop() //tira o último elemento
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(`A média é ${media}`)