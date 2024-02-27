"use strict";
//void - funções que não retornam nada
function withoutReturn() {
    console.log("F");
}
//callback como argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Pedro");
preGreeting(greeting, "Henrique");
//generic functions
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b"]));
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const newObject = mergeObjects({ name: "Pedro" }, { job: "Engineer" });
console.log(newObject);
//constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber("15", "38"));
//Especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [234, 342, 4]));
console.log(mergeArrays([1, 2, 3], ["234", "342", "P", "4"]));
//paramêtros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${name} ${greet}, tudo bem ?`;
    }
    return `Olá ${name}, tudo bem ?`;
}
console.log(modernGreeting("Pedro", "bom dia"));
console.log(modernGreeting("Pedro"));
//paramêtro default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(10, 90));
//unknown - semelhante ao any mas não executa sem validação de tipo
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === 'number') {
        console.log(`X é um número ${x}`);
    }
}
doSomething([209, 0, 87]);
doSomething(12);
//never - semelhante ao void, mas usado quando a função não retorna absolutamente nada, assim como tratamento de erros
function showErrorMessage(msg) {
    throw new Error(msg);
}
// showErrorMessage("Erro")
// rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5, 65, 7, 78, 6.2345, 324512));
//desestructuring
function showDetails({ name, price }) {
    return `O nome do produto é ${name} e custa R$${price}`;
}
const shirt = { name: "Camise", price: 23.4 };
console.log(showDetails(shirt));
