
function y1(){
    let y;
    y = ((5+2-5)**2 * 5 + 8 / 2 -30) / 2*5 - 3;
    return y;
};
console.log(y1());

function getMasa(presion, volumen, temperatura){
    let a = 0.37;
    let b = 460;
    return masa = ((presion * volumen) / (a * (temperatura + b)));
}
console.log(getMasa(40, 54.5, 17));

function pulsaciones(edad) {
    let num_pul = ( 200 - edad)/ 10;
    return `el numero de pulsaciones es de ${num_pul}`;
}
console.log(pulsaciones(17));
