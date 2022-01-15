//Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
 return lado * 4;
};
perimetroCuadrado()
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
};
//console.log("El área del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

//Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2+ base;
};


function areaTriangulo(base, altura) {
    return (base * altura) / 2;
};

console.groupEnd();

//Codigo del Circulo
console.group("Círculos");

//Radio
//const radioCirculo = 4;
//console.log("El radio del círculo es: " + radioCirculo + "cm");

//Diametro
function diametroCirculo(radio) {
    return radio * 2;
};
//console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

//PI
//const pi = 3.1416;
const pi = Math.PI;
console.log("PI es: " + pi);

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
};
//console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

//Area
function areaCirculo(radio) {
    return pi * (radio * radio);
};
//console.log("El área del círculo es: " + areaCirculo + "cm2");

console.groupEnd();