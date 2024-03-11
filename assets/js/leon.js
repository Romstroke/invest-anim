import Animal from './animal.js';

//CLASE LEON
class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
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

export default Leon;
