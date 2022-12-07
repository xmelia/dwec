/* 
RegExp
    SINTAXIS::
/patró/modificadors

*/

let patro = /dwec/i;  // la "i" devuelve numero

let cadena = "Hola requetedwec boquepasa DWEC y tal y talDWec.";

let posicio = cadena.search(patro);

cadena = "xmelia20260@iesjoanramis.org"

patro = /\w/g;  // la "w" busca caracters alfanumerics
patro = /\d/g;  // la "d" busca caracters numerics
patro = /\W/g;  // la "W" busca caracters que no siguin alphanumerics
patro = /\S/g;  // la "S" ho retorna tot menys els espalls

patro = /i+/gi   // te retorna un array amb totes les coincidencies

cadena = "cada 100 o cada 1000 vegades";
patro=/\d{1,3}/g; // busca digits d'entre 1 i 3 digits

let resultat = cadena.match(patro)

console.log(resultat);

let re = new RegExp(/100/, 'g');
console.log(re.exec(cadena));