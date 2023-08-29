import {sumar,multiplicar, descuento, impuesto, calcularPrecioTotal} from "./sumador.js";

const first = document.querySelector("#total");
const second = document.querySelector("#precio");
const form = document.querySelector("#totalizador-form");
const precioNeto = document.querySelector("#resultado-div");
const desc = document.querySelector("#descuento-div");
const impuestoDiv = document.querySelector("#impuesto-div");
const TOTALDiv = document.querySelector("#TOTAL-div");
var estado = document.getElementById("estado")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  let total = multiplicar(firstNumber, secondNumber);
  let porcentajeDescuento = descuento(total);
  let totalDescuento = multiplicar(porcentajeDescuento, total).toFixed(2);

  let imp = impuesto(estado.value);
  let totalImpuesto =  multiplicar(imp,total).toFixed(2);
  let totalPrecio =  calcularPrecioTotal(total, totalDescuento, totalImpuesto);

  precioNeto.innerHTML = "<p>Precio neto: (" + firstNumber + " * %" + secondNumber + ") = $" + total + "</p>";
  desc.innerHTML = "<p>Descuento: %" + multiplicar(porcentajeDescuento,100).toFixed(2) + " = $" + totalDescuento + "</p>";
  impuestoDiv.innerHTML = "<p>Impuesto para "+estado.value+" es %"+ multiplicar(imp,100).toFixed(2) +" = $" +totalImpuesto+"</p>";
  TOTALDiv.innerHTML = "<p>PRECIO total "+ totalPrecio +"</p>";
});
