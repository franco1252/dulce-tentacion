
/* =================================
   DULCE TENTACIÓN
   CATÁLOGO DE PRODUCTOS
================================= */

// LISTA DE PRODUCTOS


const productos = [

    {
        nombre: "Granizados",
        imagen: "imagenes/granizados.jpg",
        descripcion: "Granizados refrescantes para disfrutar.",
        tamaños: [
            { nombre: "Sin bolitas", precio: 1.00 },
            { nombre: "Explosivo con bolitas", precio: 2.00 }
        ],
        adicionales: []
    },

    {
        nombre: "Capuchino solo",
        imagen: "imagenes/capuchino.jpg",
        descripcion: "Delicioso capuchino caliente.",
        tamaños: [
            { nombre: "Pequeño", precio: 1.00 },
            { nombre: "Grande", precio: 1.50 }
        ],
        adicionales: []
    },

    {
        nombre: "Capuchino con sánduche",
        imagen: "imagenes/capuchino-sanduche.jpg",
        descripcion: "Capuchino acompañado de sánduche preparado en waflera.",
        tamaños: [
            { nombre: "Único", precio: 2.00 }
        ],
        adicionales: []
    },

    {
        nombre: "Guanabanazo",
        imagen: "imagenes/guanabanazo.jpg",
        descripcion: "Refrescante bebida de guanábana.",
        tamaños: [
            { nombre: "Pequeño", precio: 0.50 },
            { nombre: "Grande", precio: 1.00 }
        ],
        adicionales: []
    },

    {
        nombre: "Tatos Locos",
        imagen: "imagenes/tatos-locos.jpg",
        descripcion: "Deliciosos Tatos Locos.",
        tamaños: [
            { nombre: "Pequeño", precio: 0.50 },
            { nombre: "Grande", precio: 1.00 }
        ],
        adicionales: []
    },

    {
        nombre: "Espumilla",
        imagen: "imagenes/espumilla.jpg",
        descripcion: "Espumilla tradicional.",
        tamaños: [
            { nombre: "Pequeña", precio: 0.30 },
            { nombre: "Mediana", precio: 0.75 },
            { nombre: "Grande", precio: 1.00 }
        ],
        adicionales: []
    },

    {
        nombre: "Ensalada de frutas",
        imagen: "imagenes/ensalada-frutas.jpg",
        descripcion: "Ensalada de frutas con espumilla o crema.",
        tamaños: [
            { nombre: "Pequeña", precio: 0.50 },
            { nombre: "Mediana", precio: 0.75 },
            { nombre: "Grande", precio: 1.00 }
        ],
        adicionales: []
    },

    {
        nombre: "Fruta con helado y espumilla",
        imagen: "imagenes/fruta-helado.jpg",
        descripcion: "Fruta acompañada de helado y espumilla.",
        tamaños: [
            { nombre: "Único", precio: 2.00 }
        ],
        adicionales: []
    },

    {
        nombre: "Fruta con yogur y espumilla",
        imagen: "imagenes/fruta-yogur.jpg",
        descripcion: "Fruta acompañada de yogur y espumilla.",
        tamaños: [
            { nombre: "Único", precio: 1.75 }
        ],
        adicionales: []
    },

    {
        nombre: "Waffles",
        imagen: "imagenes/waffles.jpg",
        descripcion: "Deliciosos waffles preparados al momento.",
        tamaños: [
            { nombre: "Simple", precio: 1.50 },
            { nombre: "Completo", precio: 2.00 }
        ],
        adicionales: []
    },

    {
        nombre: "Mini donas",
        imagen: "imagenes/mini-donas.jpg",
        descripcion: "Porción de 6 mini donas.",
        tamaños: [
            { nombre: "6 unidades", precio: 1.00 }
        ],
        adicionales: []
    },

    {
        nombre: "Gelatinas",
        imagen: "imagenes/gelatinas.jpg",
        descripcion: "Gelatinas con espumilla o crema.",
        tamaños: [
            { nombre: "Pequeña", precio: 0.50 },
            { nombre: "Grande", precio: 1.00 }
        ],
        adicionales: []
    },

    {
        nombre: "Flan",
        imagen: "imagenes/flan.jpg",
        descripcion: "Flan con espumilla o crema.",
        tamaños: [
            { nombre: "Pequeño", precio: 0.50 },
            { nombre: "Grande", precio: 1.00 }
        ],
        adicionales: []
    },

    {
        nombre: "Chocobananos",
        imagen: "imagenes/chocobananos.jpg",
        descripcion: "Deliciosos chocobananos.",
        tamaños: [
            { nombre: "Unidad", precio: 0.50 }
        ],
        adicionales: []
    },

    {
        nombre: "Dorilocos",
        imagen: "imagenes/dorilocos.jpg",
        descripcion: "Dorilocos preparados.",
        tamaños: [
            { nombre: "Porción", precio: 1.00 }
        ],
        adicionales: []
    },

    {
        nombre: "Cevichochos",
        imagen: "imagenes/cevichochos.jpg",
        descripcion: "Cevichochos preparados.",
        tamaños: [
            { nombre: "Pequeño", precio: 0.50 },
            { nombre: "Grande", precio: 1.00 }
        ],
        adicionales: []
    },

    {
        nombre: "Cevichifle",
        imagen: "imagenes/cevichifle.jpg",
        descripcion: "Cevichifle preparado.",
        tamaños: [
            { nombre: "Pequeño", precio: 0.50 },
            { nombre: "Grande", precio: 1.00 }
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
