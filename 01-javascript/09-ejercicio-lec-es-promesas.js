
const fs = require('fs');

function promesaLeerArchivo(path){
    const lecturaPromesa = new Promise( // Definicion de la promesa
        (
            resolve, // return
            reject // throw
        ) => {
           fs.readFile(
               path,
               'utf-8',
               (error, contenidoLeido) => {
                   if (error) {
                       console.error('Error leyendo archivo', error);
                   } else {
                       resolve(contenidoLeido);
                   }
               }
           );
        }
    )
    return lecturaPromesa
}

function promesaEscribirArchivo(path, contenidoActual, contenidoNuevo) {
    const miPrimerPromesa = new Promise( // Definicion de la promesa
        (resolve, reject) => {
           contenidoNuevo = contenidoActual + '\n'+ contenidoNuevo
           fs.writeFile(
               path,
               contenidoNuevo,
               'utf-8',
               (errorVariable, contenidoVariable) => {
                   if(errorVariable){
                       console.error({mensaje:'error al escribir contenido', error: errorVariable});
                   }else{
                       console.log('Escritura', 'Contenido Escrito')
                   }
               }
           )
        }
    );
    return miPrimerPromesa
}

function ejercicio(path , nuevoContenido){
    promesaLeerArchivo(path).then(
        (datosPromesa)=>{
            promesaEscribirArchivo(path,datosPromesa,nuevoContenido)
        }
    ).then(
        ()=>{
            promesaLeerArchivo(path).then(
                (datosPromesa)=>{
                    console.log(datosPromesa);
                }
            )
        }
    ).catch(
        (error)=>{
            console.log(error);
        }
    ).finally()
}

path = "./07-ejemplo-lectura-escritura.txt";
ejercicio(path, "  h0ola ");