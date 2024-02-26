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

advancedGreeting("Pedro", "Henrique")

//union type