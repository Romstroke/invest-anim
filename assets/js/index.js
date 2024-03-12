//Utiliza todos los métodos de los Arrays que creas conveniente en las diferentes situaciones con las que te encontrarás en el desarrollo de esta prueba. 

//Utilizar la etiqueta “audio” de HTML. 

// 1. Crear las clases representadas en el diagrama implementando la herencia indicada. (2 Puntos) 
// 5. Dividir el código en módulos  (2 Puntos) 
//MINIMO 2 MODULOS

/////////////SUGERENCIAS
//resolverlo primero con todo publico y con una sola clase hija
// el valor del select me va adecir que clase tengo que instanciar
//realizar una iife con algo que pensemos que debe ser autoejecutable
//CENTRARSE EN LOS PRIMEROS 6 PUNTOS EVALUADOS
//USA METODOS DE ARRAY Y BIEN OSEA NO REEMPLAZAR CON IF 

// Tips Nro1:  el arreglo de objetos que les dan es en este ejemplo su api que deben consumir

//////////OPCIONAL
//validar que haya llenado todos los datos
//rersetear el formulario
//si el boton no reproduce audio
//si no funciona el boton modal no importa

import { datos } from './fetch.js';
import Leon from './leon.js';
import Lobo from './lobo.js';
import Oso from './oso.js';
import Serpiente from './serpiente.js';
import Aguila from './aguila.js';

//TOMAR VALOR DE INPUTS
const selectAnimal = document.getElementById('animal');
const selectEdad = document.getElementById('edad');
const comentario = document.getElementById('comentarios');
const contenedorImagen = document.getElementById('preview'); //AQUI ES DODNE SE IMPRIME LA IMG SEGUN SELECT
const form = document.getElementById('form') // EVENTO SUBMIT
const tabla = document.getElementById('Animales'); //TABLA QUE HAY QUE RELLENAR

//variable global para no repetir el find
let animalEncontrado = null;

//Método addEventListener que detecta evento change, aplicado a selectAnimal, y 2do argumento función para aplicar imagen en preview
selectAnimal.addEventListener('change', () => { //AQUI LLEGA EL VALOR DEL SELECT
    //IMPRESION EN PREVIEW FORM
    //metodo find ✔
    animalEncontrado = datos.animales.find(animal => animal.name === selectAnimal.value); //estoy guardando lo que retorna find, cuando se cumple la condición || undefined
    const inyectado = `url('assets/imgs/${animalEncontrado.imagen}')`
    contenedorImagen.style.backgroundImage = inyectado;
    contenedorImagen.style.backgroundSize = 'cover';
});

//tengo que guardar los animales en un array
let animalesInstanciados = [];

//FUNCION QUE INSTANCIA UN ANIMALES SEGUN SELECT
//nombre, edad, img, comentarios, sonido
function instanciarAnimal(valorSelect, edad, img, comentarios, sonido) {

    let nuevoAnimal = null;

    switch (valorSelect) {
        case 'Leon':
            nuevoAnimal = new Leon(valorSelect, edad, img, comentarios, sonido);
            break;
        case 'Lobo':
            nuevoAnimal = new Lobo(valorSelect, edad, img, comentarios, sonido);
            break;
        case 'Oso':
            nuevoAnimal = new Oso(valorSelect, edad, img, comentarios, sonido);
            break;
        case 'Serpiente':
            nuevoAnimal = new Serpiente(valorSelect, edad, img, comentarios, sonido);
            break;
        case 'Aguila':
            nuevoAnimal = new Aguila(valorSelect, edad, img, comentarios, sonido);
            break;
    }
    //metodo push ✔
    animalesInstanciados.push(nuevoAnimal)
}

//Evento submit formulario para agregar animal a tabla
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!animalEncontrado) { //selectAnimal.value === 'Seleccione un animal' //animalEncontrado === null
        alert('Debes seleccionar un animal');
        return;
    }
    if (selectEdad.value === 'Seleccione un rango de años') {
        alert('Debes seleccionar una edad');
        return;
    }
    if (comentario.value === '') {
        alert('Debes escribir un comentario');
        return;
    }

    //Instanciar animal luego de validar que estén rellenados los campos
    instanciarAnimal(selectAnimal.value, selectEdad.value, animalEncontrado.imagen, comentario.value, animalEncontrado.sonido) //AQUI SE LE PASAN LOS VALORES A LA FUNCION QUE GUARDA LOS ANIMALES instanciarAnimal
    //animalEncontrado.imagen despues en la tabla es img porquev ahi se esta refiriendo a la clase,aqui arriba al json
    let contenidoTabla = '';
    // Iterar animalesInstanciados e imprimir en tabla
    //metodo forEach ✔
    animalesInstanciados.forEach((animalInst, index) => {
        console.log(animalesInstanciados)
        contenidoTabla += `
        <div class="pe-1">
            <div class="pb-1">
                <img src="assets/imgs/${animalInst.img}" class="rounded" alt="${animalInst.nombre}" width="100px" height="110px">
            </div>    
             <button id="clickSonido_${index}" type="button" class="btn btn-secondary w-100">
                <img src="assets/imgs/audio.svg" width="20px" height="20px">
            </button>
        </div>
    `;


    });

    function reproducirSonido(sonido) {
        const audio = document.getElementById('player');
        audio.setAttribute("src", `./assets/sounds/${sonido}`)
        audio.play();
    }

    tabla.innerHTML = contenidoTabla;
    
    // Agregar evento de clic a cada botón
    animalesInstanciados.forEach((animalInst, index) => {
        console.log(animalInst.sonidos)
        const botonSonido = document.getElementById(`clickSonido_${index}`);
        botonSonido.addEventListener('click', () => {
            // alert('click');
            reproducirSonido(animalInst.sonidos);
        });
    });


    //Limpiar formulario
    animalEncontrado = null; // para hacer el siguiente submit
    // selectAnimal.value, selectEdad.value, animalEncontrado.imagen, comentario.value
    selectAnimal.value = 'Seleccione un animal';
    selectEdad.value = 'Seleccione un rango de años';
    comentario.value = "";
    const inyectado = "url('assets/imgs/lion.svg')";
    contenedorImagen.style.backgroundImage = inyectado;
    contenedorImagen.style.backgroundSize = 'contain';
});





