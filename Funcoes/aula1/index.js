
// ESCOPO DE BLOCO

if (true) {
    const message = 'Ola';
    console.log(message)
}

// console.log(message);

for (const color of ['verde', 'vermelho', 'amarelo']) {
    const message = 'Ola';
    console.log(color);
    console.log(message);

}
console.log(color);
console.log(message);
// EXEMPLO DE ESCOPO DE BLOCO COM VAR
if(true) {
    var count = 0;
    console.log(count);
}
console.log(count);

// EXEMPLO DE ESCOPO LOCAL COM VAR
function executar() {
    var text = 'Escopo local com o VAR';
    console.log(text);
}
executar();
console.log(text);

// EXEMPLO DE ESCOPO LOCAL LET CONST

function executar2() {
    let coun = 0;
    const test = 2;

    function executar3() {}
    console.log(coun);
    console.log(test);
    console.log(executar3);
}
executar2();