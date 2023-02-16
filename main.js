// Pedir un numero al usuario y ver 
// la tabala de multiplicar
// anteriores al numero digitado
// Ejemplo  Usuario = 3
// Tabla 1, Tabla 2, Tabla 3


let num = Number(prompt("Usuario, ingrese un número para multiplicar"));
contador = 1;
do {
    console.log(`TABLA DEL ${contador}`);
    for(let i = 1; i<=10; i++){
        console.log(`${contador} X ${i} = ${contador*i}`);
    }
    contador++;
} while (contador<=num);
