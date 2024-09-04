'use strict';

function abreviarData(data){
    const hora_aula = new Date(data);
    return hora_aula.toLocaleTimeString('pt-br', {hour: '2-digit', minute: '2-digit'});
}

export default abreviarData;