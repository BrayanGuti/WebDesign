async   function obtenerEmpleados(){
        const archivo = "empleados.json"

        // fetch(archivo)
        //     .then(resultado => {
        //         return resultado.json()
        //     })
        //     .then(datos => {
        //         console.log(datos)
        //         const {empleados} = datos

        //         empleados.forEach(element => {
        //             console.log(element.salario)
                

        //         });

        //     })
        const resultado = await fetch(archivo)
        const datos = await resultado.json()
        console.log(datos)
        const {empleados} = datos

        empleados.forEach(element => {
            element.salario = parseInt(element.salario)
            console.log(element.salario)
            

        });

    }
obtenerEmpleados()