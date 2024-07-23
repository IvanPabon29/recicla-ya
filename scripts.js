//Codigo

//Seleccionar elementos

const botonElem = document.getElementById("cambiar-cita");
const fraseElem = document.getElementById("cita");
const autorElem = document.getElementById("autor");

//Funcion que genera un numero el cual sirve como indice en el ARRAY
function generarEnteroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min) + min);
};

//se crea una funcion para poder cambiar la cita
function cambiarCita (){
    let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
    fraseElem.innerText = `"${citas[indiceAleatorio].frase}"`
    autorElem.innerText = citas[indiceAleatorio].autor;
}
cambiarCita();

//Agregar evento al boton.
botonElem.addEventListener("click", cambiarCita);
