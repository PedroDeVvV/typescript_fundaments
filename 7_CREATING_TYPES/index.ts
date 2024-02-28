//Generics - usamos quando a função pode aceitar mais de um tipo
function showData<T>(arg: T): string {
  return `O dado é: ${arg}`;
}

console.log(showData(5)); //exibe pois transforma o dado em ums string, a partir do generic
console.log("Testando generic");
console.log(false);
console.log([], {});
console.log(["uva", "abacate", 2]);

//reduzindo os tipos de dados aceitos com constraincts
function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é ${obj.name}`;
}

const myObj = { name: "Porta", cor: "Branca" };
const otherProduct = { name: "Carro", wheels: 4 };

console.log(showProductName(myObj));
console.log(showProductName(otherProduct));

//generics com interface
interface MyObject<T, U, Q> {
  //com o <t,u> o typescript entende que qualquer tipo pode chegar aqui
  name: string;
  wheels: T;
  engine: U;
  color: Q;
}

type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Car = {
  name: "audi",
  wheels: 4,
  engine: 4.0,
  color: "Nardo gray",
};

const myPen: Pen = {
  name: "Caneta bic",
  wheels: false,
  engine: false,
  color: "Azul",
};

console.log(myCar);
console.log(myPen);

//type parameters - diz que algum parametro de alguma função pe a chave de um obj
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${String(key)} está presente no obj e tem o valor ${
    obj[key]
  }`;
}

const server = {
  hd: "Toshiba 1 TB",
  ram: "KINGSTON 12GB",
};

console.log(getSomeKey(server, "ram"));
// console.log(getSomeKey(server, "teste")); erro no paramÊtro existente

//keyoftype - podemos criar um novo tipo , aceita dados do tipo object
type Character = { name: string; age: number; hasDriveLicense: boolean };

type C = keyof Character;

function showCharName(obj: Character, name: C): string {
  return `${obj[name]}`;
}

const myChar: Character = {
  name: "Pedro",
  age: 19,
  hasDriveLicense: true,
};

console.log(showCharName(myChar, "name"));

//typeof type operator - podemos criar um novo tipo baseado em um tipo de algum dado
const userName: string = "Pedro";

const userName2: typeof userName = "João"; // tipa com base da variavel acima
const userName3: typeof userName2 = "Daniel";
// const userName5: typeof userName3 = false - erro

type x = typeof userName; //criando um type personalizado com o valor de username

const userName4: x = "Adair"; //implementando

//indexed access types
type Truck = { km: number; kg: number; description: string };

type Desc = Truck["description"];
type Km = Truck["km"]; //diferente do keyoftype, aqui só queremos reservar uma chave do object literal

const newTruck: Truck = {
  km: 190000,
  kg: 20000,
  description: "Bitruck",
};

function showKm(desc: Desc, km: Km): void {
  console.log(`o veículo ${desc} tem a KM de ${km}`);
}

showKm(newTruck.description, newTruck.km);

const newCar = {
  km: 3000,
  kg: 1220,
  description: "sedan",
};

showKm(newCar.description, newCar.km); //podemos usar em objetos com chaves semelhantes

//conditional expressions type - cria tipo com base em if else
interface A {}

interface B extends A {}

type myType = B extends A ? number : string;

const someVar: myType = 5;
// const someVar2:myType = "teste" erro pois B está herdando de A, logo myType tem o tipo number

//template literal type - interpolando variaveis em strings, forma de custumizar tipos de maneira infinita

type testA = "text";
type CustomType = `some ${testA}`;

const testing: CustomType = "some text";

type a1 = "Testando";
type a2 = "union";

type a3 = `${a1}` | `${a2}`;

const a4: a3 = "Testando"; //a4 tem os valores do tipo a3
const a5: a3 = "union"; //a5 tem os valores do tipo a3