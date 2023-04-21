//Ejercicio 6
// • Vamos a calcular el precio de un carrito de compra. Un carrito de compra tiene una propiedad productosque es una lista de los productos. Cada producto tiene las siguientespropiedades:–nombre: Nombre del producto (Papel higiénico, leche, ...)–unidades: Número de elementos que se van a comprar de dicho producto–precio: Precio unitario del productoAdemás, tiene una propiedad precioTotal donde se va actualizando automáticamente el precio del producto. 
// Crear el código necesario para soportar esta funcionalidad.

const carrito =
{
    productos: [{
        nombre: 'papel higiénico',
        unidades: 4,
        precio: 5
    },
    {
        nombre: 'chocolate',
        unidades: 2,
        precio: 1.5
    }],

    precioTotal() {
        let total = 0;
        for (let producto of this.productos) {
            total += producto.precio * producto.unidades;
        }
        return total;
    }
};

console.log(carrito.precioTotal());