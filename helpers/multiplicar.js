const fs = require('fs');

const crearArchivo = async ( base, listar, hasta) => {
    try {
        let salida = '';

        salida += 
        `
        =====================
            TABLA DEL: ${base}
        =====================
        \n`;

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
        if ( listar ) {
            console.log( salida );
        }
        return `./salida/tabla-${base}.txt`;
        
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}