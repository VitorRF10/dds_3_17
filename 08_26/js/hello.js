"use script"; // Toda variavel a ser usada deve ser declarada
// Esses são os primeiros comandos de java script
/*
Abaixo teremos as declarações de variaveis 
const
let
var
*/

/* Na declaração de variaveis em javascript usando var é possível redeclarar uma variavel*/
var nome = 'Vitor Ribeiro';
var nome = 'SENAI';

console.log(nome);

let curso = 'DDS';
// let curso = 'Banco de Dados'; // O uso do let impede a redeclaração de variaveis

nota1 = 5;
//nota = 10;

console.log(nota1);

// Tipos de variaveis do JavaScript
let texto = 'Aula de JavaScript'
console.log(texto);
let decimal = 20.8;
console.log(decimal);
let booleano = true;
console.log(booleano);

let n1 = '10';
let n2 = 5;
console.log(n1+n2);

n1 = parseInt(n1);// No JavaScript é possível fazer reuso de variaveis inclusive
console.log(n1+n2);

let dia = 'Segunda';
let saudacao = 'Boa noite';

console.log(dia+saudacao);
console.log(dia,saudacao);
