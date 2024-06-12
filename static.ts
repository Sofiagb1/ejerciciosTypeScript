//EJEMPLO 1
class Clase{
    static propiedad1 = "JIJIJI JA";
    static mostrar(){
        return "Hola"
    }
}

console.log(Clase.mostrar + " " + Clase.propiedad1)


//EJEMPLO 2 - solo lectura

class Numero{
    static readonly num = 58.500;
    static readonly num2 = 45;
}
console.log(Numero.num);
console.log(Numero.num2);


//EJEMPLO 3

class Notas{
    constructor(private _n1:number, private _n2:number){}

    get n1(){
        return this._n1;
    }

    set n1(value:number){
        this._n1 = value;
    }

    get n2(){
        return this._n2;
    }

    set n2(value:number){
        this._n2 = value;
    }

    static general(){
        return new Notas(2.5, 5);
    }
}

let n = Notas.general()
console.log(n.n1)