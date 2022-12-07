const comprova = document.getElementById("apagaelmovil");
const missatge = document.getElementById("missatge");
const aqui = document.getElementById("aqui");

comprova.addEventListener("click", ()=> {
    missatge.innerHTML = "";    // Cada vegada que clickam es resetetja el missatge d'error
    let x = aqui.ariaValue;     // Captura el que tenim escrit al input

    try {
        
        if(x== "") throw "esta buit!";

        if(isNaN(x)) throw "no es un numero";

        if(x < 5) throw "no arriba";

        if(x > 10) throw "t'has passat";

    } catch (error) {
        missatge.innerHTML = "Hi ha hagut un error, " + error;
    }

}, false)