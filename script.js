
let nombre = `Sergio Iván Bueno Ardila`;
let edad = 31;
let altura = 1.70;
let soyAlumno = true;
let listaPasatiempo = ["Cocinar", "Programar", "Jugar", "Comer"];
let caracteristicasPC = {
    sistema: "Windows 11 64X home",
    ram: 8,
    disco: "M.2",
}

let myStyle = `color: #fff;background: red;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;border-radius: 5px;padding: 5px;`;
console.group(`%cNombre del desarrollador`, myStyle);
    console.log(nombre);

console.groupEnd();
console.group(`%cEdad del desarrollador`, myStyle);
    console.log(edad);

console.groupEnd();
console.group(`%cAltura del desarrollador`, myStyle);
    console.log(altura);

console.groupEnd();
console.group(`%cPermiso para enseñar`, myStyle);
    console.log(soyAlumno);


console.groupEnd();
console.group(`%cPasatiempos del desarrollador`, myStyle);
    console.log(listaPasatiempo);

console.groupEnd();
console.group(`%cPC del desarrollador`, myStyle);
    console.log(caracteristicasPC);
console.groupEnd();

