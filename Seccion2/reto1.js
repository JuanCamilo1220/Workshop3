const notas = prompt("Ingresa las notas separadas por una coma ','");

const notasSeparadas = notas.split(",");
const sumaNotasSeparadas = notasSeparadas.map(numero => Number(numero));
const separadas = sumaNotasSeparadas.reduce((acum, i) => acum + i)
const promedio = separadas / sumaNotasSeparadas.length;

console.log(promedio)