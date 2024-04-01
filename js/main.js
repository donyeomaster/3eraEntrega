// efecto maquina de escribir
const typed = new Typed('.typed', {
    // strings: [
    //     '<i class="profesion">ICT Teacher</i>', 
    //     '<i class="profesion">ICT Teacher</i>',
    //     '<i class="profesion">Web Developer</i>', 
    //     '<i class="profesion">Graphic Designer</i>'],

    stringsElement: '#cadenas-texto', //id del elemento que contiene la cadena
    typeSpeed: 75, // velocidad en milisegundos para poner una letra
    startDelay: 500, // Tiempo de retraso para iniciar la animacion
    backSpeed: 75, // velocidad en milisegundos para borrar una letra
    smartBackspace: true, // eliminar solamente  las palabras que sean nuevas en un string.
    suffle: false, //Altera el orden de las frases
    backDelay: 2000, //Tiempo de espera
    loop: true, // si queremos que se repita
    loopCount: true, // cuantas veces se va a repetir
    showCursor: true, // mostrar el cursor palpitando
    cursorChar: '|', //caracter para el cursor
    contenType: 'html', //trabajar con html
});