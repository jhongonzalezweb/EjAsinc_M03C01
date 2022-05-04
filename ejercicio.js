
class Libro {

    constructor(nombre, autor, editorial, genero) {
        this.nombre = nombre
        this.autor = autor
        this.editorial = editorial
        this.genero = genero
    }

    mostraLibro() {
        //console.log("/////////////////////////////////////\nEste es el nombre: " + this.nombre + "\nEste es el autor: " + this.autor + "\nEste es el editorial: " + this.editorial + "\nEste es el genero: " + this.genero);
    }
}

var vLibro = new Libro("Corriendo", "Carlos", "Editorial Cualquiera", "Terror");
var wLibro = new Libro("Caminando", "Juan", "Editorial Ninguna", "Comedia");
var xLibro = new Libro("Sorpresa", "Miguel", "Editorial Sorpresa", "Suspenso");

vLibro.mostraLibro();
wLibro.mostraLibro();
xLibro.mostraLibro();

let arregloLibro = [];

arregloLibro[0] = vLibro;
arregloLibro[1] = wLibro;
arregloLibro[2] = xLibro;

var reX;
var peT;

function myFunction() {

    peT = document.getElementById("libro").value;
    
    for (var iterador = 0; iterador < arregloLibro.length; iterador++) {
        
        reX = arregloLibro[iterador]["autor"];
    
        if (reX == peT) {
            
            document.getElementById("new").innerHTML = "Si se encuentra: " + peT;

        } else {
            
            document.getElementById("new").innerHTML = "No se encuentra: " + peT;
        }
    }
}
