// 06-callbacks.js
const fs = require('fs'); // file system
// 06-ejemplo.txt -> Hola

// fs.readFile(
//     './06-ejemplo.txt', // 1
//     'utf-8',
//     (error, contenido) => {
//         if(error){
//             console.error({mensaje:'error leyendo contenido 06 ejemplo txt', error: error});
//         }else{
//             fs.readFile(
//                 './01-variable.js', // 2
//                 'utf-8',
//                 (errorVariable, contenidoVariable) => {
//                     if(errorVariable){
//                         console.error({mensaje:'error leyendo contenido 01 variable', error: errorVariable});
//                     }else{
//                         console.log(contenido, contenidoVariable);
//                     }
//                 }
//             );
//         }
//     }
// );
fs.readFile(
    './07-ejemplo-lectura-escritura.txt', // 2
    'utf-8',
    (errorVariable, contenidoVariable) => {
        if(errorVariable){
            console.error({mensaje:'error leyendo contenido', error: errorVariable});
        }else{
            let contenidoNuevo = contenidoVariable + '\n' + 'hola 5555'
            fs.writeFile(
                './07-ejemplo-lectura-escritura.txt',
                contenidoNuevo,
                'utf-8',
                (errorVariable, contenidoVariable) => {
                    if(errorVariable){
                        console.error({mensaje:'error al escribir contenido', error: errorVariable});
                    }
                    else {
                        console.log("Escritura realizada");
                    }
                }
            )
        }
    }
);
