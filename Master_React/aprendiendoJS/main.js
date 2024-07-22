
var nombre = " Joaquin Lafuente";
var altura = 1.85;

var concatenacion = nombre + " " + altura;
/*
var datos = document.getElementById("datos");

datos.innerHTML = `<h2>Soy la caja de datos</h2>
<h3>Mi nombre es ${nombre}</h3>
<h3> Mi altura es de: ${altura} cm.</h3>`;

if (altura > 1.90) {
    datos.innerHTML += "Eres una persona alta"
} else if ((altura < 1.90 ) && (altura > 1.70)) {
    datos.innerHTML += "Eres una persona con una estatura media"
} else {
    datos.innerHTML += "Eres una persona bajita"
};

for (var i = 2000; i <= 2020; i++){
    datos.innerHTML += "Estamos en el año " + i + "<br>";
}

*/

//funciones
function MuestraMiNombre(nombre, altura) {
     
    var misDatos = `<h2>Soy la caja de datos</h2>
    <h3>Mi nombre es ${nombre}</h3>
    <h3> Mi altura es de: ${altura} cm.</h3>`;
    return misDatos;

    }

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("kinso", 1.78)
}

imprimir()

var nombres = ['kinso', 'ana', 'zoe', 'noel']

alert(nombres[0]);

document.write('<h2>Listado de nombres </h2>');
for (i = 0; i < nombres.length; i++){
    document.write(nombres[i] + '<br>');
}

nombres.forEach((nombre) => {
    document.write(nombre + '<br>');
 });


//Objetos
var coche = {
    modelo: 'Mercedes clase A',
    maxima: 500,
    antiguedad: 2020,
    mostrarDatos() {
        console.log(this.modelo,this.maxima,this.antiguedad)
    },
    propiedad1: "valor aleatorio"
};

document.write("<h2>" + coche.modelo + "</h2>");
coche.mostrarDatos();
console.log(coche);

//Promesas

var saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludo = "hola muy buenas a todos!!!";
        saludo = false;

        if (saludo) {
            resolve(saludo);
        } else {
            reject('No hay saludo disponible');
        }
    }, 2000)
})
saludar.then(resultado => {
    alert(resultado);
})
    .catch(err => {
        alert(err);
    });

