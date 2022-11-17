window.onload = function() {
    let elCrono = setInterval(crono, 1000);
}


function crono(){

    let laMevaData = new Date();
    let text = document.getElementById('hora');

    /*FUNCIONS QUE UTILITZAREM: 
        getHours() : metode que extreu les hores del objecte date que tinguem.
        getMinutes() : metode que extreu els minuts del objecte date que tinguem.
        getSegons() : metode que extreu els segons del objecte date que tinguem.

            */

    let horas = laMevaData.getHours();
    let minutos = laMevaData.getMinutes();
    let segundos = laMevaData.getSeconds();

    if(horas < 10) {
        horas = "0"+ horas;
    }

    if(minutos < 10) {
        minutos = "0"+ minutos;
    }

    if(segundos < 10) {
        segundos = "0"+ segundos;
    }

    // text.innerHTML = horas + "<b> : </b>" + minutos + "<b> : </b>" + segundos;

    // EXERCISI FER QUE S'IMPRIMESQUI EN FORMAT 12 HORES AM / PM

    if(horas>12){
        horas=horas-12;
            if (horas < 10){
                horas = "0" + horas;
            }
        segundos = segundos + " <i>pm</i>"
    } else{
        segundos = segundos + " <i>am</i>"
    }

    
    text.innerHTML = ( horas + "<b> : </b>" + minutos + "<b> : </b>" + segundos);


    /* FUNCIONES A VER
        setTimeout(funcion, milisegundos) :
            Executara la funcio pasada per parametre en haver transcurrit el temps del paramaetre (ms)  --  Las funciones no llevaran parenetesis (sin parametros)

        setInterval(funcion, milisegundos) :
            La funció del parametre es repetira de forma periodica segons els ms pasats

        clearInterval(funcion_setInterval)
            Aturara la repeticio del setInterval

        clearTimeout()

    */

   
}
