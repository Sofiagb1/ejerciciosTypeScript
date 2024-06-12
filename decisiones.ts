function multiplicacion(a:number, b:number){
    if(a<=0 || b<=0){
        throw new Error("Los números deben ser mayores que 0")
    }
    return a*b;
}

const num1 = 10;
const num2 = 20;
const resultado = multiplicacion(num1, num2);
console.log(resultado);