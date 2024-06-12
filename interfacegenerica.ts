//EJEMPLO 1
interface Operacionint{
    operar(): number | string;
}

class Operacion<T> implements Operacionint{

    a: T;
    b: T;

    constructor(a:T, b:T){
        this.a = a;
        this.b = b;
    }

    operar(){
        if(typeof this.a === "number" && typeof this.b === "number"){
            return this.a * this.b;
        }else{
            return String(this.a) + String(this.b);
        }
    }
}

const multiplic = new Operacion<number>(10, 87);
const concat = new Operacion<string>("Hello", "World");

console.log(multiplic.operar());
console.log(concat.operar());



//EJEMPLO 2

interface Reserv<T>{
    dni: string;
    huesped: string
    habitacion: T;
}

class Habitacion{
    numero: number;
    tipo: string;
    tamaño: number;

    constructor(numero:number, tipo:string, tamaño:number){
        this.numero = numero;
        this.tipo = tipo;
        this.tamaño = tamaño;
    }
}

class Reservar implements Reserv<Habitacion>{

    dni: string;
    huesped: string;
    habitacion: Habitacion;

    constructor(dni:string, huesped:string, habitacion:Habitacion){
        this.dni = dni;
        this.huesped = huesped;
        this.habitacion = habitacion;
    }
}

const habitacion502 = new Habitacion(502, "Presidencial", 3);

const reserva = new Reservar("113594543", "Brandon Ortiz Medina", habitacion502);

console.log(reserva.dni);
console.log(reserva.huesped);
console.log(reserva.habitacion.numero);
console.log(reserva.habitacion.tipo);