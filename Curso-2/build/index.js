"use strict";
console.log('Olá Mundo!');
//Tipos primitivos
let a = 'a';
let b = false;
let c = 1;
let d;
let nulo = null;
let qualquer = 'asaas';
function funçaoSemRetorno() {
    let qualquerCoisa = 1 + 1;
}
//Outros tipos
//Objeto - sem previsibilidade
let produto = {
    a: "a",
    b: "b"
};
let meuProduto = {
    nome: "a",
    preco: 10,
    unidades: 5
};
//Arrays
let dados = ['a', 'a', '42131'];
let dados2 = ['zxcasd', '12341'];
//Arrays multi-tipos
let infos = ['a', 1, -1, -0, 'asasdg'];
//Tuplas
let boleto = ['a', 1, 2];
//Dates
let aniversario = new Date();
console.log(aniversario.toString());
//funções
function addNumber(x, y) {
    return x + y;
}
let result = addNumber(1, 2);
