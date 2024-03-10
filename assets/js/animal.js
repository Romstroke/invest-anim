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

export default Animal;