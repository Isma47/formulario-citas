//Variables
const body = document.querySelector("body");

//--Variable de alertas dom
const alerta = document.createElement("DIV");

const formulario = document.querySelector("#formulario");
const inputs = document.querySelectorAll("#formulario input");

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
            //Alerta que no se ingreso algo en el formulario
            const alertaMensaje = document.querySelector('.alerta-mensaje')
            const textAlerta = document.createElement('P');
            textAlerta.textContent = `Debes llenar el apartado de ${input.name}`;

            //colocarlos en el html
            alertaMensaje.appendChild(textAlerta);
            //Agregamos clases a parrafos y al div alerta
            textAlerta.classList.add("alerta-parrafo");

            setTimeout(() => {
                textAlerta.remove();
            }, 3000);
        }
        //Agregar al objeto
    });
    agregarInfoObjeto();
}


///Hacer que salte el mensaje con el resultado
function agregarInfoObjeto() {

    formulario.addEventListener('submit', ()=>{
        inputs.forEach((input) => {
            objFormulario[input.name] = input.value;
            if (!input.value === ""){
                console.log('sada')
            }
        });
    })

    const objetoValorJSON = JSON.stringify(objFormulario);
    localStorage.setItem("valores", objetoValorJSON);

}

//Mensaje con los datos de citas que sale al enviar el formulario
