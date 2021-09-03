
function y1(){
    let y;
    y = ((5+2-5)**2 * 5 + 8 / 2 -30) / 2*5 - 3;
    return y;
};
console.log(y1());

function y2(){
    const z = 5;
    const n = 3;
    const m = z - n;
    const y = (((z + 2 - n)**2 * m + 8 / 2 - 30) / 2 * 5 - 3 )**5 + 15 * 3 - 9 / 3;
    return y;
};
console.log(y2());

function y3(){
    const z = 5;
    const n = ((8+2-4)**2 * 5 + 8 + 7 / 2 - 30* 5 ) / 2 * 5 - 3;
    const m = z**2 * 3 + n;
    const y = ((((z+2-n)**2 * m+8/2 - 30) / 2 * 5 - 3)**5 + 15 * 3 - 9 / 3)**2 - 5 / 4;
    return y;
};
console.log(y3());

function ejercicio1 (presion, volumen, temperatura){
    return (presion * volumen) / (0.37 * (temperatura + 460));
};
console.log(ejercicio1(43,38.5,35));

function ejercicio2 (edad){
    let num_pul = (200 - edad) / 10;
    return `el numero de pulsaciones es de ${num_pul}`;
};
console.log(ejercicio2(23));

