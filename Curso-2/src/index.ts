type Hero = {
    name: string;
    vulgo: string;
}

console.log('Olá Mundo!');

//Tipos primitivos

let a: string = 'a'

let b: boolean = false;

let c: number = 1;

let d: undefined;

let nulo: null = null;

let qualquer: any = 'asaas';

function funçaoSemRetorno(): void {
    let qualquerCoisa: any = 1 + 1;
}

//Outros tipos

//Objeto - sem previsibilidade
let produto: object = {
    a: "a",
    b: "b"
}

type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProduto: ProdutoLoja = {
    nome: "a",
    preco: 10,
    unidades: 5
}

//Arrays

let dados: string[] = ['a', 'a', '42131'];
let dados2: Array<string> = ['zxcasd', '12341'];

//Arrays multi-tipos

let infos: (string | number)[] = ['a', 1, -1, -0, 'asasdg'];


//Tuplas

let boleto: [string, number, number] = ['a', 1, 2];

//Dates

let aniversario: Date = new Date();

console.log(aniversario.toString());

//funções

function addNumber(x: number, y: number): number {
    return x + y;
}

let result: number = addNumber(1, 2);

async function name1(nome:string): Promise<string> {
    return await 'a'
}

name1('b');