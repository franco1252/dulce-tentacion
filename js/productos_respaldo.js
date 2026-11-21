
/* =================================
   DULCE TENTACIÓN
   CATÁLOGO DE PRODUCTOS
================================= */

// LISTA DE PRODUCTOS

const productos = [

    {
        nombre: "Cheesecake de fresa",
        imagen: "imagenes/cheesecake.jpg",
        descripcion: "Delicioso cheesecake con fresas frescas.",

        tamaños: [
            {
                nombre: "Porción",
                precio: 3.50
            }
        ],

        adicionales: []
    },

    {
        nombre: "Brownie de chocolate",
        imagen: "imagenes/brownie.jpg",
        descripcion: "Suave brownie con intenso sabor a chocolate.",

        tamaños: [
            {
                nombre: "Pequeño",
                precio: 2.50
            },
            {
                nombre: "Grande",
                precio: 3.50
            },

            {
                nombre: "Familiar",
                precio: 5.00
},
        ],

        adicionales: [
            {
                nombre: "Chocolate extra",
                precio: 0.50
            }
        ]
    },

    {
        nombre: "Pastel de vainilla",
        imagen: "imagenes/pastel.jpg",
        descripcion: "Esponjoso pastel con crema de vainilla.",

        tamaños: [
            {
                nombre: "Porción",
                precio: 4.00
            }
        ],

        adicionales: []
    }

];


// FUNCIÓN PARA MOSTRAR LOS PRODUCTOS

function mostrarProductos() {

    const contenedor = document.getElementById("contenedor-productos");

    contenedor.innerHTML = "";

    productos.forEach(producto => {

        const tarjeta = document.createElement("div");

        tarjeta.classList.add("tarjeta-producto");

        let preciosHTML = "";

        producto.tamaños.forEach(tamaño => {

            preciosHTML += `
                <div class="opcion-precio">
                    <span>${tamaño.nombre}</span>
                    <strong>$${tamaño.precio.toFixed(2)}</strong>
                </div>
            `;

        });

        let adicionalesHTML = "";

        if (producto.adicionales.length > 0) {

            adicionalesHTML = `
                <div class="adicionales-producto">

                    <h4>Adicionales</h4>

                    ${producto.adicionales.map(adicional => `
                        <div class="opcion-adicional">
                            <span>${adicional.nombre}</span>
                            <strong>+$${adicional.precio.toFixed(2)}</strong>
                        </div>
                    `).join("")}

                </div>
            `;

        }

        tarjeta.innerHTML = `

            <img src="${producto.imagen}" alt="${producto.nombre}">

            <div class="informacion-producto">

                <h3>${producto.nombre}</h3>

                <p>${producto.descripcion}</p>

                <div class="precios-producto">
                    ${preciosHTML}
                </div>

                ${adicionalesHTML}

            </div>

        `;

        contenedor.appendChild(tarjeta);

    });

}


// INICIAR CATÁLOGO

mostrarProductos();
