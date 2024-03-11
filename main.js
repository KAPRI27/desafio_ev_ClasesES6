//AQUÍ TENGO QUE IMPORTAR AMBOS MÓDULOS (CLIENTES E IMPUESTOS) PARA PODER HACER EL CALCULO DE LOS IMPUESTOS

import { restaBase } from "./impuestos.js";
/*
import { cliente1 } from './clientes.js';
*/

//CREO UNA CLASE PARA EL CALCULO DE IMPUESTOS
const restaBase = (montoBrutoAnual - declaraciones) / 100;
const calcularImpuestos = restaBase * impuestos;

console.log(calcularImpuestos);
