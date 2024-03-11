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

//TOMAR VALOR DE INPUTS
const selectAnimal = document.getElementById('animal');
const selectEdad = document.getElementById('edad');
const comentario = document.getElementById('comentarios');
const contenedorImagen = document.getElementById('preview'); //AQUI ES DODNE SE IMPRIME LA IMG SEGUN SELECT
const form = document.getElementById('form') // EVENTO SUBMIT
const tabla = document.getElementById('Animales'); //TABLA QUE HAY QUE RELLENAR
const audio = document.getElementById('player');
console.log(audio)

//variable global para no repetir el find
let animalEncontrado = null;

//Método addEventListener que detecta evento change, aplicado a selectAnimal, y 2do argumento función para aplicar imagen en preview
selectAnimal.addEventListener('change', () => {
    console.log(selectAnimal.value) //AQUI LLEGA EL VALOR DEL SELECT
    // console.log(nombreIngresado)
    console.log(datos)
    //IMPRESION EN PREVIEW FORM
    animalEncontrado = datos.animales.find(animal => animal.name === selectAnimal.value); //estoy guardando lo que retorna find, cuando se cumple la condición || undefined
    console.log(animalEncontrado);
    const inyectado = `url('assets/imgs/${animalEncontrado.imagen}')`
    contenedorImagen.style.backgroundImage = inyectado;
    contenedorImagen.style.backgroundSize = 'cover';
});

//tengo que guardar los animales en un array
let animalesInstanciados = [];
console.log(animalesInstanciados)

//FUNCION QUE INSTANCIA UN ANIMALES SEGUN SELECT
//nombre, edad, img, comentarios, sonido
function instanciarAnimal(valorSelect, edad, img, comentarios, sonido) {

    let nuevoAnimal = null;
    // const nuevoAnimal = new Animal(valorSelect, edad, img, comentarios, sonido);

    switch (valorSelect) {
        case 'Leon':
            nuevoAnimal = new Leon(valorSelect, edad, img, comentarios, sonido);
            break;
    }
    //usando metodo push ✔
    animalesInstanciados.push(nuevoAnimal)
    console.log('estoy fuera de los if :', animalesInstanciados)
}

//Evento submit formulario para agregar animal a tabla
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(selectAnimal.value)
    console.log(selectEdad.value)
    if (animalEncontrado === null) { //este deberia agarrarme de el animal encontrado o del valor quwe tiene el form por defetcto, q es mas correcto¡?¡¡?¡?¡?¡?¡??
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

    console.log(animalEncontrado);
    console.log(typeof (selectAnimal.value)) //AQUI LLEGA EL VALOR DEL SELECT

    instanciarAnimal(selectAnimal.value, selectEdad.value, animalEncontrado.imagen, comentario.value, animalEncontrado.sonido) //AQUI SE LE PASAN LOS VALORES A LA FUNCION QUE GUARDA LOS ANIMALES instanciarAnimal
    //animalEncontrado.imagen despues en la tabla es img porquev ahi se esta refiriendo a la clase,aqui arriba al json
    console.log(animalesInstanciados)
    let contenidoTabla = '';
    // Iterar sobre el array de animales instanciados y generar la salida HTML para cada uno
    animalesInstanciados.forEach(animalInst => {
        console.log(animalInst)
        contenidoTabla += `
        <div class="pe-1">
            <div class="pb-1">
                <img src="assets/imgs/${animalInst.img}" class="rounded" alt="${animalInst.nombre}" width="100px" height="110px">
            </div>    
            <button type="button" class="btn btn-secondary w-100" onclick="this.rugir('${animalInst.sonido}')">
                <img src="assets/imgs/audio.svg" width="20px" height="20px">
            </button>
        </div>
    `;
    });

    tabla.innerHTML = contenidoTabla; // Agregar el contenido generado a la tabla
    animalEncontrado = null; // para hacer el siguiente submit
    // selectAnimal.value, selectEdad.value, animalEncontrado.imagen, comentario.value, animalEncontrado.sonido
    selectAnimal.value = 'Seleccione un animal';
    selectEdad.value = 'Seleccione un rango de años';
    comentario.value = ""; 
    const inyectado = "url('assets/imgs/lion.svg')";
    contenedorImagen.style.backgroundImage = inyectado;
    contenedorImagen.style.backgroundSize = 'contain';
});





