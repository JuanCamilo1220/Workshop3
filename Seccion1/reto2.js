const contraseña = prompt(`Por favor, ingresa una contraseña. La contraseña debe tener al menos 8 caracteres, un numero, una letra y un caracter especial: ! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " ' ? < > , . | / \\ ~ \``)

if (contraseña.length >= 8){
    if (numero(contraseña)){
        if (letras(contraseña)){
            if (especial(contraseña)){
                alert("Contraseña segura")
            }
            alert("La contraseña debe tener como minimo un carater especial")
        }
        else{
            alert("La contraseña debe tener como minimo una letra")
        }
    }
    else{
        alert("La contraseña debe tener como minimo 1 número")
    }
}
else{
    alert("Ingrese una cantidad adecuada de caracteres")
}
function numero(n){
    let caracter = /\d/
    return caracter.test(n)
}
function letras(l){
    let caracter = /\D/
    return caracter.test(l)
}
function especial(e){
    let caracter = /\W/
    return caracter.test(e)
}