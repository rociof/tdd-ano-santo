
/**
 * Función para determinar si un año n es considerado Año Santo.
 * @param {number} n El año a comprobar.
 * @returns true o false, en función de si es año santo o no.
 */
// function anoSanto(n) {
//   //La periodicidad (partiendo del 2021) es 6-5-6-11 para este siglo
//   //TODO: realizar cálculos oportunos
//   var dia = "25";
//   var mes = "7";
//   var fecha = dia + "/" + mes + "/" + n;
//   if ( = 6) return true;
//   return false;
// }

function anoSanto(n) {
  //TODO: realizar cálculos oportunos
  if (n==2021) return true;
  if (n==2027) return true;
  if (n==2032) return true;
  if (n==2038) return true;
  if (n==2049) return true;
  return false;
}


export {
  anoSanto
}

