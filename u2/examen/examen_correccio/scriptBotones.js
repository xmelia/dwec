
let numero = "";

function capturaNumero() {
    numero += this.value;
}

// enerem els events click pels botons numerics
//Tots ells cridaran a la mateixa funcio

document.getElementById("ceroId").addEventListener("click", capturaNumero, false);
document.getElementById("unId").addEventListener("click", capturaNumero, false);
document.getElementById("dosId").addEventListener("click", capturaNumero, false);
document.getElementById("tresId").addEventListener("click", capturaNumero, false);
document.getElementById("quatreId").addEventListener("click", capturaNumero, false);
document.getElementById("cincId").addEventListener("click", capturaNumero, false);
document.getElementById("sisId").addEventListener("click", capturaNumero, false);
document.getElementById("setId").addEventListener("click", capturaNumero, false);
document.getElementById("vuitId").addEventListener("click", capturaNumero, false);
document.getElementById("nouId").addEventListener("click", capturaNumero, false);

//Generem l'event click pel botó "mostrar"
//Cridara a la funció nifAmbLletra
document.getElementById("mostrar").addEventListener("click")

function nifAmbLletra() {
    
    //Declaracio de variables
    let nif = "" //per a recollir i guardar el nif
    let resto = "" // Per a guardar el resultat del calcul del modul nif%23
    //Array con letras del nif
    let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
    let lletraNIF = ""; // Lletra obtinguda 
}