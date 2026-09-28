/*### Sección JavaScript
> - **Enlazar** JavaScript con HTML.
> - **Modificar** el primer "¡Hola Mundo!" para que diga "Adiós" con JS.
> - **Cambiar** el color de fuente de un encabezado a naranja con JS.
> - **Añadir** un encabezado en el que se pueda hacer clic y que cambie el color de fuente a marrón con JS.*/

document.getElementById('primer-h1').textContent = "Adios";
document.getElementById('encabezado-naranja').style.color = "orange";

const boton = document.getElementById('boton');
const encabezadoClick = document.getElementById('encabezado-click');

boton.addEventListener('click', function(){
    encabezadoClick.style.color = "brown";
});