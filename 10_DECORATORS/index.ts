//decorator

function myDecorator() {
  console.log("Iniciando decorator");
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executando decorator");
    console.log("Target: ", target);
    console.log("propertKey: ", propertKey);
    console.log("Descriptor: ", descriptor);
  };
}

class myClass {
  name!: string;

  //   @myDecorator()
  testing() {
    console.log(`Terminando execução do método`);
  }
}

const myObj = new myClass();
myObj.testing();

//múltiplos decorators
function a() {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executando a.");
  };
}

function b() {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executando b.");
  };
}

function c() {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executando c.");
  };
}

console.log("-------------------------------------------------------");

class MultipleDecorators {
  @a()
  @b() //decorators são executados de baixo para cima
  @c()
  testing() {
    console.log("Terminando a execução");
  }
}

const n1 = new MultipleDecorators();
n1.testing();

//class decorator
function classDec(constructor: Function) {
  console.log(constructor);
  if (constructor.name === "User") {
    console.log("Criando usuário");
  }
}

@classDec
class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const p1 = new User("Pedro");

console.log(p1);

//decorator de método
function enumerable(value: boolean) {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDecorator
  ) {
    // descriptor.enumerable = value
  };
}
class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }

  //   @enumerable(false)
  showName() {
    return `O nome da máquina é: ${this.name}`;
  }
}

const m1 = new Machine("Trator");
console.log(m1);
