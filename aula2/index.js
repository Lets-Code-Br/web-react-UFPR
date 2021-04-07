//Sistema de Tipos - DINÂMICA / FRACA

const n1 = parseFloat(prompt('Digite a nota 1: '));
const n2 = parseFloat(prompt('Digite a nota 2: '));
const media = (n1 + n2) / 2.0;
if (media > 6) {
    alert('passou');
}
else {
    alert('não passou');
}

//true / false -> truthy / falsy

const pessoa = { nome: 'teste', idade: 10 };

if (pessoa.nome && pessoa.idade) grava(pessoa);

const x = 1;

if (x == 1) console.log(1);
else if (x == 2) console.log(2);
else if (x == 3) console.log(3);
else console.log('??');

const aluno = { nome: 'teste da silva', apelido: 'tsilva' };

if (aluno.apelido) console.log(aluno.apelido)
else console.log(nome)

const result = aluno.apelido ? aluno.apelido : aluno.nome; //ternário

const port = ENV.PORT || 3000;

while () { }

do {

} while ();

for (let i = 0; i < 10; i++) {

}
const arr = [1, 2, 3, 4, 5];
const obj = { 'x': 1, 'y': 2, 'z': 3 };

for (let i in obj) {
    console.log(i);
    obj[i];
}

for (let v of arr) {

}

const xs = [1, 2, 3, 4]

const ys = [[1, 2], [3, 4], [5, 6]];

//Estruturado, Orientado a objeto, funcional

const somar = function (a, b) { return a + b };
const executar = function (operacao, a, b) { return operacao(a, b); }

const createSplit = function (separator) {
    return function (texto) {
        return texto.split(separator);
    }
}

const createSplit = separator => txt => txt.split(separator);

const splitLB = createSplit('\n');

splitLB(`
 1
 2
 3
 4
 5
`) // ['1','2','3','4','5']


//função é um cidadão de primeira classe

//first class citizen

//arrow function - lambda

const somar = function (a, b) { return a + b; }
const somar = (a, b) => a + b;

const fn1 = () => {
    console.log('preparando');
    console.log('pronto');
    return 1
}

const createVector = (x, y) => ({ x: x, y: y });

const nome = 'teste';
let aluno = { nome } // {nome : nome, ra : ra}
const ra = '0001';
aluno = { ...aluno, ra };

const { nome, ra } = aluno;

aluno.nome//teste
aluno.ra//0001

const aluno = { nome: 'teste', matricula: '0001', print: () => console.log(this) }

const [primeiro, segundo, ...resto] = [1, 2, 3, 4, 5];

primeiro //1
segundo //2
resto // [3,4,5]

//5! == 5 * 4! -> n! = n * n-1!
const fatorial = n => n == 1 ? 1 : n * fatorial(n - 1);

const fatorial = function (n) {
    if (n == 1) return 1;
    else return n * fatorial(n - 1);
}

const xs = [1, 2, 3, 4, 5]

function printArr(arr) {

    if (arr.length > 0) {
        const [head, ...tail] = arr;
        console.log(head);
        if (tail.length > 0) printArr(tail);
    }
}

const xs = [1, 2, 3, 4];
const ys = xs.map(x => x * 2); //[2,4,6,8]

const dobro = x => x * 2;
const xs = [1, 2, 3, 4];
const ys = xs.map(dobro); //[2,4,6,8]


const xs = [1, 2, 3, 4];
const ys = xs.filter(x => x % 2 == 0); //[2,4]

const sum = [1, 2, 3].reduce((acc, item) => acc + item, 0);

const zs = [1, 2, 3].reduce((res, item) => [...res, item], []);
zs = [...arr];

