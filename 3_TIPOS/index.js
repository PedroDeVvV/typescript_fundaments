var numbers = [1, 2, 3];
numbers.push(2);
var nomes = ["Pedro", "Leana"];
nomes.push("John");
//outra sintaxes de array
var nums = [100, 200];
//any - qualquer tipo satisfaz a váriavel, deve ser evitada, pois vai contra os principios do TS
var arr1 = [1, "oi", {}, false, { nome: "Pedro" }];
console.log(arr1);
//parametro tipados
function soma(a, b) {
    console.log(a + b);
}
soma(30, 20);
//retorno da função
function greeting(name, greet) {
    if (greet) {
        console.log("Ol\u00E1  ".concat(name, " ").concat(greet));
        return;
    }
    console.log("Ol\u00E1  ".concat(name));
}
greeting("Pedro", "Henrique");
// funções anônimas
setTimeout(function () {
    var salary = 1000;
    //   console.log(salary.toString());
}, 200);
//object types
function passCoordinates(coord) {
    console.log("X coordinates: ", coord.x);
    console.log("Y coordinates: ", coord.y);
}
var obj = { x: 365.2, y: 837345.24 };
passCoordinates(obj);
//propriedades opcionais, null safe operator,  eles precisam ser passados por ultimo
function showNumber(a, b, c) {
    console.log(a, b, c);
}
showNumber(1, 2);
//validação de props opcionais
function advancedGreeting(firstName, lastName) {
    if (lastName) {
        return console.log("Ol\u00E1, ".concat(firstName, " ").concat(lastName, ", tudo bem ?"));
    }
    return console.log("Ol\u00E1, ".concat(firstName, " tudo bem ?"));
}
advancedGreeting("Pedro", "Henrique");
//union type
