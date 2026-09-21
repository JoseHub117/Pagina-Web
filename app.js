console .log("Los lunes son aburridos pero los viernes son emocionantes");
let mensaje ="Ya vamonos";
mensaje = "Cristian ponte las pilas";
console.log(mensaje);
const JOSE = "Jose es un buen amigo";
console.log(JOSE);
const FORMULARIO = document.getElementById("formulario");
const divResultado = document.getElementById("resultado"); 
FORMULARIO.addEventListener("submit", function(evento){
    evento.preventDefault();
    const datos = new FormData(FORMULARIO);
    const informacion = Object.fromEntries(datos.entries());
    divResultado.innerHTML = `
    <p>Nombre: ${informacion.nombre}</p>
    <p>Edad: ${informacion.edad}</p>
    <p>Video favorito: ${informacion.musica}</p>
    `;
});