const fs = require('fs');
/*
Hacer una funcion que me acepte como parametro una variable
con el path del archivo y el contenido a agregar al contenido
del archivo. La funcion debe tomar estos dos parametros y leer
el archivo y añadir el texto al final del archivo.
 */

// fs.writeFile(
//     path,
//     contenido,
//     'utf-9',
//     (error)=>{
//
//     }
// );
function escribirArchivo(path, contenidoNuevo) {
    fs.readFile(
        path,
        'utf-8',
        (error, contenidoLeido) => {
            if (error) {
                console.error('Error leyendo archivo', error);
            } else {
                fs.writeFile(
                    path,
                    contenidoNuevo + '\n' + contenidoLeido,
                    'utf-8',
                    (errorLeyendo) => {
                        if(errorLeyendo){
                            console.error('Error leyendo archivo', errorLeyendo);
                        }else{
                            console.log('Operacion terminada con exito')
                        }
                    });
            }
        }
    );
}

escribirArchivo(
    './06-ejemplo.txt',
    'Buenas tardes'
);