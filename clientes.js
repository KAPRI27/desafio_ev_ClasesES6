/*
export function cliente1 (nombre, impuesto){
    return cliente1;
}
*/

//CREANDO OBJETO CLIENTE, SUS PARAMETROS (NOMBRE, IMPUESTO) Y METODOS GETTER Y SETTER PARA MANIPULARLOS

class Cliente {
  constructor(nombre, impuesto) {
    this.nombre = nombre;
    this.impuesto = impuesto;
  }
  //CREANDO MÉTODOS PARA OBTENER Y/O MODIFICAR LOS PARÁMETROS
  get nombre() {
    return this._nombre;
  }
  set nombre(nuevo_nombre) {
    this._nombre = nuevo_nombre;
  }
  get impuesto() {
    return this._impuesto;
  }
  set impuesto(nuevo_impuesto) {
    this._impuesto = nuevo_impuesto;
  }
  calcularImpuestos(restaBase, impuesto) {
    this._restaBase = restaBase;
    this._impuesto = nuevo_impuesto;

    return (restaBase / 100) * impuesto;
  }
}
console.log(cliente1.calcularImpuestos());

//INSTANCIANDO EL PRIMER OBJETO DE "CLIENTE"
let cliente1 = new Cliente("Patricia", 21);
console.log("El nombre del cliente es " + cliente1._nombre + ",");
console.log("y la tasa de impuesto es del " + cliente1._impuesto + "%");
