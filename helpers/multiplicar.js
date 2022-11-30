const fileSystem = require('fs');
const colorsitos = require('colors');

const crearTabla = async (base, listar, hasta) => {
    try {
        let salida = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log('===========================');
            console.log('      Tabla del: ', base);
            console.log('===========================');
            console.log(colorsitos.rainbow(salida));
        }

        fileSystem.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt creada`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearTabla
}