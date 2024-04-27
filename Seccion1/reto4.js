const eventos = []

let i = true;

let id = 0

while (i){
    const opcion = prompt(`Ingresa una opción:
                        \n 1. Ingresar un nuevo evento.
                        \n 2. Ver eventos.
                        \n 3. Buscar un evento por nombre
                        \n 4. Actualizar un evento.
                        \n 5. Eliminar evento.
                        \n 6. Salir`)
    switch (opcion){
        case "1":
            const eventName = prompt("Ingresa el nombre del evento")
            const eventDate = prompt("Ingresa la fecha del evento")
            const eventDescription = prompt("Ingresa una descripcion del evento")
            const event = Object.assign({} = {
                id: id++,
                eventName,
                eventDate,
                eventDescription
            })
            eventos.push(event)
            break;
        case "2":
            eventos.forEach((event, index) =>{
                console.log(`event ${index + 1}: ${eventName}-${eventDate}-${eventDescription}`);
            })
            break;
        case "3":
            const buscar = prompt("Ingresa el evento que quieras buscar")
            const eventoPorNombre = eventos.filter(event => event === buscar)
            if (eventoPorNombre === 0){
                alert("No se encontro el evento")
                break;
            }
            eventoPorNombre.forEach((event) => {
                console.log(`event: ${eventName}-${eventDate}-${eventDescription}`);

            })
            break;
        case "4":
            evenetos.forEach((event, index) => {
                console.log(`event ${index + 1}: ${eventName}-${eventDate}-${eventDescription}`);
            })

            const idDelEvento = prompt("Ingresa el id del evento que deseas cambiar");

            const newEventName = prompt("Ingresa el nuevo nombre del evento");
            const newEventDate = prompt("Ingresa la nueva fecha del evento");
            const newEventDescription = prompt("Ingresa la nueva descripcion del evento");

            if (newEventName){
                eventos[idDelEvento - 1].eventName = newEventName;
            }
            if (newEventDate){
                eventos[idDelEvento - 1].eventDate = newEventDate;
            }
            if (newEventDescription){
                eventos[idDelEvento - 1].eventDescription = newEventDescription;
            }
        case "5":
            eventos.forEach((event, index) => {
                console.log(`event ${index - 1}: ${eventName}-${eventDate}-${eventDescription}`);
            })

            const eventoABorrar = ("Ingrese el id del evento que desea borrar");
            eventos.splice(eventoABorrar -1, 1);

        case "6":
            i = false
            break;
        break;


    }
}