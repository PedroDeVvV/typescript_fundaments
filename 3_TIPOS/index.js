"use strict";
let numbers = [1, 2, 3];
numbers.push(2);
const nomes = ["Pedro", "Leana"];
nomes.push("John");
//outra sintaxes de array
const nums = [100, 200];
//any - qualquer tipo satisfaz a váriavel, deve ser evitada, pois vai contra os principios do TS
const arr1 = [1, "oi", {}, false, { nome: "Pedro" }];
console.log(arr1);
//parametro tipados
function soma(a, b) {
    console.log(a + b);
}
soma(30, 20);
//retorno da função
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá  ${name} ${greet}`);
        return;
    }
    console.log(`Olá  ${name}`);
}
greeting("Pedro", "Henrique");
// funções anônimas
setTimeout(function () {
    const salary = 1000;
    //   console.log(salary.toString());
}, 200);
//object types
function passCoordinates(coord) {
    console.log("X coordinates: ", coord.x);
    console.log("Y coordinates: ", coord.y);
}
const obj = { x: 365.2, y: 837345.24 };
passCoordinates(obj);
//propriedades opcionais, null safe operator,  eles precisam ser passados por ultimo
function showNumber(a, b, c) {
    console.log(a, b, c);
}
showNumber(1, 2);
//validação de props opcionais
function advancedGreeting(firstName, lastName) {
    if (lastName) {
        return console.log(`Olá, ${firstName} ${lastName}, tudo bem ?`);
    }
    return console.log(`Olá, ${firstName} tudo bem ?`);
}
advancedGreeting("Pedro", "Henrique");
//union type
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance(100);
showBalance("500");
// showBalance(true) - erro
const arr2 = ["1", 1, false]; //Outra forma de definição
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole("Admin"));
console.log(showUserRole(false));
function showId(id) {
    console.log(`O id é ${id}`);
}
showId(9);
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
const somePerson = { name: 'Pedro', age: 19 };
console.log(somePerson);
//literal type - trava um valor na variavel, util em funções
let test;
// test = 1 erro
function showDirection(direction) {
    //essa função só pode receber um desses 3 valores
    console.log(`A direção é ${direction}`);
}
showDirection("left");
//Non-null Assertion Operator (!) - quando temos certeza de que esse valor não será nulo
const p = document.getElementById("some-p");
console.log(p.innerText);
//Bigint
let n;
n = 1000n;
console.log(n);
console.log(typeof n);
console.log(n + 100n);
//symbol - identificadores únicos
let symbolA = Symbol("A");
let symbolB = Symbol("a");
console.log(symbolA, symbolB);
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
