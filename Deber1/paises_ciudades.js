const fs = require('fs');
const inquirer = require('inquirer');

async function main() {
    opcion = await menu();
    switch (opcion.menu) {
        case 'Listar paises':
            lista = await listar();
            lista.forEach(element => {
                element.ciudades = JSON.stringify(element.ciudades);
            })
            console.log(lista);
            break;
        case 'Registrar paises':
            crear(await datosPais());
            break;
        case 'Actualizar paises':
            try {
                const respuesta = await inquirer
                    .prompt([
                        {
                            type: 'number',
                            name: 'id',
                            message: 'Ingresa el id del país'
                        },
                        {
                            type: 'input',
                            name: 'nombre',
                            message: 'Ingresa el nombre del país'
                        },
                        {
                            type: 'number',
                            name: 'año',
                            message: 'Ingresa el año de fundación del país'
                        },
                        {
                            type: 'input',
                            name: 'idioma',
                            message: 'Ingrese el idioma oficial del país'
                        },
                        {
                            type: 'input',
                            name: 'presidente',
                            message: 'Ingrese el nombre del presidente del país'
                        },
                        {
                            type: 'number',
                            name: 'poblacion',
                            message: 'Ingrese el número de habitantes'
                        }
                    ]);
                actualizar(respuesta);
            } catch (e) {
                console.error(e);
            }
            break;
        case 'Eliminar paises':
            try {
                const respuesta = await inquirer
                    .prompt([
                        {
                            type: 'number',
                            name: 'id',
                            message: 'Ingresa el id del país'
                        }
                    ]);
                eliminar(respuesta);
            } catch (e) {
                console.error(e);
            }
            break;
        case 'Registrar ciudad':
            try {
                data = await listar();
                const respuesta = await inquirer
                    .prompt([
                        {
                            type: 'list',
                            name: 'menu',
                            message: 'Seleccione un país: ',
                            choices: data.map(a => a.id + " " + a.nombre),
                        }
                    ]);
                console.log(respuesta.menu.slice(0, 1));
                crearCiudad(await datosCiudad(), respuesta.menu.slice(0, 1));
            } catch (e) {
                console.error(e)
            }
            break;
        case 'Actualizar ciudad':
            try {
                data = await listar();
                const respuesta = await inquirer
                    .prompt([
                        {
                            type: 'list',
                            name: 'menu',
                            message: 'Seleccione un país: ',
                            choices: data.map(a => a.id + " " + a.nombre),
                        }
                    ]);
                const datos = await inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'nombre',
                            message: 'Ingrese el nombre de la ciudad'
                        },
                        {
                            type: 'number',
                            name: 'pais',
                            message: 'Ingresa id del pais'
                        },
                        {
                            type: 'confirm',
                            name: 'es_capital',
                            message: '¿La ciudad es capital del país?'
                        },
                        {
                            type: 'number',
                            name: 'fundacion',
                            message: 'Ingrese el año de fundación'
                        },
                        {
                            type: 'number',
                            name: 'poblacion',
                            message: 'Ingrese el número de habitantes de la ciudad'
                        },
                        {
                            type: 'number',
                            name: 'id',
                            message: 'Ingrese el id de la ciudad'
                        }
                    ]);
                actualizarCiudad(datos, respuesta.menu.slice(0, 1));
            } catch (e) {
                console.error(e)
            }
            break;
        case 'Eliminar ciudad':
            try {
                data = await listar();
                const respuesta = await inquirer
                    .prompt([
                        {
                            type: 'list',
                            name: 'menu',
                            message: 'Seleccione un país: ',
                            choices: data.map(a => a.id + " " + a.nombre),
                        }
                    ]);
                const datos = await inquirer
                    .prompt([
                        {
                            type: 'number',
                            name: 'id',
                            message: 'Ingrese el id de la ciudad'
                        }
                    ]);
                eliminarCiudad(datos, respuesta.menu.slice(0, 1));
            } catch (e) {
                console.error(e)
            }
            break;
    }
    main();
}

async function menu() {
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'menu',
                    message: 'Seleccione una opción: ',
                    choices: ['Listar paises', 'Registrar paises', 'Actualizar paises', 'Eliminar paises',
                        'Registrar ciudad', 'Actualizar ciudad', 'Eliminar ciudad'],
                }
            ]);
        return respuesta;
    } catch (e) {
        console.error(e)
    }
}

async function datosPais() {
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'nombre',
                    message: 'Ingrese el nombre del pais'
                },
                {
                    type: 'number',
                    name: 'anio_de_fundacion',
                    message: 'Ingrese el año de fundación'
                },
                {
                    type: 'input',
                    name: 'idioma',
                    message: 'Ingrese el idioma oficil'
                },
                {
                    type: 'input',
                    name: 'presidente',
                    message: 'Ingrese el nombre del presidente'
                },
                {
                    type: 'number',
                    name: 'poblacion',
                    message: 'Ingresa el número de habitantes'
                },

            ]);
        return respuesta;
    } catch (e) {
        console.error(e);
    }
}

async function datosCiudad() {
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'nombre',
                    message: 'Ingrese el nombre de la ciudad'
                },
                {
                    type: 'number',
                    name: 'pais',
                    message: 'Ingresa id del pais'
                },
                {
                    type: 'confirm',
                    name: 'es_capital',
                    message: '¿La ciudad es capital del país?'
                },
                {
                    type: 'number',
                    name: 'fundacion',
                    message: 'Ingrese el año de fundación'
                },
                {
                    type: 'number',
                    name: 'poblacion',
                    message: 'Ingrese el número de habitantes de la ciudad'
                }
            ]);
        return respuesta;
    } catch (e) {
        console.error(e);
    }
}


function escribirArchivo(contenido) {
    const escribirArchivoPromesa = new Promise(
        (resolve, reject) => {
            fs.writeFile(
                'paises_ciudades.txt',
                contenido,
                (error) => {
                    if (error) {
                        console.log('Error en la escritura del archivo');
                    } else {
                        console.log('Escritura realizada correctamente');
                        resolve();
                    }
                }
            );
        }
    )
    return escribirArchivoPromesa;
}

function listar() {
    const leerArchivoPromesa = new Promise(
        (resolve, reject) => {
            fs.readFile('paises_ciudades.txt', 'utf-8',
                (error, contenido) => {
                    if (error) {
                        console.log('Error en la lectura del archivo');
                    } else {
                        if (contenido) {
                            resolve(JSON.parse(contenido));
                        } else {
                            resolve([]);
                        }

                    }
                }
            );
        }
    )
    return leerArchivoPromesa;
}

function crear(nuevoContenido) {
    listar().then((contenido) => {
        if (contenido.at(-1)) {
            nuevoContenido['id'] = contenido.at(-1)['id'] + 1;
        } else {
            nuevoContenido['id'] = 1;
        }
        nuevoContenido['ciudades'] = [];
        contenido.push(nuevoContenido);
        return escribirArchivo(JSON.stringify(contenido));
    })
}

function actualizar(contenido) {
    listar().then((contenidoactual) => {
        contenidoactual.forEach((element) => {
            if (element['id'] === contenido['id']) {
                element['nombre'] = contenido['nombre'];
                element['anio_fundacion'] = contenido['anio_fundacion'];
                element['idioma'] = contenido['idioma'];
                element['presidente'] = contenido['presidente'];
                element['poblacion'] = element['poblacion'];
            }
        })
        return escribirArchivo(JSON.stringify(contenidoactual));
    })
}

function eliminar(contenido) {
    listar().then((contenidoactual) => {
        contenidoactual.forEach((element) => {
            if (element['id'] === contenido['id']) {
                contenidoactual.splice(contenidoactual.indexOf(element), 1);
            }
        })
        return escribirArchivo(JSON.stringify(contenidoactual));
    })
}

function crearCiudad(nuevoContenido, id) {
    listar().then((contenido) => {
        elementos = contenido.find((el) => el.id == id).ciudades;
        if (elementos.at(-1)) {
            nuevoContenido['id'] = elementos.at(-1)['id'] + 1;
        } else {
            nuevoContenido['id'] = 1;
        }
        elementos.push(nuevoContenido);
        contenido.find((el) => el.id == id).ciudades = elementos;
        return escribirArchivo(JSON.stringify(contenido));
    })
}

function actualizarCiudad(contenido, id) {
    listar().then((contenidoactual) => {
        elementos = contenidoactual.find((el) => el.id == id).ciudades;
        elementos.forEach((element) => {
            if (element['id'] === contenido['id']) {
                element['nombre'] = contenido['nombre'];
                element['pais'] = contenido['pais'];
                element['es_capital'] = contenido['es_capital'];
                element['fundacion'] = contenido['fundacion'];
                element['poblacion'] = contenido['poblacion'];
            }

        })
        contenidoactual.find((el) => el.id == id).ciudades = elementos
        return escribirArchivo(JSON.stringify(contenidoactual));
    })
}

function eliminarCiudad(contenido, id) {
    listar().then((contenidoactual) => {
        elementos = contenidoactual.find((el)=> el.id == id).ciudades;
        elementos.forEach((element) => {
            if (element['id'] === contenido['id']) {
                elementos.splice(elementos.indexOf(element), 1);
            }
        })
        contenidoactual.find((el) => el.id == id).ciudades = elementos
        return escribirArchivo(JSON.stringify(contenidoactual));
    })
}

main();