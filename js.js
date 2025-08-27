function Producto(nombre, precio, cantidad){
    this.nombre = nombre
    this.precio = precio
    this.cantidad = cantidad
}

document.querySelectorAll(".agregar").forEach(boton =>{
    boton.addEventListener('click', () => {
        const tarjeta = boton.closest(".tarjeta");
        
        const nombre = tarjeta.querySelector(".nombre").textContent;
        const precio = parseFloat(tarjeta.querySelector(".precio").textContent);
        const cantidad = parseFloat(tarjeta.querySelector(".cantidad").value);

        const producto = new Producto(nombre, precio, cantidad);

        console.log(producto)
    })
})
