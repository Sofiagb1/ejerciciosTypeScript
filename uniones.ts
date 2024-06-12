//EJEMPLO 1
type Miunion = {
    nombre: string;
    apellido: string;
} | {
    correo: string;
    facultad: string;
};

let x: Miunion = {nombre: "Brandon", apellido: "Ortiz Medina"};
x = {correo: "bortiz_194@cue.edu.co", facultad: "Ingeniería y ciencias básicas"};



//EJEMPLO 2
type union = string | boolean;

let y: union = "Brandon";
y = true;