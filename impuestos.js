export function restaBase(montoBrutoAnual, deducciones) {
  return montoBrutoAnual - deducciones;
}

class Impuestos {
  constructor(montoBrutoAnual, deducciones) {
    this.montoBrutoAnual = montoBrutoAnual;
    this.deducciones = deducciones;
  }
  get montoBrutoAnual() {
    return this._montoBrutoAnual;
  }
  set montoBrutoAnual(nuevo_montoBrutoAnual) {
    this._montoBrutoAnual = nuevo_montoBrutoAnual;
  }
  get deducciones() {
    return this._deducciones;
  }
  set deducciones(nuevas_deducciones) {
    this._deducciones = nuevas_deducciones;
  }
}

let impuestos1 = new Impuestos(1500000, 125000);
console.log(
  "El monto bruto anual es de = $" + impuestos1._montoBrutoAnual + ","
);
console.log("El valor de las deducciones es = $" + impuestos1._deducciones);

function restaBase(montoBrutoAnual, deducciones) {
  return montoBrutoAnual - deducciones;
}

//agregando linea para poder subirlo a github
