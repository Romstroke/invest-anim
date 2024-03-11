import Animal from './animal.js';

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    //Cada método debe reproducir un audio con el sonido que emite cada animal.
    aullar() {
    }
}

export default Lobo;