
// DECLARACIO DE VARIABLES
let elCrono;
let laMevaData = new Date();

// REFERENCIA A OBJECTES DEL HTML
let display = document.getElementById('hora');
let start = document.getElementById("start")
let stop = document.getElementById("stop")

// CRIDAM EL PROGRAMA PER COMENÇAR
resetear();

function crono(){
    
    let horas = laMevaData.getHours();
    let minutos = laMevaData.getMinutes();
    let segundos = laMevaData.getSeconds();
    
    segundos += 1;

    if(segundos == 60){
        segundos = 0;
        minutos += 1;
        laMevaData.setMinutes(minutos)
    }
    
    if(horas < 10) {
        horas = "0"+ horas;
    }

    if(minutos < 10) {
        minutos = "0"+ minutos;
    }

    if(segundos < 10) {
        segundos = "0"+ segundos;
    }    
    
    laMevaData.setSeconds(segundos);
    
    display.innerHTML = ( horas + "<b> : </b>" + minutos + "<b> : </b>" + segundos);
}

// FUNCIONES

function intervalo() {
    elCrono = setInterval(crono, 1000);
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = false;
}

function parar() {
    clearInterval(elCrono);    
    start.disabled = false
    start.innerHTML("Continue")
}

function resetear() {
    laMevaData.setHours(0,0,0,0);
    display.innerHTML = "00 <b>:</b> 00 <b>:</b> 00"

}

// Eventos
start.addEventListener('click', intervalo, false);

stop.addEventListener('click', parar, false);

reset.addEventListener('click', resetear, false);