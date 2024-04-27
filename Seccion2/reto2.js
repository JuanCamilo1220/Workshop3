const calificaciones = prompt("Ingresa las calificaciones separadas por comas ','.");


const nuevasCalificaciones = calificaciones.split(",");
const calificacionesSeparadas = nuevasCalificaciones.map(numero => Number(numero));
const sumaCalificaciones = calificacionesSeparadas.reduce((acum, i) => acum + i);
const promedio = sumaCalificaciones / calificacionesSeparadas.length;
const maximo = Math.max(...calificacionesSeparadas);
const minimo = Math.min(...calificacionesSeparadas);
const aprobados = calificacionesSeparadas.filter(numero => numero >= 70);
const reprobados = calificacionesSeparadas.filter(numero => numero < 70);
const ordenadas = calificacionesSeparadas.sort((a , b) => b - a);


console.log(`El promedio de calificaiones es: ${promedio}, La calificación mayor es: ${maximo}, y la menor es: ${minimo}, ${aprobados.length} aprobaron y ${reprobados.length}, las calificaciones ordenadas de mayor a menos: ${ordenadas.join(",")} `);