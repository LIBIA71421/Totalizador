function sumar(a, b) {
  return a + b;
}
function multiplicar(a, b) {
  return a * b;
}
function descuento(total) {
  let descuento = 0;
  if (total >= 1000)
  {
    descuento = 0.03;
  }
  return descuento;
}

export {sumar, multiplicar, descuento};
