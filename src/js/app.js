//Variables
const body = document.querySelector("body");

//--Variable de alertas dom
const alerta = document.createElement("DIV");
//Alerta que no se ingreso algo en el formulario
const alertaMensaje = document.querySelector('.alerta-mensaje')

const formulario = document.querySelector("#formulario");
const inputs = document.querySelectorAll('#formulario input[type="text"]', 'input[type="email"]', 'input[type="email"]', 'input[type="date"]');

//Objeto del formulario
const objFormulario = {};

//Eventos
validarFormulario();
function validarFormulario() {
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        enviarFormulario();
    });

}

//funciones


//Enviar formulario
function enviarFormulario() {
  
    inputs.forEach((input) => {
        
        if (input.value === "") {
          
            const textAlerta = document.createElement('P');
            textAlerta.textContent = `Debes llenar el apartado de ${input.name}`;

            //colocarlos en el html
            alertaMensaje.appendChild(textAlerta);
            //Agregamos clases a parrafos y al div alerta
            textAlerta.classList.add("alerta-parrafo");
    
            setTimeout(() => {
                textAlerta.remove();
            }, 3000);
            return;
        }
    });
    agregarInfoObjeto();

}


///Hacer que salte el mensaje con el resultado
function agregarInfoObjeto() {
 
    inputs.forEach((input) => {

    });

}

/*//Limpiar html
function limpiarHtml() {
    let textoAlerta = alertaMensaje.firstElementChild;

    while(textoAlerta) {
        alertaMensaje.removeChild(textoAlerta);
        textoAlerta = alertaMensaje.firstElementChild;
    }
}*/



