function sumar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function descuento(total) {
  let descuento = 0;
  if (total >= 1000 && total < 3000)
  {
    descuento = 0.03;
  }
  else if (total >= 3000 && total < 7000)
  {
    descuento = 0.05;
  }
  else if (total >= 7000 && total < 10000)
  {
    descuento = 0.07;
  }
  else if (total >= 10000 && total < 30000)
  {
    descuento = 0.1;
  }
  else if (total >= 30000)
  {
    descuento = 0.15;
  }

  return descuento;
}
function impuesto(estado)
{
    let imp = 0;
    switch(estado)
    {
        case 'UT':
            imp = 0.0665;
            break;
        case 'NV':
            imp = 0.08;
            break;
        case 'TX':
            imp = 0.0625;
            break;
        case 'AL':
            imp = 0.04;
            break;
        case 'CA':
            imp = 0.0825;
            break;
        default:
            break;
    }
    return imp;
} 
function calcularPrecioTotal(precioNeto, descuento, impuesto) {
  let total = impuesto - descuento;
  total = total + precioNeto;
  return total;
}
export {sumar, multiplicar, descuento, impuesto, calcularPrecioTotal};
