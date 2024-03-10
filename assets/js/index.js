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
        //DESPUES ESTAS PROPIEDADES TIENEN QUE SER PRIVADAS
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

    get Comentarios() {   //tambien tiene un setter para cambiar comentario porque si es privado, necesito el getter también
        return this.comentarios;
    }

    get Sonidos() {
        return this.sonido;
    }

    set Comentarios(nuevo_comentario) {
        this.comentarios = nuevo_comentario;
    }

}

//CLASE LEON
class Leon extends Animal {
    constructor() {
        super()
    }
    //Cada método debe reproducir un audio con el sonido que emite cada animal.
    rugir() {
        // ${audio.setAttribute("src", `"assets/sounds/${animalEncontrado.sonido}"`)}
        const audioElement = `assets/sounds/${this.sonido}`;
        console.log(audioElement)
        audioElement.play();
    }
}

console.log({ Leon })

//FUNCION IIFE (también va en otro modulo)
const animales = (() => {
    // const url = "http://localhost:5500/animales.json";
    const url = './animales.json'; //esta no funciona al correrla con node, la anterior si
    const getData = async () => {
        const res = await fetch(url);
        const datos = await res.json(); // aqui llegan los datos: name, imagen, sonido
        console.log(datos)
        // rellenarImagen(datos)
        return datos; // retornar datos
    };
    return { getData };
})();

const datos = await animales.getData() //guardar lo que retorna la función en una constante
console.log('datos fuera de iife',datos) //tenemos los datos afuera

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
    contenedorImagen.innerHTML = inyectado;

    //usar evento submit de formulario para mandarlo a la tabla
    btnRegistrar.addEventListener('click', () => {
        console.log(animalEncontrado.sonido);
        console.log(animalesInstanciados)
        let contenidoTabla = '';
        // Iterar sobre el array de animales instanciados y generar la salida HTML para cada uno
        animalesInstanciados.forEach(animalInst => {
            contenidoTabla += `
            <div>
                <img src="assets/imgs/${animalInst.imagen}" alt="${animalInst.nombre}" width="150px">
                <button class="btn btn-secondary btn-sm">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
        `;
        });

        tabla.innerHTML = contenidoTabla; // Agregar el contenido generado a la tabla
    });

    //EDAD ANIMAL
    selectEdad.addEventListener('change', () => {
        console.log(selectEdad.value);  //AQUI LLEGA EL VALOR DEL SELECT
    });
    
    //COMENTARIO
    comentario.addEventListener('input', () => {
        console.log(comentario.value); //AQUI LLEGA EL VALOR DEL INPUT
    });

    console.log(typeof (selectAnimal.value)) //AQUI LLEGA EL VALOR DEL SELECT
    instanciarAnimal(selectAnimal.value)
});

// //EDAD ANIMAL
// selectEdad.addEventListener('change', () => {
//     console.log(selectEdad.value);  //AQUI LLEGA EL VALOR DEL SELECT
// });

// //COMENTARIO
// comentario.addEventListener('input', () => {
//     console.log(comentario.value); //AQUI LLEGA EL VALOR DEL INPUT
// });

//tengo que guardar los animales en un array
let animalesInstanciados = [];

//FUNCION QUE INSTANCIA UN ANIMALES SEGUN SELECT
//nombre, edad, img, comentarios, sonido
function instanciarAnimal(valorSelect, edad, img, comentarios, sonido) {
    const nuevoAnimal = new Animal(valorSelect, edad, img, comentarios, sonido);
    //usando metodo push ✔
    animalesInstanciados.push(nuevoAnimal)
    console.log('estoy fuera de los if :', animalesInstanciados)
}



