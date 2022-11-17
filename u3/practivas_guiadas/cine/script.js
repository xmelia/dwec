const contenidor = document.querySelector('.contenidor'); // Recupera cualquier elemento de mi pagina (listas, parrafos, id's, clases,...) - SOLO COJE UNO, EL PRIMERO.
const seients = document.querySelectorAll('.fila .seient:not(.ocupat)'); // Nos devuelve todas las coincidencias de lo que busquemos.
const contador = document.getElementById('contador');
const total = document.getElementById('total');
const peliculaSelect = document.getElementById('pelicula');
let preuDelTicket = +peliculaSelect.value;  // Si pones un + delante pasa a ser numero

ompleUI();

// Actualitza els totals de asients i de preus
function actualitzaSeleccioSeients(){
    const seientsSeleccionats = document.querySelectorAll('.fila .seient.seleccionat');

    // const seientsIndex = [...seientsSeleccionats].map(function(seient){
    //     return[...seients].indexOf(seient);
    // });

    const seientsIndex = [...seientsSeleccionats].map((seient) => [...seients].indexOf(seient));
    
    localStorage.setItem('seientsSeleccionats', JSON.stringify(seientsIndex));
    

    const contadorSeientsSeleccionats = seientsSeleccionats.length;
    contador.innerText = contadorSeientsSeleccionats;
    total.innerText = contadorSeientsSeleccionats * preuDelTicket;

}

// Guarda a localStorage l'index i el preu de la pelicula seleccionada
function guardaInfoPelicula(indexPelicula, preuPelicula){
    localStorage.setItem('indexPeliculaSeleccionada', indexPelicula);
    localStorage.setItem('preuPeliculaSeleccionada', preuPelicula);
}

// Recupera info del Local Storage i omple la UI
function ompleUI() {
    const seientsSeleccionats = JSON.parse(localStorage.getItem('seientsSeleccionats'));

    if (seientsSeleccionats !== null && seientsSeleccionats.length > 0) {
        seients.forEach((seient, index) => {
            // console.log('seient: ' + seient);
            // console.log('index: ' + index);

            if(seientsSeleccionats.indexOf(index) > -1){
                seient.classList.add('seleccionat');
            }
        }) ;
    }

    const indexPeliculaSeleccionada = localStorage.getItem('indexPeliculaSeleccionada');
    
    if(indexPeliculaSeleccionada !== null){
        peliculaSelect.selectedIndex = indexPeliculaSeleccionada;
    }

    const preuPeliculaSeleccionada = localStorage.getItem('preuPeliculaSeleccionada');
    
    if(preuPeliculaSeleccionada !== null){
        preuDelTicket = +preuPeliculaSeleccionada;
    }
}

// EVENTOS
contenidor.addEventListener('click', (e) => {
    if(e.target.classList.contains('seient') && !e.target.classList.contains('ocupat')) {
        e.target.classList.toggle('seleccionat');

        actualitzaSeleccioSeients();
    };
});


peliculaSelect.addEventListener('change', (e) => {
    preuDelTicket = +e.target.value;

    guardaInfoPelicula(e.target.selectedIndex, e.target.value);

    actualitzaSeleccioSeients();

} )