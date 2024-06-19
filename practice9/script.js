/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseÃ±a
2. El sistema debe ser capaz de validar si el usuario y contraseÃ±a ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseÃ±a son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseÃ±a son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/

const usersDatabase = [
    {
        username: "andres",
        password: "123",
    },
    {
        username: "caro",
        password: "456",
    },
    {
        username: "mariana",
        password: "789",
    },
];

const usersTimeline = [
    {
        username: "Estefany",
        timeline: "Me encata Javascript!",
    },
    {
        username: "Oscar",
        timeline: "Bebeloper es lo mejor!",
    },
    {
        username: "Mariana",
        timeline: "A mi me gusta mas el cafe que el te",
    },
    {
        username: "Andres",
        timeline: "Yo hoy no quiero trabajar",
    },
];

let usuario = prompt("¿Cuál es tu nombre?")
let contraseña = prompt("Ingresa tu contraseña")

function validarIngreso() {
    let usuarioEncontrado = false
    for (let i = 0; i < usersDatabase.length; i++) {

        if (usersDatabase[i].username.toLowerCase() === usuario.toLowerCase() && usersDatabase[i].password === contraseña) {
            console.log(` Bienvenido ${usuario.toLowerCase()}`);
            usuarioEncontrado = true
            break
        }
    }

    if (!usuarioEncontrado) {
        console.log("FIN VALIDAR INGRESO", "Usuario no encontrado, verificar usuario o contraseña");
    }
}

function ingresoExitoso() {
    let usuarioEncontrado = false

    for (let i = 0; i < usersTimeline.length; i++) {
        if (usersTimeline[i].username.toLowerCase() === usuario.toLowerCase()) {
            console.log(` Bienvenido ${usuario.toLowerCase()}`);
            console.log(usersTimeline[i].timeline);
            usuarioEncontrado = true
            break
        }
    }
    if (!usuarioEncontrado) {
        console.log("Usuario no encontrado, verificar usuario o contraseña");
    }
}

validarIngreso()
ingresoExitoso()