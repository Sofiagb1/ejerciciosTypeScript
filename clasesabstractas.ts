//EJEMPLO 1
abstract class Person{
    nombre: string;

    constructor(nombre:string){
        this.nombre = nombre;
    }

    display(): void{
        console.log(this.nombre)
    }

    abstract find(persona:string): Person;
}

class Empleado extends Person{
    emcodigo: number;

    constructor(nombre:string, codigo:number){
        super(nombre);
        this.emcodigo = codigo;
    }

    find(nombre:string): Person{
        return new Empleado(nombre, 34)
    }
}

let emp: Person = new Empleado("Brandon", 50)
emp.display();

let emp2: Person = new Empleado("Jorge", 40)
emp2.display();



//EJEMPLO 2

abstract class Rectangulo{
    abstract getArea(): number;
}

class Circulo extends Rectangulo{
    constructor(private radius: number){
        super()
    }

    getArea(){
        return Math.PI * this.radius**2;
    }
}

const f = new Circulo(6);
console.log(f.getArea());