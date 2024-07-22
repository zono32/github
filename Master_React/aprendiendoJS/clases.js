
class Coche {
    constructor(modelo, velocidad, antiguedad) {
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }

    aumentarVelocidad() {
        this.velocidad += 1;
    }
    disminuirVelocidad() {
        this.velocidad -= 1;
    }

}

class Autobus extends Coche{
    constructor(modelo, velocidad, antiguedad) {
        super(modelo, velocidad, antiguedad);
        this.altura = 3;
    }

    mostrarAltura() {
        return "La altura del autobus es: " + this.altura;
    }
}

var coche1 = new Coche("BMW", 200, 2017);
var coche2 = new Coche("FERRARI", 400, 2024);
var coche3 = new Coche("AUDI", 300, 2019);
var coche4 = new Coche("MERCEDES", 250, 2022);
var autobus1 = new Autobus("PEGASUS", 120, 2021);

console.log(autobus1.mostrarAltura());

document.write("<h2>Velocidad: " + coche1.velocidad + " k/h</h2>")
document.write("<h2>Velocidad: " + autobus1.velocidad + " k/h</h2>")
console.log(autobus1);

console.log(coche1);
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
console.log(coche1);


document.write("<h2>Velocidad: "+ coche1.velocidad +" k/h</h2>")