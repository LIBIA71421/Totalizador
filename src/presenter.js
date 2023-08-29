import {sumar,multiplicar, descuento} from "./sumador.js";

const first = document.querySelector("#total");
const second = document.querySelector("#precio");
const form = document.querySelector("#totalizador-form");
const precioNeto = document.querySelector("#resultado-div");
const desc = document.querySelector("#descuento-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  let total = multiplicar(firstNumber, secondNumber);
  let porcentajeDescuento = descuento(total);
  let totalDescuento = multiplicar(porcentajeDescuento, total).toFixed(2);

  precioNeto.innerHTML = "<p>Precio neto: (" + firstNumber + " * " + secondNumber + ") = " + total + "</p>";
  desc.innerHTML = "<p>Descuento: " + multiplicar(porcentajeDescuento,100).toFixed(2) + "% = " + totalDescuento + "</p>";
});
