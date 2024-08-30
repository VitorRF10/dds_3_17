'use strict';

let ucs =[
    'NOÇÕES BÁSICAS PARA MAQUINISTAS (CH: 219.000)',
    'BANCO DE DADOS (CH: 120.000)'
];

for (let i = 0; i < ucs.length; i++) {
    let pieces = ucs[i].split(' ');//split pega uma string e separa em arrays de string
    pieces.splice(pieces.length-2,2);//splice remove um pedaço de uma array

    let abrev = pieces[0].substring();//retorna um pedaço de uma string
    console.log(abrev+'. '+pieces.pop());
}