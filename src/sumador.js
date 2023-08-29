function sumar(a, b) {
  return a + b;
}
function multiplicar(a, b) {
  return a * b;
}
function descuento(total) {
  let descuento = 0;
  if (total >= 1000 && total <= 3000)
  {
    descuento = 0.03;
  }
  else if (total >= 3000 && total <= 7000)
  {
    descuento = 0.05;
  }

  return descuento;
}

export {sumar, multiplicar, descuento};
