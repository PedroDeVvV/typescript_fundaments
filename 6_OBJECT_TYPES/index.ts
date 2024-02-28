//interface como paramêtro
interface Product {
  name: string;
  price: number;
  isAvailable?: boolean;
}

function showProductDetails(product: Product): void {
  console.log(
    `O nome do produto é ${product.name} e seu valor é R$${product.price}`
  );
  if ("isAvailable" in product) {
    if (product.isAvailable) {
      console.log(`O produto ${product.name} é válido`);
    } else {
      console.log(`Produto ${product.name} inválido`);
    }
  } else {
    console.log(`Status do produto ${product.name} não informado`);
  }
}

const prod1: Product = {
  name: "Cadeira",
  price: 23.44,
  isAvailable: true,
};

const prod2: Product = {
  name: "HB20",
  price: 50.352,
};

showProductDetails(prod1);
showProductDetails(prod2);
showProductDetails({ name: "BROS 150", price: 82.48, isAvailable: false });

//readonly - pode ser alterada uma única vez  na criação do dado
interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: "VW",
  wheels: 4,
};

console.log(fusca);

fusca.brand = "Volkswagen";
// fusca.wheels = 9  erro, não posso alterar

//index signature - usado quando não sabemos os nomes das chaves, mas sabemos ausi os tipos de um objeto ou array
interface CoordObject {
  [index: string]: number; //primeiro o nome da propriedade e depois o tipo dela
}

let obj: CoordObject = {
  // x: "teste" erro
  // 12: 312 - erro
  x: 29,
};

obj.y = 15;

console.log(obj);

//herança de interfaces - extending types
interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superpowers: string[];
}

const pedro: Human = {
  name: "Pedro",
  age: 19,
};

const goku: SuperHuman = {
  name: "Goku",
  age: 29,
  superpowers: ["Kamehameha", "voo"],
};

console.log(pedro);
console.log(goku);

//intersection types - usado para criar tipos mais complexos a partir de duas interfaces, podemos concatenar com &
interface Character {
  name: string;
}

interface Gun {
  type: string;
  caliber: number;
}

type HumanWithGun = Character & Gun; //criando um novo tipo de objeto

const arnold: HumanWithGun = {
  name: "Arnold S",
  type: "Minigun",
  caliber: 9,
};

console.log(arnold);

//readOnlyArray

let myArray: ReadonlyArray<string> = ["Maçã", "Uva", "Pera"];
// myArray[3] = "Mamão" erro ai tentar adicionar propriedade

console.log(myArray);

myArray.forEach((item) => {
  console.log("Fruta: " + item);
});

let arr = myArray.map((item) => {
  //ainda posso posso modificar o array através de métodos
  return `Fruta: ${item}`;
});

console.log(arr);

//tuplas
type fiverNumber = [number, number, number, number, number];

const myNumberArray: fiverNumber = [1, 2, 3, 4, 5];
// const myNumberArr: fiverNumber = [1,2,3,4,5,6] erro
// const myNumberArr: fiverNumber = [1,2,false,4,5,6] erro

//tupla com readonly
function showNumbers(numbers: readonly [number, number]) {
  // numbers[0] = 10 erro
  console.log(numbers[0]);
  console.log(numbers[1]);
}

showNumbers([1, 2]);
