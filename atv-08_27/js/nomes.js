'use strict';

let nome = ['Lahra Souza Goiabinha', 'Mateus Barboza Santana', 'Igor Stein dos Santos', 'Luiz Felipe Xavier Bizio', 'Vitor Ribeiro Fonseca', 'Valdineide Schunck'];

for (let i = 0; i < nome.length; i++) {
    
    let arrayNome = nome.split();
    let primeiroUltimo = arrayNome[0] + ' ' + arrayNome[arrayNome.length-1];
    console.log(primeiroUltimo);
  }
