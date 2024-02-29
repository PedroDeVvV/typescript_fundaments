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
}

const pObj = new PrivateClass();

// console.log(pObj.name) - erro
console.log(pObj.showName()); // forma correta
