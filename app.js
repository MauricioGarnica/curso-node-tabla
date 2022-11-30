const { crearTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colorsitos = require('colors');


console.clear();
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(base);

// console.log(process.argv);
// console.log(argv);
// console.log('base: yargs', argv.base);

crearTabla(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(colorsitos.trap(nombreArchivo)))
    .catch(err => console.log(err));