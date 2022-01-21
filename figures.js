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
//console.log("PI es: " + pi);

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


//Aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
};

//reto triangulo
function alturaTriangulo(a, b) {
    return Math.sqrt(Math.pow(a, 2) - (Math.pow(b, 2) / 4));
    //return Math.sqrt((a * a) - ((b * b) / 4))
};

function calcularAltura() {
    const a = document.getElementById("trianguloA");
    const valueA = a.value;

    const b = document.getElementById("trianguloB");
    const valueB = b.value;

    const c = document.getElementById("trianguloC");
    const valueC = c.value;

    if (valueA == valueB || valueA == valueC || valueC == valueB) {
        if (valueA < valueB && valueA < valueC) {
            const baseTriangulo = valueA;
            const ladoTriangulo = valueB;
            const altura = alturaTriangulo(ladoTriangulo, baseTriangulo);
            alert(altura);
        }
        else if (valueB < valueA && valueB < valueC) {
            const baseTriangulo = valueB;
            const ladoTriangulo = valueA;
            const altura = alturaTriangulo(ladoTriangulo, baseTriangulo);
            alert(altura);
        }
        else if (valueC < valueA && valueC < valueB) {
            const baseTriangulo = valueC;
            const ladoTriangulo = valueA;
            const altura = alturaTriangulo(ladoTriangulo, baseTriangulo);
            alert(altura);
        };
        
    }
    else {
        alert("Tu triángulo no es isósceles")
    }
    
    
};