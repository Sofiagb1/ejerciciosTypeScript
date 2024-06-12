//EJEMPLO 1 - misma name función, distinto parametro o retorno

function añadir(c:string, v:string):string;

function añadir(c:number, v:number):number;

function añadir(c:any, v:any):any{
    return c+v;
}

console.log(añadir("Hola", "Brandon"));
console.log(añadir(35, 56));