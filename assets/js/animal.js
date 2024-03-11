//CLASE ANIMAL PADRE
class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido; //acceder al clickear cada sonido
    }

    //Poner los getter en mayúscula ralentiza el proceso de acceder al objeto
    get nombre() {
        return this._nombre;
    }

    get edad() {
        return this._edad;
    }

    get img() {
        return this._img;
    }

    get comentarios() {   //tambien tiene un setter para cambiar comentario porque si es privado, necesito el getter también
        return this._comentarios;
    }

    get sonidos() {
        return this._sonido;
    }

    set comentarios(nuevo_comentario) {
        this._comentarios = nuevo_comentario;
    }

    // rugir() {
    //     audio.setAttribute("src", `"assets/sounds/${animalInst._sonido}"`)
    //     // const audioElement = `assets/sounds/${this.sonido}`;
    //     // console.log(audioElement)
    //     audioElement.play();
    // }

}

export default Animal;