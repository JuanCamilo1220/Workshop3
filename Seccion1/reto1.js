const usuarios = {}

let cont = 0;

let contA = 0;

while (true){
    const nomUsuario = prompt("Ingresa tu primer nombre y apellido").toLowerCase()

    const nombre = nomUsuario.split(' ');
    const pNombre = nombre[0];
    const pApelldio = nombre[1];
    const nom3Letra = pNombre.slice(0, 3);
    const ape3Letra = pApelldio.slice(0, 3);
    const usuario = nom3Letra.concat(ape3Letra)
    let verificacion = verificar(usuario)



    function verificar(nuevoUsuario){
        const user = Object.keys(usuarios)
        const filtro = user.filter((usuario) => usuario.startsWith(nuevoUsuario));
        return filtro.length
    }

    if(verificar == true){
        function usRepetidos(){
            cont ++;
            let usCont = usuario + cont;
            if (usCont == usuario || usuario){
                contA ++;
                usuario = usCont + contA;
                Object.assign(usuarios,{
                    [usuario] : correo
                })
                return
            }
            usRepetidos()
        }
        usRepetidos()
    }
    else{
        Object.assign(usuarios,{
            [usuario] : correo
        })
    }
    console.log(usuarios)
}