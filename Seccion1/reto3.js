const correo = prompt("Ingrese un correo electrónico")

if (arroba(correo)){
    if (punto(correo)){
        if (juntos(correp)){
            if (espacio(correo)){
                alert("Correo válido")
            }
            else{
                ("Ingrese un correo válido")
            }
        }
        else{
            ("Ingrese un correo válido")
        }
    }
    else{
        ("Ingrese un correo válido")
    }
}
else{
    alert("Ingrese un correo válido")
}

function arroba(a){
    return a.includes("@")
}

function punto(p){

    if (!arroba) return false;

    let caracter = "."

    return caracter.test(p)
}

function juntos(j){

    if (!arroba) return false;

    let caracter =  /@\./;

    return j.includes()
}

function espacio(e){
    let caracter = " "

    return caracter.test(e)
}