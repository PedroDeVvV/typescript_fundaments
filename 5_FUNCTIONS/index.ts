//void - funções que não retornam nada
function withoutReturn(): void {
  console.log("F");
}

//callback como argumento
function greeting(name: string) {
  return `Olá ${name}`;
}

function preGreeting(f: (name: string) => string, userName: string) {
  console.log("Preparando a função");

  const greet = f(userName);
  console.log(greet);
}

preGreeting(greeting, "Pedro");
preGreeting(greeting, "Henrique");

//generic functions
function firstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b"]));

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2,
  };
}

const newObject = mergeObjects({ name: "Pedro" }, { job: "Engineer" });
console.log(newObject);

//constraints
function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T;

  if (+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }

  return biggest;
}

console.log(biggestNumber(5, 3));
console.log(biggestNumber("15", "38"));

//Especificar tipo de argumento
function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [234, 342, 4]));
console.log(mergeArrays<number | string>([1, 2, 3], ["234", "342", "P", "4"]));

//paramêtros opcionais
function modernGreeting(name: string, greet?: string) {
  if (greet) {
    return `Olá ${name} ${greet}, tudo bem ?`;
  }

  return `Olá ${name}, tudo bem ?`;
}

console.log(modernGreeting("Pedro", "bom dia"));
console.log(modernGreeting("Pedro"));

//paramêtro default
function somaDefault(n: number, m = 10) { // a tipagem já ocorre nesse estágio(inferencia)
  return n + m;
}

console.log(somaDefault(10))
console.log(somaDefault(10, 90))

//unknown - semelhante ao any mas não executa sem validação de tipo
function doSomething(x: unknown) {
    if(Array.isArray(x)) {
        console.log(x[0])
    } else if(typeof x === 'number') {
        console.log(`X é um número ${x}`)
    }
}

doSomething([209, 0, 87])
doSomething(12)

//never - semelhante ao void, mas usado quando a função não retorna absolutamente nada, assim como tratamento de erros
function showErrorMessage(msg: string): never {
    throw new Error(msg)
}

// showErrorMessage("Erro")


// rest operator
function sumAll(...n: number[]) {
    return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1, 2,3,4,5,65,7,78,6.2345,324512))

//desestructuring
function showDetails({name, price}: {name:string, price:number}): string {
    return `O nome do produto é ${name} e custa R$${price}` 
}

const shirt = {name: "Camise", price: 23.4}

console.log(showDetails(shirt))