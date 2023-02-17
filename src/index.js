/**
 * @def
 *  para iniciar un servidor es necesario importar la libreria express
 *  instanciarla como la constante app y luego usar la funcion `listen`
 *  la cual recibe por parámetro el puerto en el cual se va a ejecutar el servidor
 *  adicionalmente se puede agregar un callback que permita mostrar por consola
 *  cuando el servidor esté levantado.
 */

const express = require("express");
const app = express();
