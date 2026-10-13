let arregloIzquierdo = [];
let arregloDerecho = [];

// Agrega una edad al arreglo izquierdo.
function agregarEdad() {
    let numEntero = recuperarInt("edad");

    // Compruebo que se haya ingresado una edad válida.
    if (Number.isNaN(numEntero) || numEntero < 0) {
        alert("Ingrese una edad válida.");
        return;
    }

    arregloIzquierdo.push(numEntero);
    document.getElementById("edad").value = "";

    pintarArregloIzquierda();
}

// Pinta las edades del arreglo izquierdo en la tabla.
function pintarArregloIzquierda() {
    let cmpTabla = document.getElementById("tablaIzquierda");
    let contenidoTabla = "";

    for (let i = 0; i < arregloIzquierdo.length; i++) {
        contenidoTabla += "<tr>";

        contenidoTabla += "<td>" + arregloIzquierdo[i] + "</td>";

        contenidoTabla += "<td>";
        contenidoTabla += "<button class='btn-eliminar' onclick='eliminarIzquierdo(" + i + ")'>Eliminar</button>";
        contenidoTabla += "</td>";

        contenidoTabla += "<td>";
        contenidoTabla += "<button class='btn-mover' onclick='moverHaciaDerecha(" + i + ")'>➜</button>";
        contenidoTabla += "</td>";

        contenidoTabla += "</tr>";
    }

    cmpTabla.innerHTML = contenidoTabla;
}

// Elimina una edad del arreglo izquierdo usando su índice.
function eliminarIzquierdo(indice) {
    arregloIzquierdo.splice(indice, 1);
    pintarArregloIzquierda();
}

// Pinta las edades del arreglo derecho en la tabla.
function pintarArregloDerecha() {
    let cmpTabla = document.getElementById("tablaDerecha");
    let contenidoTabla = "";

    for (let i = 0; i < arregloDerecho.length; i++) {
        contenidoTabla += "<tr>";

        contenidoTabla += "<td>";
        contenidoTabla += "<button class='btn-mover' onclick='moverHaciaIzquierda(" + i + ")'>⬅</button>";
        contenidoTabla += "</td>";

        contenidoTabla += "<td>" + arregloDerecho[i] + "</td>";

        contenidoTabla += "<td>";
        contenidoTabla += "<button class='btn-eliminar' onclick='eliminarDerecho(" + i + ")'>Eliminar</button>";
        contenidoTabla += "</td>";

        contenidoTabla += "</tr>";
    }

    cmpTabla.innerHTML = contenidoTabla;
}

// Elimina una edad del arreglo derecho usando su índice.
function eliminarDerecho(indice) {
    arregloDerecho.splice(indice, 1);
    pintarArregloDerecha();
}

// Mueve una edad del arreglo izquierdo al derecho.
function moverHaciaDerecha(indice) {
    let edad = arregloIzquierdo[indice];

    arregloDerecho.push(edad);
    arregloIzquierdo.splice(indice, 1);

    pintarArregloIzquierda();
    pintarArregloDerecha();
}

// Mueve una edad del arreglo derecho al izquierdo.
function moverHaciaIzquierda(indice) {
    let edad = arregloDerecho[indice];

    arregloIzquierdo.push(edad);
    arregloDerecho.splice(indice, 1);

    pintarArregloIzquierda();
    pintarArregloDerecha();
}
