/*
    FUNCIONES MATEMATICAS

// console.log(Math.E);
// console.log(Math.LN10);

console.log(Math.abs(-2)); // Siempre devuelve valor absoluto, (numero en postivo).
console.log(Math.sqrt(49)); // Raiz cuadrada
console.log(Math.pow(3, 2)); // Potencias
console.log(Math.round(Math.random()*100)+1); // Random

*/

/* 
let datos = [13, -5, -9, 1, 8, 2];

//Funcion FILTER
function natural(dato) {
    return dato >= 0;
}

console.log(datos);
console.log(datos.filter(natural)); // Solo sacara los valores que cumplan los requisitos en "Natural()"


// Función FIND
console.log(datos.find(natural)); // Devolvera el primer valor que coincida con lo que buscamos


//Funcion ForEach()
let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
let texto = document.getElementById('texto');

function miTexto(item, index) {
    texto.innerHTML += "Index [" + (index+1) +"]: " + item + "<br>";
    // texto.innerHTML += "Index [" + (index+1) +"]: " + item.charAt(0).toUpperCase()+item.slice(1) + "<br>";
}

dias.forEach(miTexto);


// Funcion Includes()
console.log(datos.includes(-5));
console.log(dias.includes("Saturday"));
console.log(dias.includes("sabado"));


// IndexOf() && LastIndexOf()
console.log(datos.indexOf(13));
console.log(datos.lastIndexOf(-5));
console.log(datos.lastIndexOf(-5));


// Funcion pop()
let ultimo = datos.pop(); // Elimina el ultimo valor del array i devuelve el valor
console.log(ultimo);
console.log(datos);


// Funcion Push()
datos.push(87);
console.log(datos); // Añade un valor al array


// shift()
let primero = datos.shift();
console.log(datos);
console.log(primero); // Elimina el primer valor del array 


// slice()
let datos2 = datos.slice(2,4);
console.log("Datos: " + datos);
console.log("Datos2: " + datos2); // Imprimeix sols una part del array / string 


// sort()
console.log(datos.sort());
console.log(dias.sort()); // Ordena array
 */





/*    22 - 11 - 2022     */

let text = "Boquepasa requete 123";

console.log(text.lastIndexOf('que'));
console.log(text.search('que'));
console.log(text.slice(text.indexOf(' '), text.length));
console.log(text.substr(4,10)); // a partir de la posicio 4 imprimeix 10 caracters
console.log(text.replaceAll("que", "pepe")); // replace - replaceAll : substitueix 

console.log(text.toLowerCase()); 
console.log(text.toUpperCase()); 

prova = ["Un", 'Dos', 'tres']
console.log(text.concat('123','ajdn', ...prova)); // Concatenar

console.log(text.split(' ')); // Separa, te lo convierte en array quitando los separadores
