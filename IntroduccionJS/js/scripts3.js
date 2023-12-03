// Async await

function descargarClientes(){
    return new Promise(resolve =>{
        console.log("descargando clientes... espere");
    
    setTimeout( () => {
        resolve("los clientes han sido descargados")
    }, 5000)
    });
}

function descargarPedidos(){
    return new Promise(resolve =>{
        console.log("descargando pedidos... espere");
    
    setTimeout( () => {
        resolve("los pedidos han sido descargados")
    }, 3000)
    });
}


async function api (){

    try {
        // const resultado = await descargarClientes();
        // const resultado2 = await descargarPedidos();
        // console.log(resultado);
        // console.log(resultado2);

        const resultado =  await Promise.all([descargarClientes(), descargarPedidos()])
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }

    console.log("app lista");
}

api();
