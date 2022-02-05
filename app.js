const { crearArchivo } = require('./helpers/multiplicar');
const { argv } = require('./config/yargs');

console.clear()

const { base, listar, hasta } = argv;

crearArchivo( base, listar, hasta)
    .then((msg) => console.log(msg, ' creado'))
    .catch((err) => console.log(err))
;

