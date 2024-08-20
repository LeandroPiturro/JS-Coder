const empleados = ["Pedro Perez","Martin Gonzalez","Carla Flores","Miranda Gomez","Alejandro Cueva","Claudio Garcia","Lucas Franco"]
console.log(empleados)
let menu = parseInt(prompt("Elija una opcion: \n 1-Listar Todos los Empleados \n 2-Agregar Empleado \n 3-Quitar Empleado \n 4-Buscar por ID \n 5- Consultar ID\n 6- Salir"))

function listarTodo (){
    for (const empleado of empleados){
        console.log (empleados.indexOf(empleado)+". "+empleados[empleados.indexOf(empleado)])
    }
    alert(empleados.join("\n")+"\n \nHay un total de "+empleados.length+" empleados.")
}

function agregarEmpleado (){
    let nuevoEmpleado = prompt("Ingrese el Nombre y Apellido del nuevo Empleado: ")
    empleados.push(nuevoEmpleado)
    alert ("Nuevo Empleado: "+nuevoEmpleado+" creado.\n ID numero: "+empleados.indexOf(nuevoEmpleado))
}

function quitarEmpleado (){
    let eliminarId = parseInt(prompt ("Indique el ID del empleado que desea eliminar: "))
    if (eliminarId > empleados.length){
        alert ("El ID ingresado no corresponde a ningun empleado.\nIntente nuevamente.")
    } else{
        alert ("El empleado "+empleados[eliminarId]+" ha sido eliminado.")
        empleados.splice (eliminarId, 1)
    }
}
function buscarId (){
    let empleadoId = parseInt(prompt ("Ingrese el ID del empleado que desea buscar: "))
    if (empleadoId > empleados.length){
        alert ("El ID ingresado no corresponde a ningun empleado.\nIntente nuevamente.")
    } else{
        alert ("El ID "+empleadoId+" pertenece al empleado "+empleados[empleadoId])
    }
}
function consultarId(){
    let nombreEmpleado = prompt ("Ingrese el nombre y apellido del empleado para conocer su ID: ")
    if (empleados.includes(nombreEmpleado)){
        alert ("El ID de "+nombreEmpleado+" es: "+empleados.indexOf(nombreEmpleado))
    } else {
        alert ("El ID ingresado no corresponde a ningun empleado.\nIntente nuevamente.")
    }
    
}

while(menu !== 6) {
    switch(menu) {
        case 1:
            listarTodo()
            break
        case 2:
            agregarEmpleado()
            break
        case 3:
            quitarEmpleado()
            break
        case 4:
            buscarId()
            break
        case 5:
            consultarId()
            break
        default:
            alert("Elija otra Opcion.")
            break
    }
    menu = parseInt(prompt("Elija una opcion: \n 1-Listar Todos los Empleados \n 2-Agregar Empleado \n 3-Quitar Empleado \n 4-Buscar por ID \n 5- Consultar ID\n 6- Salir"))
}