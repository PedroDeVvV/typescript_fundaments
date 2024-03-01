//campos em classes
class User {
  //podemos usar (!) para criar um campo sem valor inicial
  name!: string;
  age!: number;
}

const pedro = new User();
pedro.name = "Pedro";
pedro.age = 19;
// pedro.job = "Programmer" erro

console.log(pedro);

//iniciando com novos valores - constructor
class NewUser {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const joao = new NewUser("João", 22);
const henrique = new NewUser("Henrique", 42);

console.log(joao);
console.log(henrique);

//campos readonly
class Car {
  name;
  readonly wheels = 4; //propriedade inicializada com valor default e não é possivel atribuir um novo valor

  constructor(name: string) {
    this.name = name;
  }
}

const fusca = new Car("fusca");
console.log(fusca);
console.log((fusca.name = "Fusca turbo"));
// console.log(fusca.wheels = 10); - erro

//herança e super
class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const trator = new Machine("RB 22");

class KillerMachine extends Machine {
  guns;

  constructor(name: string, guns: number) {
    super(name); // estou recebendo a propriedade de Machine
    this.guns = guns;
  }
}

const mach1 = new KillerMachine("Mach 3", 2);

console.log(mach1);

//métodos
class Dwarf {
  name;

  constructor(name: string) {
    this.name = name;
  }

  greeting() {
    console.log(`${this.name}: Hey stranger!`);
  }
}

const brok = new Dwarf("Brok");
const sindri = new Dwarf("Sindri");

brok.greeting();
sindri.greeting();

//this
class Truck {
  model;
  hp;

  constructor(model: string, hp: number) {
    this.model = model;
    this.hp = hp;
  }

  showDetails() {
    console.log(`Caminhão do modelo ${this.model} possuí ${this.hp}hp`);
  }
}

const scania = new Truck("R440", 750);
scania.showDetails();

//getters - maneiras de retornar valores
class Person {
  name;
  surname;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  get fullName() {
    //um getter deve retornar algo
    return console.log(`${this.name} ${this.surname}`);
  }

  get firstName() {
    return console.log(`${this.name}`);
  }
}

const p1 = new Person("Pedro", "Henrique");
p1.fullName;
p1.firstName;

//setters
class Coords {
  x!: number;
  y!: number;

  set fillX(x: number) {
    if (x === 0) {
      return;
    }
    this.x = x;
    console.log("X inserido com sucesso");
  }

  set fillY(y: number) {
    if (y === 0) {
      return;
    }
    this.y = y;
    console.log("Y inserido com sucesso");
  }

  get getCoords() {
    return console.log(`X: ${this.x}, Y: ${this.y}`);
  }
}

const myCoords = new Coords();
myCoords.fillX = 10;
myCoords.fillY = 162;

console.log(myCoords);
myCoords.getCoords;

//herdando interfaces
interface showTitle {
  itemTitle(): string;
}

class blogPost implements showTitle {
  title;

  constructor(title: string) {
    this.title = title;
  }

  itemTitle(): string {
    return `O titulo do post é ${this.title}`;
  }
}

const myPost = new blogPost("Hello world");

console.log(myPost.itemTitle());

class TestingInterface implements showTitle {
  title;

  constructor(title: string) {
    this.title = title;
  }

  itemTitle(): string {
    return `O titulo é ${this.title}`;
  }
}

//override - técnica usada para substituir um método de classe que herdamos
//temos que criar o método com o mesmo nome na classe filha

class Base {
  someMethod() {
    console.log("Alguma coisa");
  }
}

class Nova extends Base {
  someMethod() {
    console.log("Testando outra coisa"); // alterando o método pra classe Nova
  }
}

const myObject = new Nova();
const myObj = new Base();
myObject.someMethod(); //Testando outra coisa
myObj.someMethod(); //Alguma Coisa

//modificadores de acesso
//public - por padrão as propriedades são criadas com public

class C {
  public x = 10;
}

class D extends C {}

const cInstance = new C();
const dInstance = new D();

console.log(cInstance.x);
console.log(dInstance.x); // vou ter acesso ao x

//protected - usado apenas em subclasses, uma propriedade só pode ser acessada por um método, adiciona uma camada de sgeurança
// ao código

class E {
  protected x = 10;

  protected protectedMethod() {
    console.log(`Esse método é protegido`);
  }
}

class F extends E {
  showX() {
    console.log(`X: ${this.x}`);

    this.protectedMethod(); // aqui eu posso executar o protected méthod
  }

  set alterX(x: number) {
    this.x = x;
  }
}

const fInstance = new F();
// console.log(fInstance.x) erro
fInstance.showX();
// fInstance.protectedMethod() erro

fInstance.alterX = 20231; //alterando o valor de uma propriedade protected

fInstance.showX();

//private - métodos só podem ser acessados nas classes em que foram criados e
// ainda sim necessitam de métodos

class PrivateClass {
  private name = "Private";

  showName() {
    return this.name;
  }

  private privateMethod() {
    console.log("Método Privado");
  }

  public showPrivateMethod() {
    this.privateMethod();
  }
}

const pObj = new PrivateClass();

// console.log(pObj.name) - erro
console.log(pObj.showName()); // forma correta
// pObj.privateMethod() maneira incorreta
pObj.showPrivateMethod();

class TestingPrivate extends PrivateClass {
  myMethod() {
    // this.privateMethod impossivel acessar
  }
}

//static members - podemos criar propriedades estaticos, o acesso njão dependerá de objetos
class StaticMembers {
  static prop = "Teste Static";

  static staticMethod() {
    console.log("Esse é um método estático");
  }
}

// console.log(StaticMembers.prop); não da pra acessar se não estiver com a flag static
console.log(StaticMembers.prop);
StaticMembers.staticMethod();

//dessa forma podemos acessar métodos de uma classe sem a necessidade de instanciar ela
// ou seja, sem criar um novo objeto

//generic class
class Item<T, U> {
  first;
  second;

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }

  get showFirst() {
    return `O first é: ${this.first}`;
  }
}

const newItem = new Item("caixa", "surpresa");
console.log(newItem.showFirst);
console.log(typeof newItem.showFirst);

const secondItem = new Item(22, false);

console.log(secondItem);

//parameter properties
class ParameterProperties {
  constructor(public name: string, private qty: number, private price: number) {
    this.name = name;
    this.qty = qty;
    this.price = price;
  }

  get showQty() {
    return `Qtd total: ${this.qty}`;
  }

  get showPrice() {
    return `Qtd total: ${this.price}`;
  }
}

const newShirt = new ParameterProperties("Camisa", 5, 19.99);

console.log(newShirt.name);
console.log(newShirt.showPrice);
console.log(newShirt.showQty);

//class expressions - criar um classe anônima, iremos colocar a classe em uma varivel
const myClass = class<T> {
  name;

  constructor(name: T) {
    this.name = name;
  }
};

const j1 = new myClass("Gustavo");
const j2 = new myClass(2);

console.log(j1.name);
console.log(j2.name);

//classe abstrata - serve de molde para outra classe,
//todos os métodos dela devem ser implementados nas classes que á herdam

abstract class AbstractClass {
  abstract showName(): void;
}

// const newObj = new AbstractClass() erro

class AbstractExample extends AbstractClass {
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  showName(): void {
    console.log(`O nome é ${this.name}`);
  }
}

const n1 = new AbstractExample("Jonas");
n1.showName();

//relação entre classes
class Dog {
  name!: string;
}

class Cat {
  name!: string;
}

const doguinho: Dog = new Cat();

doguinho.name = "Aries";
console.log(doguinho);
