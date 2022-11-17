// DIFERENCIAS ENTRE LET & CONST

/* const nombres = [];
console.log(nombres);
nombres.push("Jander");
console.log(nombres[0]);
console.log(nombres);
const ultimoNombre = nombres.pop();
console.log(ultimoNombre);
console.log(nombres);
const otrosNombres = []; 
// otrosNombres = nombres; */ 


// DESECTRURACIÓN
/* Asignamos constantes a elementos del array */
const personaje = ['Sam', 'Gimli', 'Frodo', 'Legolas', 'Pippin'];
const [leal, heroe, , , pillo] = personaje;

/* console.log(personaje);
console.log(leal);
console.log(pillo); */

const masPersonaje = {
    nombre: 'Gandalf',
    apodo: 'El gris',
    edad: 1024,
    armas: ['Glamdring', 'Magia']
}

const {nombre, aapodo, armas} = masPersonaje;
console.log(nombre);
console.log(armas);

const [espada, poder] = armas;
console.log(espada); 

const nombrePersonaje = 'Legolas';
const razaPersonaje = 'Elfo';
const armasPersonaje = [{tipo:'arco', cantidad:1}, {tipo:'flecha', cantidad: 10}];

const requetePersonaje = {
    nombre: nombrePersonaje,
    raza: razaPersonaje,
    armas : armasPersonaje,
    edad: 666
}

const requetePersonaje2 = {
    nombrePersonaje,
    razaPersonaje,
    armasPersonaje,
    edad : 666
}

console.log(requetePersonaje2);


