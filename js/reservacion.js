const inputNombre = document.getElementById("cliente_nombre");
const inputApellido = document.getElementById("cliente_apellido");

const inputFecha = document.getElementById("cliente_fecha");
const inputHora = document.getElementById("cliente_Hora");
const inputMesa = document.getElementById("cliente_Mesa");


const buttonAgregarPersona = document.getElementById("idBtnAgregar");
const buttonMostrarReservacion = document.getElementById("idBtnMostrar");

const notification = document.getElementById("idNotificacion");

//const toast = new bootstrap.Toast(notification);
//const mensaje = document.getElementById("idMensaje");

//const idModal = document.getElementById("idModal");

let arrayReservacion = [];

const limpiarForm = () => {
    inputNombre.value = "";
    inputApellido.value = "";
    inputFecha.value = "";
    inputHora.value = "";
    inputMesa.value = "";
    
    inputNombre.focus();
}

const addPersona = function() {
    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    let fecha = inputFecha.value;
    let hora = inputHora.value;
    let mesa = inputMesa.value;
    

    //let patronCarnet = /[a-z]{2}[0-9]{3}$/;
    let patronNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    //let patronDUI = /^\d{8}-\d{1}$/
    //let patronNIT =  /^\d{4}-\d{6}-\d{3}-\d{1}$/
    let patronFecha = /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/
    //let patronCorreo = /^\w+@(\w+\.)+\w{2,4}$/;
    let patronmesa  = /^[0-9]{1,3}$/;

    if(patronNombre.test(nombre) && patronNombre.test(apellido) &&  patronFecha.test(fecha)  && patronmesa.test(mesa) && hora != ""){

        arrayReservacion.push(
            new Array(nombre,apellido,fecha,hora,mesa)
        );
        alert("Se ha registrado una nueva reservacion");


        limpiarForm();
    }else{
        alert("Error en los campos");
    }
}

function imprimirFilas() {
    let $fila = "";
    let contador = 1;

    arrayReservacion.forEach((element)=> {
        $fila += `<tr>
        <td scope="row" class="text-center fw-bold">${contador}</td>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td>${element[2]}</td>
        <td>${element[3]}</td>
        <td>${element[4]}</td>
        <td>
        <button id="idBtnEliminar${contador}" type="button" class"btn btn-primary" alt="Editar" onclick="Eliminar(${contador})">
        <i class="bi bi-trash3-fill">Eliminar</i>
        </button>
        </td>
        </tr>`;
        contador++;
    })
    return $fila;
}

function Eliminar(num) {
    //alert("Hola a precionado la fina" + num)
    arrayReservacion.splice(num-1,1)
    imprimirReservacion();

}

const imprimirReservacion = () => {
    let $table = `<div class="table-responsive">
    <table class="table table-striped table-hover table-bordered">
    <tr>
    <th scope="col" class="text-center" style"width:5%">#</th>
    <th scope="col" class="text-center" style"width:15%">Nombre</th>
    <th scope="col" class="text-center" style"width:15%">Apellido</th>
    <th scope="col" class="text-center" style"width:10%">Fecha</th>
    <th scope="col" class="text-center" style"width:10%">Hora</th>
    <th scope="col" class="text-center" style"width:10%">Personas por mesa</th>
    <th scope="col" class="text-center" style"width:10%">Opcion</th>
    </tr>
    ${imprimirFilas()}
    </table>
    </div>`;
    document.getElementById("idTablaReservacion").innerHTML = $table;
};



buttonAgregarPersona.onclick = () => {
    addPersona();
}

buttonMostrarReservacion.onclick = () => {
    imprimirReservacion();
}