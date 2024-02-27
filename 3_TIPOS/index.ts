let numbers: number[] = [1, 2, 3];

numbers.push(2);

const nomes: string[] = ["Pedro", "Leana"];

nomes.push("John");

//outra sintaxes de array
const nums: Array<number> = [100, 200];

//any - qualquer tipo satisfaz a váriavel, deve ser evitada, pois vai contra os principios do TS
const arr1: any = [1, "oi", {}, false, { nome: "Pedro" }];
console.log(arr1);

//parametro tipados

function soma(a: number, b: number) {
  console.log(a + b);
}

soma(30, 20);

//retorno da função
function greeting(name: string, greet?: string): void {
  if (greet) {
    console.log(`Olá  ${name} ${greet}`);
    return;
  }
  console.log(`Olá  ${name}`);
}

greeting("Pedro", "Henrique");

// funções anônimas
setTimeout(function () {
  const salary: number = 1000;
  //   console.log(salary.toString());
}, 200);

//object types
function passCoordinates(coord: { x: number; y: number }) {
  console.log("X coordinates: ", coord.x);
  console.log("Y coordinates: ", coord.y);
}

const obj = { x: 365.2, y: 837345.24 };

passCoordinates(obj);

//propriedades opcionais, null safe operator,  eles precisam ser passados por ultimo
function showNumber(a: number, b: number, c?: number) {
  console.log(a, b, c);
}

showNumber(1, 2);

//validação de props opcionais
function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName) {
    return console.log(`Olá, ${firstName} ${lastName}, tudo bem ?`);
  }

  return console.log(`Olá, ${firstName} tudo bem ?`);
}

advancedGreeting("Pedro", "Henrique");

//union type
function showBalance(balance: string | number) {
  console.log(`O saldo da conta é R$${balance}`);
}

showBalance(100);
showBalance("500");
// showBalance(true) - erro

const arr2: Array<number | string | boolean> = ["1", 1, false]; //Outra forma de definição

function showUserRole(role: string | boolean) {
  if (typeof role === "boolean") {
    return "Usuário não aprovado";
  }

  return `A função do usuário é: ${role}`;
}

console.log(showUserRole("Admin"))
console.log(showUserRole(false))

//Type Alias - permite criar um tipo(não pode ser alterado ao longo do código)
type Id = string | number;

function showId(id: Id): void {
  console.log(`O id é ${id}`)
}

showId(9)


//interfaces - pode ser alterada ao longo do código
interface Point {
  x: number
  y: number
  z: number
}

function showCoords(obj: Point): void {
  console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj:Point = {
  x: 10,
  y: 15,
  z: 20
}

showCoords(coordObj)


//interface x type alias
interface Person {
  name: string
}

//alterando interface, não é possivel fazer isso com type alias
interface Person {
  age: number
}

const somePerson: Person = {name: 'Pedro', age: 19}

console.log(somePerson)


//literal type - trava um valor na variavel, util em funções

let test: "testando"

// test = 1 erro

function showDirection(direction: "left" | "right" | "center"): void {
  //essa função só pode receber um desses 3 valores
  console.log(`A direção é ${direction}`)
}

showDirection("left")

//Non-null Assertion Operator (!) - quando temos certeza de que esse valor não será nulo
const p = document.getElementById("some-p")
console.log(p!.innerText)

//Bigint
let n: bigint;
n = 1000n
console.log(n)
console.log(typeof n)
console.log(n + 100n)

//symbol - identificadores únicos
let symbolA:symbol = Symbol("A")
let symbolB = Symbol("a")

console.log(symbolA, symbolB)

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)