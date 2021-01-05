var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var nombreLara;
nombreLara = 'Lara';
var Animal = /** @class */ (function () {
    function Animal(raza, especie, peso) {
        this.raza = raza;
        this.especie = especie;
        this.peso = peso;
    }
    Animal.prototype.getRaza = function () {
        return this.raza;
    };
    Animal.prototype.setRaza = function (raza) {
        this.raza = raza;
    };
    Animal.prototype.getEspecie = function () {
        return this.especie;
    };
    Animal.prototype.setEspecie = function (especie) {
        this.especie = especie;
    };
    Animal.prototype.getPeso = function () {
        return this.peso;
    };
    Animal.prototype.setPeso = function (peso) {
        this.peso = peso;
    };
    return Animal;
}());
var animal1 = new Animal('Siamés', 'Gato', 4);
var MisMascotas = /** @class */ (function (_super) {
    __extends(MisMascotas, _super);
    function MisMascotas(raza, especie, peso, nombre) {
        var _this = _super.call(this, raza, especie, peso) || this;
        _this.nombre = nombre;
        return _this;
    }
    MisMascotas.prototype.getRaza = function () {
        return _super.prototype.getRaza.call(this);
    };
    MisMascotas.prototype.getEspecie = function () {
        return _super.prototype.getEspecie.call(this);
    };
    MisMascotas.prototype.getPeso = function () {
        return _super.prototype.getPeso.call(this);
    };
    MisMascotas.prototype.getNombre = function () {
        return this.nombre;
    };
    return MisMascotas;
}(Animal));
var mascota1 = new MisMascotas('Siamés', 'Gato', 6, 'Felipe');
console.log(mascota1.getNombre);
