//EJEMPLO 1 - con nombre

function display(){
    console.log("Bienvenido a Typescript");
}

display();


//EJEMPLO 2 - con parámetros y retorno

function resta(x:number, y:number){
    return x-y;
}
resta(5,3);


//EJEMPLO 3 - anónima

let saludar = function(){
    console.log("Hola, Brandon");
};
saludar();


//EJEMPLO 4 - anónima con parámetros y retorno

let division = function (d:number, e:number) : number
{
    return d/e;
}
division(4, 2);


//EJEMPLO 5 - argumentos

function salud(saludito:string, nombre:string, apellido:string) : string{
    return saludito + " " + nombre + apellido;
}

salud("Q'hubo", "Brandon", "Ortiz Medina")



//EJEMPLO 6 - parámetros predeterminados

function saludote(nombrecito:string, saludopre:string = "Q hubo") : string{
    return saludopre + " " + nombrecito + ".";
}
saludote("Brandon"); //si no se añade un parámetro para saludopre, este adoptará su valor predeterminado "Q hubo".
saludote("Brandon", "Q hubo");

