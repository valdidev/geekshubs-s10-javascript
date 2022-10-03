/* var year = 2022;
var text = "Hello";
var open = true; */

/* console.log(year, text, open);
console.log(typeof year) */

/* let prueba = +"2" 
console.log(typeof prueba) //number
console.log(typeof("5"+"2")); //string
console.log(typeof("5"-"2")); //number */

/* var edad = 17;

if (edad >= 18) {
    console.log("Puedes ver la película");
} else {
    console.log("Espera a los 18!")
}
 */

var mes = prompt("Introduce un mes");

switch(mes){
    case 'diciembre':
    case 'enero':
    case 'febrero':
        console.log("INVIERNO")
    break;

    case 'marzo':
    case 'abril':
    case 'mayo':
        console.log("PRIMAVERA")
    break;

    case 'junio':
    case 'julio':
    case 'agosto':
        console.log("VERANO")
    break;

    case 'septiembre':
    case 'octubre':
    case 'noviembre':
        console.log("OTOÑO")
    break;

    default:
        console.log("Introduce un mes válido")
    break;
}

