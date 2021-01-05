type nombre = string;
let nombreLara: nombre;
nombreLara = 'Lara';

class Animal {
    private raza: string;
    private especie: string;
    private peso: number;

    constructor(raza: string, especie: string, peso: number) {
        this.raza = raza;
        this.especie = especie;
        this.peso = peso;
    }

    getRaza() {
        return this.raza;
    }

    setRaza(raza: string) {
        this.raza = raza;
    }

    getEspecie() {
        return this.especie;
    }

    setEspecie(especie: string) {
        this.especie = especie;
    }

    getPeso() {
        return this.peso;
    }

    setPeso(peso: number) {
        this.peso = peso;
    }
}

const animal1: Animal = new Animal('Siamés', 'Gato', 4);

class MisMascotas extends Animal {
    private nombre: string;

    constructor(raza: string, especie: string, peso: number, nombre: string) {
        super(raza, especie, peso);
        this.nombre = nombre;
    }

    getRaza() {
        return super.getRaza();
    }

    getEspecie() {
        return super.getEspecie();
    }

    getPeso() {
        return super.getPeso();
    }

    getNombre() {
        return this.nombre;
    }
}

const mascota1: MisMascotas = new MisMascotas('Siamés', 'Gato', 6, 'Felipe');

console.log(mascota1.getNombre.toString());