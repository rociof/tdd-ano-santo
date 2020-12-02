/*La periodicidad (partiendo del 2021) es 6-5-6-11 para este siglo 
    a partir del año "100" (el último de cada siglo) se rompe el ciclo.
    Año bisiesto es cada 4 años salvo que sea divisibles por cien, pero no por cuatrocientos*/

/**
 * Función para determinar si un año n es considerado Año Santo.
 * @param {number} n El año a comprobar.
 * @returns true o false, en función de si es año santo o no.
 */
// function anoSanto(n) {
//   
//   //TODO: realizar cálculos oportunos
//   var dia = "25";
//   var mes = "7";
//   var fecha = dia + "/" + mes + "/" + n;
//   if ( = 6) return true;
//   return false;
// }

function anoSanto(n) {

  //funcionaría para los siglos XX, XXI y XXII (de 1900 hasta 2200)
  if (n> 2100) n--;
  while (n<2021) {
    n += 28;
  }
  while (n>2038) {
    n -= 28;
  }
  if (n==2021) return true;
  if (n==2027) return true;
  if (n==2032) return true;
  if (n==2038) return true;
  return false;
}
export {
  anoSanto
}

