//EJEMPLO 1

function saludo(saludito:string, ...nombres:string[]){
    return saludito + " " + nombres.join(", ") + "!";
}

saludo("Q hubo", "Brandon", "Stuart");
saludo("Q hubo")