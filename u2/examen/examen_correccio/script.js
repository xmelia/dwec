 // DECLARACIO DE VARIABLES
 let nif = "";  // Per a recollir i guardar el nif
 let resto = ""; // Per a guardar el resultat del calcul del modul nif%23

 // ARRAY AMB LES LLETRES DEL NIF
 let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
 let lletraNIF = ""; //LLETRA OBTINGUDA DES DE L'ALGORISME
 let esCorrecte = false; //Boolea per controlar el bucle while
 let continuar = true;
 let respecta = "";

 while (continuar){

     while (!esCorrecte) {
         
         // Anem a pensar que tot surtira be
         esCorrecte = true;

         // Capturem el numero de NIF introduit per l'usuari
         nif = prompt("Introdueix el teu número de NIF, sense la lletra, per favor.")

         if(isNaN(nif)) { // isNan() -- BOOLEA QUE RETORNA SI LA VARIABLE ES UN NOMBRE O NO.

             // Si la cadena introduida no es un numero, mostrarem un missatge d'averetencia
             console.log("Introdueixi un valor numeric entre 0 i 99999999");

             // El bucle continuara 
             esCorrecte = false;

         }else {

             // Pasem la cadena a numero
             nif = parseInt(nif)

             // Si el numero no respecta els limits, mostrara una advertencia per LOG
             if (nif < 0 || nif > 99999999) {
                 console.log("Introdueixi un valor correcte: entre 0 i 99999999");

                 // El bucle continuarà 
                 esCorrecte = false

             }
         }
     }

 }
 
 // Calculem el módul de la divisió entre nif i 23
 resto = nif%23;

 // Aquest resto ens dona la posició del array a consultar
 lletraNIF = letras[resto];
 console.log(nif + lletraNIF)

 reposta = prompt("Continuar? (s/n)");

 continuar = respota.toLowerCase() == "s" ? true : false;
 esCorrecte = false