//FUNCION IIFE 
const animales = (() => {
    // const url = "http://localhost:5500/animales.json";
    const url = './animales.json'; //esta no funciona al correrla con node, la anterior si
    const getData = async () => {
        const res = await fetch(url);
        const datos = await res.json(); // aqui llegan los datos: name, imagen, sonido
        return datos; // retornar datos
    };
    return { getData };
})();

export const datos = await animales.getData() //guardar lo que retorna la función en una constante
