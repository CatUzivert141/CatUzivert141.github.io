const iconoMenu = document.querySelector('#icono-menu'),
      menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {

    // Alternamos estilos para el menú y body
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    // Alternamos su atributo 'src' para el ícono del menú
    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == 'imagenes/x.png'){
        e.target.setAttribute('src','imagenes/burg 2-PhotoRoom.png-PhotoRoom.png');
    }else{
        e.target.setAttribute('src','imagenes/x.png');
    }
});