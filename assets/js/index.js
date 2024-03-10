// alert('hola')

// En esta prueba deberás crear una aplicación web que permita agregar en una tabla los animales en investigación, utilizando el paradigma POO para la creación de las instancias que representen los diferentes animales con sus atributos y métodos. 

//El formulario debe cumplir la función de registrar a los animales en la tabla de la izquierda.  

// Deberás programar la funcionalidad para agregar al animal y mostrarlo en la tabla de animales en investigación, junto con un botón que reproduzca el audio correspondiente al sonido que emite el animal agregado. 

// Al dar click en las imágenes de los animales debe aparecer una ventana modal con el detalle registrado del animal. 

//Cada método debe reproducir un audio con el sonido que emite cada animal. 

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

// import Animal from './animal.js';

//CLASE ANIMAL PADRE
class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        this.nombre = nombre;
        this.edad = edad;
        this.img = img;
        this.comentarios = comentarios;
        this.sonido = sonido; //acceder al clickear cada sonido
    }

    get Nombre() {
        return this.nombre;
    }

    get Edad() {
        return this.edad;
    }

    get Img() {
        return this.img;
    }

    get Comentarios() {   //tambien tiene un setter para cambiar comentario
        return this.comentarios;
    }

    get Sonidos() {
        return this.sonido;
    }

}

//sin default tendris que importarlo con el {nombrearchivo todos los nombres} y es porque si no, toma el default
// export {}

//CLASE LEON
class Leon extends Animal {
    constructor() {
        super()
    }
}

console.log({ Leon })
// console.log([...Leon])

//usar evento submit de formulario para mandarlo a la tabla

//importar al tiro aqui 

//FUNCION IIFE
const animales = (() => {
    // const url = "http://localhost:5500/animales.json"; //si es de github hay que ponerle el enlace de github dijo luxo
    const url = 'assets/js/animales.json'; //esta no funciona al correrla con node, la 83 si
    const getData = async () => {
        const res = await fetch(url);
        const datos = await res.json();
        console.log(datos)
        // rellenarImagen(datos)
        return datos;
    };
    return { getData };
})();

const datos = await animales.getData()

console.log(await animales.getData())
console.log(animales.getData)
console.log(datos)

//DEL JSON LLEGA NAME, IMAGEN, SONIDO

// console.log({animales})
//   export default animales;

//la funcion ife tambien seria un modulo
//dividir

//   const url = 'assets/js/animales.json';

//TOMAR VALOR DE INPUTS

const selectAnimal = document.getElementById('animal');
const selectEdad = document.getElementById('edad');
const comentario = document.getElementById('comentarios');
const contenedorImagen = document.getElementById('preview'); //AQUI ES DODNE SE IMPRIME LA IMG SEGUN SELECT
const btnRegistrar = document.getElementById('btnRegistrar') // EVENTO CLICK
const tabla = document.getElementById('Animales'); //TABLA QUE HAY QUE RELLENAR
const audio = document.getElementById('player');
console.log(audio)

selectAnimal.addEventListener('change', () => {
    console.log(selectAnimal.value) //AQUI LLEGA EL VALOR DEL SELECT
    console.log(datos)
    //IMPRESION EN PREVIEW FORM
    const animalEncontrado = datos.animales.find(animal => animal.name === selectAnimal.value);
    console.log(animalEncontrado);
    const inyectado = `<img src="assets/imgs/${animalEncontrado.imagen}" width="150px" >`
    contenedorImagen.innerHTML= inyectado;

    btnRegistrar.addEventListener('click', () =>{
    console.log(animalEncontrado.sonido);

        tabla.innerHTML= `
        ${inyectado}
        ${audio.setAttribute("src",`"assets/sounds/${animalEncontrado.sonido}"`)}
        `
    });



    console.log(typeof (selectAnimal.value)) //AQUI LLEGA EL VALOR DEL SELECT
    instanciarAnimal(selectAnimal.value)
});

selectEdad.addEventListener('change', () => {
    console.log(selectEdad.value);  //AQUI LLEGA EL VALOR DEL SELECT
});

comentario.addEventListener('input', () => {
    console.log(comentario.value); //AQUI LLEGA EL VALOR DEL INPUT
});




//tengo que guardar los animales en un array

//FUNCION QUE INSTANCIA UN ANIMALES SEGUN SELECT
function instanciarAnimal(valorSelect) {
    let animal = new Animal(valorSelect);
    console.log('estoy fuera de los if :', animal)
}

//RELLENANDO CONTENEDOR IMAGEN

// function rellenarImagen(contenedorImagen,animales){

//     if(selectAnimal.value = 'Leon'){ //por qué no tiene tilde en consola y en select si?
//        contenedorImagen.innerHTML = animales[0].imagen
//     }
// }

// rellenarImagen()

// function rellenarImagen(contenedorImagen, animales, nombreAnimalSeleccionado) {
//     const animalSeleccionado = datos.animales.find(animal => animal.name === nombreAnimalSeleccionado);
//     console.log(animalSeleccionado)
//     if (animalSeleccionado) {
//         contenedorImagen.innerHTML = `<img src="${animalSeleccionado.imagen}" alt="${nombreAnimalSeleccionado}">`;
//     } else {
//         contenedorImagen.innerHTML = "Animal no encontrado";
//     }
// }

