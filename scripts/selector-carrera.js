btnCarreras.addEventListener('click', function (evento) {

    if (evento.target.tagName === 'BUTTON') {

        carreraSeleccionada = evento.target.id;

        console.log("El usuario eligió:", carreraSeleccionada);

        btnModo.classList.remove('oculto');
    }
});