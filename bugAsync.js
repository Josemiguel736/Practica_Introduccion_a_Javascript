function obtenerUsuario(id) {
    let usuario;
    setTimeout(() => {
    if (id === 1) {
    usuario = { id: 1, nombre: 'John Doe' };
    }
    console.log(usuario)
    return usuario;
    }, 2000);
   
    }
    const usuario = obtenerUsuario(1);
    