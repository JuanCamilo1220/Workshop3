let i = true;

productosDisponibles = []

const malasPalabras = ["puta", "hijueputa", "carechimba", "puto", "gonorrea"]

const blacklist = []

let id = 0;

while(i){
    const opcion = prompt(`Ingrese una opción:
         \n 1. Crear un producto.
         \n 2. Duplicar un producto.
         \n 3. Ver prodcutos.
         \n 4. Actualizar un producto.
         \n 5. Eliminar un producto.
         \n 6. Verificar si exite un producto.
         \n 7. Venta de productos.
         \n 8. Compra de productos.
         \n 9. Calcular el valor de todo el inventario.
         \n 10. Ordenar productos.
         \n 11. Identificar malas palabras.
         \n 12. Reporte general de productos.
         \n 13. Salir.`);
        
    switch(opcion){

        case "1":
            const nombre = prompt("Ingrese el nombre del producto");
            const precio = number(prompt("Ingresa el precio del producto"))
            const cantidad = number(prompt("Ingresa la cantidad del producto"))
            const descripcion = prompt("Ingresa la descripcion del producto")
            const producto = Object.assign({} = {
                id: id++,
                nombre,
                precio,
                cantidad,
                descripcion, 
            })
            productosDisponibles.push(producto);

        case "2":
            productosDisponibles.forEach((producto, index) =>{
                console.log(`prodcuto ${index + 1}: ${nombre}-${precio}-${cantidad}-${descripcion}`)
            })

            const idProductoDuplicar = prompt("Ingresa el id del producto que quieres duplicar");
            let productoDuplicado = productosDisponibles[idProductoDuplicar-1];
            let cont = 0
            productosDisponibles[Element =>{
                if (Element.nombre.startswith(productoDuplicado.nom)){
                    cont ++
                }
            }]
            let nombreProductoDuplicado;
            if  (cont > 1){
                nombreProductoDuplicado = productoDuplicado.nom + ` copy`+(cont-1);
            }
            else{
                nombreProductoDuplicado = productoDuplicado.nom + ` copy`;
            }
            const nuevoProductoDuplicado = Object.assign({},{
                id: id++,
                nombre:productoDuplicado.nombre,
                precio:productoDuplicado.precio,
                descripcion:productoDuplicado.descripcion,
            })
            productosDisponibles.push(nuevoProductoDuplicado);

        case "3":
            const opcion2 = prompt(`Si desea buscar un producto por nombre ingrese '1'.
                                 \n Si desea buscar un producto por precio ingrese '2'.`)
            switch (opcion2) {
                case "1":
                    const nombreDelProducto = prompt("Ingrese el nombre del producto que desea buscar")
                    const productosPorNombre = productosDisponibles.filter(mismoProducto => producto.nombre === nombreDelProducto)
                    productosPorNombre.forEach((mismoProducto) =>{
                        console.log(`prodcuto: ${nombre}-${precio}-${cantidad}-${descripcion}`)
                    })

                case "2":
                    const precioDelProducto = prompt("Ingrese el precio del producto que desea buscar");
                    const productosPorprecio = productosDisponibles.filter(mismoProducto =>producto.precio === precioDelProducto);
                    productosPorprecio.forEach((mismoProducto) =>{
                        console.log(`prodcuto: ${nombre}-${precio}-${cantidad}-${descripcion}`)
                    })
                }
        case "4":
            productosDisponibles.forEach((producto, index) =>{
                console.log(`prodcuto ${index + 1}: ${nombre}-${precio}-${cantidad}-${descripcion}`)
            })

            const idProductoActualizar = prompt("Ingrese el id del producto que desea actualizar");

            const actualizarNombre = prompt("Ingrese el nuevo nombre del producto");
            const actualizarPrecio = prompt("Ingrese el nuevo precio del producto"); 
            const actualizarCantidad = prompt("Ingrese la nueva cantida del producto");
            const actualizarDescripcion = prompt("Ingrese la nueva descripcion del producto");

            if (actualizarNombre){
                productosDisponibles[idProductoActualizar -1].nombre = actualizarNombre;
            }
            if (actualizarPrecio){
                productosDisponibles[idProductoActualizar -1].precio = actualizarPrecio;
            }
            if (actualizarCantidad){
                productosDisponibles[idProductoActualizar -1].cantidad = actualizarCantidad;
            }
            if (actualizarDescripcion){
                productosDisponibles[idProductoActualizar -1].descripcion = actualizarDescripcion;
            }
            break;
        case "5":
            productosDisponibles.forEach((producto, index) =>{
                console.log(`prodcuto ${index + 1}: ${nombre}-${precio}-${cantidad}-${descripcion}`)
            })

            const productoEliminar = prompt("Ingrese el id del producto que quiere eliminar");
            productosDisponibles.splice(productoEliminar -1, 1);
        case "6":
            const verNomProducto = prompt("ingresa el   nombre del producto que quieres verfificar");
            const verificarProducto = productosDisponibles.find(producto => producto.nombre === verNomProducto);

            if (!verificarProducto){
                alert("El producto no ha sido encontrado");
                break;
            }
            if(verificarProducto.cantidad === 0){
                alert("No hay existencia del producto");
                break;
            }
            console.log(`producto: ${verificarProducto.nombre}-${verificarProducto.precio}-${verificarProducto.cantidad}-${verificarProducto.descripcion}`)
        case "7":
            productosDisponibles.forEach((producto, index) =>{
                console.log(`prodcuto ${index + 1}: ${nombre}-${precio}-${cantidad}-${descripcion}`)
            })

            const idVenderProducto = prompt("ingrese el id producto que quiere vender");
            const cantidadVenderProducto = prompt("Ingrese la cantidad de producto a vender");
            const venderProducto = productosDisponibles.forEach((element) => {
                if(element.id === idVenderProducto){
                    element.cantidad = element.cantidad - cantidadVenderProducto;
                }              
            })
            break;
            
            break;
        case "8":
            productosDisponibles.forEach((producto, index) =>{
                console.log(`prodcuto ${index + 1}: ${nombre}-${precio}-${cantidad}-${descripcion}`)
            })

            const idComprarProducto = prompt("Ingrese el id del producto que compró")
            const cantidadComprarProducto = prompt("ingrese la cantidad de producto que compró")

            const comprarProducto = productosDisponibles.forEach((element) => {
                if(element.id === idComprarProducto){
                    element.cantidad = element.cantidad + cantidadComprarProducto;
                }
            })
            break;
            
            break;
        case "9":
            productosDisponibles.forEach((producto, index) =>{
                console.log(`prodcuto ${index + 1}: ${nombre}-${precio}-${cantidad}-${descripcion}`)
            })

            const totalProductos = productosDisponibles.reduce((accumulator, element) => accumulator + element.precio);
            console.log(`El total de los productos es ${totalProductos}`)
            break;

        case "10":
            let q = true;
            while(q){
                const ordenar = prompt(`Ingresa el como quieres ver ordenados los productos:
                                    \n 1. Ordenar productos por nombre.
                                    \n 2. Ordenar productos por precio.
                                    \n 3. Ordenar por cantidad.
                                    \n 4. Salir`)
                switch(ordenar){
                    case "1":
                        productosDisponibles.sort((a, b) => a.nombre.localecCompare(b.nombre));
                        productosDisponibles.forEach(producto =>{
                            console.log(`prodcuto: ${nombre}-${precio}-${cantidad}-${descripcion}`)
                        })
                    case "2":
                        productosDisponibles.sort((a, b) => a.precio - b.precio);
                        productosDisponibles.forEach(producto =>{
                            console.log(`prodcuto: ${nombre}-${precio}-${cantidad}-${descripcion}`)
                        })
                    case "3":
                        productosDisponibles.sort((a, b) => a.cantidad - b.cantidad);
                        productosDisponibles.forEach(producto =>{
                            console.log(`prodcuto: ${nombre}-${precio}-${cantidad}-${descripcion}`)
                        })
                    case "4":
                        q = false;  
                }
            }
            break;
        case "11":

            productosDisponibles.forEach((element) =>{
                const siProdcutosMalasPalabras = producto.descripcion.split(' ');
                malasPalabras.forEach((mala) => {
                    if (siProdcutosMalasPalabras === mala){
                        blacklist.push(element)
                    }
                })
            })
            break;

        case "12":
            
            const cantidadProductos = productosDisponibles.length;
            const productosMasCaros = productosDisponibles.filter(producto => producto.precio === Math.max(...productosDisponibles.map(producto => producto.precio)));
            const productosMasbaratos = productosDisponibles.filter(producto => producto.precio === Math.min(...productosDisponibles.map(producto => producto.precio)));
            const productosEnLaBlacklist = blacklist.length;
            const productosMasCantidad = productosDisponibles.filter(producto => producto.cantidad === Math.max(...productosDisponibles.map(producto => producto.cantidad)));
            const productosMenosCantidad = productosDisponibles.filter(producto => producto.cantidad === Math.min(...productosDisponibles.map(producto => producto.cantidad)));

            alert(`Reporte general de los productos:
                \n Cantidad de productos ${cantidadProductos}
                \n El valor total de los productos es ${totalProductos}
                \n La cantidad de productos mas caros es ${productosMasCaros} y la cantidad de productos mas baratos es ${productosMasbaratos}
                \n La cantidad de productos con mas cantidad es ${productosMasCantidad} y  la cantidad de productos con menos cantidad es ${productosMenosCantidad}
                \n La cantidad de productos con posibles malas palabras son ${productosEnLaBlacklist}`
            );
            break;
        case "13":
            i = false;
            break;
}}  