btnModo.addEventListener('click', function (evento) {

    if (evento.target.tagName === 'BUTTON') {

        modoSeleccionado = evento.target.id;

        console.log("el usuario elegió", modoSeleccionado);
    }
})
