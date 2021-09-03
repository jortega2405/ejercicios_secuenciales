
function y1(){
    let y;
    y = ((5+2-5)**2 * 5 + 8 / 2 -30) / 2*5 - 3;
    return y;
};
console.log(y1());

/*********************************************************/
function y2(){
    const z = 5;
    const n = 3;
    const m = z - n;
    const y = (((z + 2 - n)**2 * m + 8 / 2 - 30) / 2 * 5 - 3 )**5 + 15 * 3 - 9 / 3;
    return y;
};
console.log(y2());

/*********************************************************/
function y3(){
    const z = 5;
    const n = ((8+2-4)**2 * 5 + 8 + 7 / 2 - 30* 5 ) / 2 * 5 - 3;
    const m = z**2 * 3 + n;
    const y = ((((z+2-n)**2 * m+8/2 - 30) / 2 * 5 - 3)**5 + 15 * 3 - 9 / 3)**2 - 5 / 4;
    return y;
};
console.log(y3());

/*********************************************************/
function ejercicio1 (presion, volumen, temperatura){
    return (presion * volumen) / (0.37 * (temperatura + 460));
};
console.log(ejercicio1(43,38.5,35));

/*********************************************************/
function ejercicio2 (edad){
    let num_pul = (200 - edad) / 10;
    return `el numero de pulsaciones es de ${num_pul}`;
};
console.log(ejercicio2(23));

/*********************************************************/
function ejercicio3 (inversion1, inversion2, inversion3){
    const total = inversion1 + inversion2 + inversion3;
    porcentaje1 = (inversion1 * 100 / total);
    porcentaje2 = (inversion2 * 100 / total);
    porcentaje3 =(inversion3 * 100 / total);
    return `Teniendo en cuenta que total invertido es de ${total}, el porcentaje para cada uno de los inversores es:"
    \n El porcentaje para el inversor 1 es: ${porcentaje1}%, 
    \n El porcentaje para el inversor 2 es: ${porcentaje2}%
    \n El porcentaje para el inversor 3 es: ${porcentaje3}%`;
};
console.log(ejercicio3(500, 900, 700));

/*********************************************************/

function ejercicio4 (saldoInicial) {
    return (saldoInicial* 0.015) + saldoInicial;
};
console.log(ejercicio4(500));

/*********************************************************/

function ejercicio5(sueldoBase) {
    const datos = {
        ley : sueldoBase* 0.01,
        seguroSocial: sueldoBase* 0.04,
        seguroForsozo: sueldoBase* 0.005,
        caja: sueldoBase* 0.05,
        totalPagar: sueldoBase - (sueldoBase* 0.01) - (sueldoBase* 0.04) - (sueldoBase* 0.005) - (sueldoBase* 0.05)
    }
    return datos;
};
console.log(ejercicio5(2500000));

/*********************************************************/

function ejercicio6 (numeroPalabras, tamaño, colores){
    return (numeroPalabras * 20000) + (tamaño * 15000) + (colores * 25000);
};
console.log(ejercicio6(57,12,4));






