import {sumar,multiplicar} from "./sumador.js";

const first = document.querySelector("#total");
const second = document.querySelector("#precio");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>Precio neto: (" + firstNumber + " * " + secondNumber + ") = " + multiplicar(firstNumber, secondNumber) + "</p>";
});
