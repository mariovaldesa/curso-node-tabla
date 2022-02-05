const { demandOption } = require('yargs');

const { argv } = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar a crear'
                    })
                    .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Sirve para mostrar la tabla de multiplicar en consola'
                    })
                    .option('h', {
                        alias: 'hasta',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es el número hasta el cual va a llegar la tabla'
                    })
                    .check( (argv) => {
                        if ( isNaN( argv.base ) ) {
                            throw 'Se espera que la base sea un número';
                        }
                        if ( isNaN( argv.hasta ) ) {
                            throw 'Se espera que el límite sea un número';
                        }
                        return true
                    });

module.exports = {
    argv
}
                    