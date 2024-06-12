//EJEMPLO 1

interface IEmpleado{
    emcode: number;
    nombre: string;
    salario:(emcode:number)=>number;
}

class xEmpleado implements IEmpleado{
    emcode: number;
    nombre: string;

    constructor(code:number, nombre:string){
        this.emcode = code;
        this.nombre = nombre;
    }

    salario(emcode:number):number{
        return 5000000;
    }
}

let empl = new xEmpleado(56, "Brandon");