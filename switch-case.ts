function estudiante(ID: number){
    switch(ID){
        case (123456):
        console.log("Eres Brandon Ortiz Medina");
        break;
        case (134788):
        console.log("Eres Ricardo Ortiz Colmenares");
        break;
        case (192657):
        console.log("Eres Manuel Medrano Espitia");
        break;
        case (123553):
        console.log("Eres Luna Gil Rincón");
        break;
        case (123356):
        console.log("Eres José Celestino Mutis");
        break;
        case (123466):
        console.log("Eres Adolfo Ruiz Cervantes");
        break;
        case (122456):
        console.log("Eres Alan Turing Quiñonez");
        break;
        case (111456):
        console.log("Eres Brayan Miguel Bueno");
        break;
        default:
            throw new Error ("ID inválido")
    }
}

estudiante(192657);