let unCliente = {
    nombre: 'Jander Clander',
    'dirección del cliente' : 'c/ Desconocida nPI',      // SE PUEDEN PONER LAS CLAVES TANTO CON COMILLAS, COMO SIN. 
    '+-+-+-+-+-+-': 'wtf',

    pagos: {
        tipo: 'Visa',
        'número de la tarjeta' : 1234567890,
        'fecha de caducidad de la tarjeta' : 'nunca',
    }
};

// muestraCamposYValores(unCliente);

// SACAR VALORES CONCRETOS DE UN OBJETO
// console.log(unCliente['dirección del cliente']);

let estudiante = {
    id: 2,
    nombre: 'Pep',
    diHola: () => 'Hola!'
}
// Assignar sobre la marcha nuevas claves
estudiante.diAdios = () => 'Adeu!';

// console.log(estudiante.id);
// console.log(estudiante.nombre);
// console.log(estudiante.diHola());
// console.log(estudiante.diAdios());

let factura = {
    descripcion: 'Factura de ejemplo',
    precio: 100.00,
    iva: 21.00,
    subtotal: ()=> this.precio,
    total: function() {
        console.log(this.precio);
        return this.precio + ((this.precio * this.iva) / 100);
    }
}

console.log(factura);
console.log(factura.total());


// FUNCIONES AUXILIARES
// Si un objeto tiene otros objetos dentro no va a mostrar sus valores/claves, usaremos recursividad para conseguirlo

function muestraCamposYValores(miObjeto) {
    for (campo in miObjeto){
        if(typeof(miObjeto[campo]) == 'object'){
            muestraCamposYValores(miObjeto[campo]);
        }else{
            console.log(campo + ": "  + miObjeto[campo]);
        }
    }
}